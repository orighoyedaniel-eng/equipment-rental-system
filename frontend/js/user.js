async function loadEquipment(query = "") {
  const res = await fetch("/api/equipment/search?query=" + query, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  });
  const equipment = await res.json();
  document.getElementById("equipmentList").innerHTML = equipment.map(eq => `
    <tr>
      <td>${eq.id}</td>
      <td>${eq.name}</td>
      <td>${eq.category}</td>
      <td>${eq.quantity}</td>
      <td><button onclick="rent(${eq.id})" class="btn btn-sm btn-primary">Rent</button></td>
    </tr>
  `).join("");
}

async function rent(id) {
  const res = await fetch("/api/rentals/rent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({ equipment_id: id })
  });
  if (res.ok) {
    alert("Equipment rented!");
    loadEquipment();
    loadRentals();
  } else {
    alert("Failed to rent.");
  }
}

async function loadRentals() {
  const res = await fetch("/api/rentals/my", {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  });
  const rentals = await res.json();
  document.getElementById("rentalList").innerHTML = rentals.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>${r.Equipment ? r.Equipment.name : "N/A"}</td>
      <td>${r.status}</td>
      <td>${new Date(r.due_date).toLocaleDateString()}</td>
      <td>${r.status === "rented" ? `<button onclick="returnRental(${r.id})" class="btn btn-sm btn-warning">Return</button>` : ""}</td>
    </tr>
  `).join("");
}

async function returnRental(id) {
  const res = await fetch("/api/rentals/return", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({ rental_id: id })
  });
  if (res.ok) {
    alert("Returned successfully!");
    loadEquipment();
    loadRentals();
  } else {
    alert("Failed to return.");
  }
}

// Hook search form
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target.query.value;
  loadEquipment(query);
});

// Initial load
loadEquipment();
loadRentals();
