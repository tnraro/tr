const selector = ":not(pre) > code,kbd";

replace(selector);
window.addEventListener("scroll", () => {
  replace(selector);
});

function replace(selector) {
  [...document.querySelectorAll(selector)].forEach((e) =>
    e.replaceWith(`\`${e.innerText}\``)
  );
}
