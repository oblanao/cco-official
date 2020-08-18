const addClass = (selectorString, className) => {
  const el = document.querySelector(selectorString);
  el.classList.add(className);
};
const removeClass = (selectorString, className) => {
  const el = document.querySelector(selectorString);
  el.classList.remove(className);
};

export { addClass, removeClass };
