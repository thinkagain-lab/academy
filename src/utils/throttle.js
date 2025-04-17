export function throttle(f, delay) {
    let timer = 0;
    return function(...args) {
      clearTimeout(timer);
      timer = window.setTimeout(() => f.apply(this, args), delay);
    };
  }
  