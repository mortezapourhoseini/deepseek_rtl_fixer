document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("body, div, p, span, a, li, h1, h2, h3, h4, h5, h6");
  elements.forEach((element) => {
    if (element.innerText.match(/[\u0600-\u06FF]/)) { // تشخیص متن فارسی
      element.style.direction = "rtl";
      element.style.textAlign = "right";
    }
  });
});
