'use strict';

const ul = document.querySelectorAll('ul');

ul.forEach((node) => {
  node.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const li = e.target.closest('li');

      if (li.querySelector(':scope > ul')) {
        li.classList.toggle('some-class');
      }
    }
  });
});
