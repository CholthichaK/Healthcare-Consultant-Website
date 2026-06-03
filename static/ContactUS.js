const knowMoreBtn = document.getElementById("knowMoreBtn");
const contactDetails = document.getElementById("contactDetails");

knowMoreBtn.addEventListener("click", () => {
  contactDetails.classList.add("show");
  contactDetails.scrollIntoView({ behavior: "smooth" });
});