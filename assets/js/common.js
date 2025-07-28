const headerElem = document.getElementById("header");
headerElem.innerHTML = `
  <div class="top-header">
    <h1>Dr. Paula-Anca Sulea</h1>
    <p>Medic Primar - Medicină de Familie | Promotor al prevenției și vaccinării</p>
  </div>
  <button class="hamburger" id="menu-toggle">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <nav class="main-nav">
    <ul id="nav-links">
      <li><a href="index.html">Acasă</a></li>
      <li><a href="about.html">Despre</a></li>
      <li><a href="services.html">Servicii</a></li>
      <li><a href="health-tools.html">Calculatoare Sănătate</a></li>
      <li><a href="health-around-the-world.html">Sănătate Globală</a></li>
      <li><a href="blog.html">Articole</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
`;

// Attach toggle after injection (no need for DOMContentLoaded since defer is used)
const toggleBtn = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-links");
if (toggleBtn && navList) {
  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}