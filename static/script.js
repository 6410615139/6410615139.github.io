// Forgive button click
document.getElementById('forgive').addEventListener('click', () => {
    alert("Thank you for forgiving me! 💖");
  });
  
  // Don't Forgive button hover escape
  const dontForgiveButton = document.getElementById('dontForgive');
  
  dontForgiveButton.addEventListener('mouseenter', () => {
    // Randomize new position
    const x = Math.random() * (window.innerWidth - dontForgiveButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - dontForgiveButton.offsetHeight);
  
    // Apply new position
    dontForgiveButton.style.position = 'absolute';
    dontForgiveButton.style.left = `${x}px`;
    dontForgiveButton.style.top = `${y}px`;
  });
  
  // Prevent the button from being too far outside the viewport
  window.addEventListener('resize', () => {
    const rect = dontForgiveButton.getBoundingClientRect();
    if (rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
      dontForgiveButton.style.left = '50%';
      dontForgiveButton.style.top = '50%';
      dontForgiveButton.style.transform = 'translate(-50%, -50%)';
    }
  });
  