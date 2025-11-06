// Display name from query string
const params = new URLSearchParams(window.location.search);
const type = params.get("type");
if (type) {
  document.getElementById("username").innerText = type.charAt(0).toUpperCase() + type.slice(1);
}

// Optional: Animation or alerts
window.onload = () => {
  console.log("Dashboard loaded for:", type);
};
