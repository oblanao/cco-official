const addClass = (selectorString, className) => {
  const el = document.querySelector(selectorString);
  if (el) {
    el.classList.add(className);
  }
};
const removeClass = (selectorString, className) => {
  const el = document.querySelector(selectorString);
  if (el) {
    el.classList.remove(className);
  }
};

export { addClass, removeClass };
