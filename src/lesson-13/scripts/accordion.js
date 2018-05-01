function accordion(accordionContainer) {
  const ACTIVE_CLASS_NAME = 'active';
  const elems = Array.from(accordionContainer.querySelectorAll('.accordion__block'));
  const titles = Array.from(accordionContainer.querySelectorAll('.accordion__title'));

  function closeAll() {
    elems.forEach((el) => el.classList.remove(ACTIVE_CLASS_NAME))
  }

  titles.forEach((title) => {
    title.addEventListener('click', () => {
      const accordionBlock = title.parentElement;
      if(accordionBlock.classList.contains(ACTIVE_CLASS_NAME)) {
        accordionBlock.classList.remove(ACTIVE_CLASS_NAME);
      } else {
        closeAll();
        accordionBlock.classList.add(ACTIVE_CLASS_NAME);
      }
    });
  });
}

// accordion(document.querySelector('.accordion'));