function openSidebar() {
  document.getElementById("mySidebar").style.left = "0";
  document.getElementsByClassName("open-btn")[0].style.display = "none";
}
function closeSidebar() {
  document.getElementById("mySidebar").style.left = "-250px";
  document.getElementsByClassName("open-btn")[0].style.display = "block";
}
