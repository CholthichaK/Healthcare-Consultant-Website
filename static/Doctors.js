const search = document.getElementById("doctorSearch");
const filter = document.getElementById("specialtyFilter");
const cards = document.querySelectorAll(".doctor-card");

function updateDoctors() {
  const keyword = search.value.toLowerCase();
  const specialty = filter.value;

  cards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    const cardSpecialty = card.dataset.specialty;
    const matchesSearch = name.includes(keyword) || cardSpecialty.toLowerCase().includes(keyword);
    const matchesFilter = specialty === "all" || specialty === cardSpecialty;

    card.style.display = matchesSearch && matchesFilter ? "block" : "none";
  });
}

search.addEventListener("input", updateDoctors);
filter.addEventListener("change", updateDoctors);

document.querySelectorAll(".profile-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".doctor-card");
    alert(`${card.dataset.name}\nSpecialty: ${card.dataset.specialty}\nAvailable for consultation and appointment booking.`);
  });
});