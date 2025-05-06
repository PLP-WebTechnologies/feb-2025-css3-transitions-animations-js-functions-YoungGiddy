<script>
  const btn = document.getElementById("myBtn");

  if (localStorage.getItem("animate") === "true") {
    btn.classList.add("animate");
  }

  btn.addEventListener("click", () => {
    btn.classList.toggle("animate");


    const isAnimated = btn.classList.contains("animate");
    localStorage.setItem("animate", isAnimated);
  });
</script>