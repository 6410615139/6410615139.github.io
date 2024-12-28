// Forgive button click
document.getElementById('forgive').addEventListener('click', () => {
  alert("Thank you for forgiving me! 💖 You are the best!");
  throwConfetti(); // Add confetti effect
  document.body.style.backgroundColor = '#FFD700'; // Change background color to gold
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
