import './lesson-12.scss';
const widgets = document.querySelectorAll('.lighter');

// function expression
const lighter = (htmlElement) => {
  const lighters = htmlElement.querySelectorAll('.light');
  const btnToggle = htmlElement.querySelector('.btn-toggle');
  let isEnabled = btnToggle.classList.contains('active');

  if (isEnabled === false) {
    btnToggle.textContent = 'OFF';
  } else {
    btnToggle.textContent = 'ON';
  }

  btnToggle.onclick = () => {
    btnToggle.classList.toggle('active');
    isEnabled = !isEnabled;
    if (isEnabled === false) {
      toggleOff();
      btnToggle.textContent = 'OFF';
    } else {
      btnToggle.textContent = 'ON';
    }
  };

  for (let light of lighters) {
    light.onclick = function () {
      if (isEnabled === true) {
        toggleOff();
        light.classList.add('active');
      }
    }
  }

  function toggleOff () {
    for (let light of lighters) {
      light.classList.remove('active');
    }
  }
};

widgets.forEach((el) => {
  lighter(el);
});

