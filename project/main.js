// Optional interactivity
document.querySelectorAll("button").forEach(btn =>
    btn.addEventListener("click", () => {
      console.log("Button clicked:", btn.innerText);
    })
  );

  const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    sidebar.classList.toggle("active");
   
    todo.addEventListener("click", () => {
        sidebar.classList.remove("active");
        menuIcon.classList.remove("active");
    });
});


