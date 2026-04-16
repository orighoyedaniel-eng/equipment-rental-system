async function loadEquipment() {
  const res = await fetch("/api/equipment", {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  });
  const equipment = await res.json();
  document.getElementById("equipmentTable").innerHTML = equipment.map(eq => `
    <tr>
      <td>${eq.id}</td>
      <td>${eq.name}</td>
      <td>${eq.category}</td>
      <td>${eq.quantity}</td>
    </tr>
  `).join("");
}

document.getElementById("addEquipmentForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());
  const res = await fetch("/api/equipment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(formData)
  });
  if (res.ok) {
    alert("Equipment added!");
    loadEquipment();
  } else {
    alert("Failed to add equipment.");
  }
});

loadEquipment();
