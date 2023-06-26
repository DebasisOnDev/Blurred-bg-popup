const btnelement = document.querySelector("button");
btnelement.addEventListener("click", () => {
  const head = document.querySelector("h1");
  const btn = document.querySelector("button");
  const container = document.querySelector("body");
  container.classList.add("active");
  head.style.opacity = "0.5";
  btn.style.opacity = "0.5";
  const containeranmn = document.querySelector(".container");
  containeranmn.classList.add("containeranimate");
});
