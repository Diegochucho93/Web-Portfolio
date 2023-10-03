// I declare two variables.
const bar = document.getElementById('bar');
const closedBar = document.getElementById('close');
const nav = document.getElementById('nav');

//we start an IF to check for if someone clicks our bar

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
};

if (closedBar) {
    closedBar.addEventListener('click', () => {
      const nav = document.getElementById('nav');
      console.log('nav class list', nav.classList);
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    });
  };

  