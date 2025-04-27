document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const confirmEmail = document.getElementById('confirmEmail').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (email !== confirmEmail) {
        alert('Emails do not match!');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      alert('Registration successful!');
      window.location.href = 'explore.html';
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'explore.html';
      } else {
        alert('Invalid credentials!');
      }
    });
  }
});
