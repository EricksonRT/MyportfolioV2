// Selecciona el botón y le agrega/quita la clase active

const buttons = document.querySelectorAll('.nav__itemref');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    resetLink();
    btn.classList.add('active');
    console.log(btn);
  });
});

const resetLink = () => {
  buttons.forEach((btn) => btn.classList.remove('active'));
};
