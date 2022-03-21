document.addEventListener("DOMContentLoaded", function () {
  //COOKIE ALERT
  const cookieAlert = document.querySelector(".cookie-alert");
  const cookieBtn = cookieAlert.querySelector(".cookie-btn");

  const handleCookies = () => {
    const cookies = localStorage.getItem("cookie");
    if (cookies) {
      cookieAlert.classList.add("hide");
    }
  };

  const handleAlert = () => {
    localStorage.setItem("cookie", "true");
    cookieAlert.style.animation = "hide-alert 2s forwards";
  };

  cookieBtn.addEventListener("click", handleAlert);

  handleCookies();
});
