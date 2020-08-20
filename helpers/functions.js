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

const vh = (document) =>
  Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  ) / 100;
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export { addClass, removeClass, isMobile, vh };
