document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const toggleBtn = passwordInput.parentElement.querySelector('button');
    const icon = toggleBtn.querySelector('.material-symbols-outlined');

    toggleBtn.addEventListener('click', function () {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      icon.textContent = isPassword ? 'visibility' : 'visibility_off';
    });
  });


 document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const toggleDiv = passwordInput.parentElement.querySelector('.absolute');
    const icon = toggleDiv.querySelector('.material-symbols-outlined');

    toggleDiv.addEventListener('click', function () {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      icon.textContent = isPassword ? 'visibility' : 'visibility_off';
    });
  });