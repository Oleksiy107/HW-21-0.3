function addShadow(button) {
    button.classList.add('clicked');
    return Promise.resolve(button);
  }
  
  function showMessage(message) {
    alert(message);
  }
  
  const buttonCount = 5;
  
  const box = document.getElementById('box');
  
  for (let i = 1; i <= buttonCount; i++) {
    const btnElem = document.createElement('button');
    btnElem.className = 'button';
    btnElem.textContent = 'Click';
    box.appendChild(btnElem);
  }
  
  const buttons = Array.from(document.querySelectorAll('.button'));
  const oddButtons = buttons.filter((_, index) => index % 2 === 0);
  const evenButtons = buttons.filter((_, index) => index % 2 !== 0);
  
  const oddButtonClickPromises = oddButtons.map(button => {
    return new Promise(resolve => {
      button.addEventListener('click', async () => {
        await addShadow(button);
        resolve(button);
      });
    });
  });
  
  Promise.all(oddButtonClickPromises).then(clickedOddButtons => {
    if (clickedOddButtons.length === oddButtons.length) {
      showMessage('All odd buttons are clicked');
    }
  });
  
  const evenButtonClickPromises = evenButtons.map(button => {
    return new Promise(resolve => {
      button.addEventListener('click', async () => {
        await addShadow(button);
        resolve(button);
      });
    });
  });
  
  Promise.all(evenButtonClickPromises).then(clickedEvenButtons => {
    if (clickedEvenButtons.length === evenButtons.length) {
      showMessage('All even buttons are clicked');
    }
  });
  
  const allButtonClickPromises = buttons.map(button => {
    return new Promise(resolve => {
      button.addEventListener('click', async () => {
        await addShadow(button);
        resolve(button);
      });
    });
  });
  
  Promise.all(allButtonClickPromises).then(clickedButtons => {
    if (clickedButtons.length === buttons.length) {
      showMessage('All buttons are clicked');
    }
  });
  