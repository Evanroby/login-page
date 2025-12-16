document.addEventListener('DOMContentLoaded', function () {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('active');
  });

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    const submitBtn = loginForm.querySelector('.btn-primary');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Signing in...</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
      console.log('Login attempted with:', {
        email,
        password: '***',
        remember
      });

      alert('Login successful! (This is a demo)');

      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });

  const socialButtons = document.querySelectorAll('.social-btn');
  socialButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const provider = this.textContent.trim();
      console.log(`Login with ${provider} clicked`);
      alert(`${provider} login would be initiated here (This is a demo)`);
    });
  });

  const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function () {
      this.parentElement.classList.remove('focused');
    });
  });

  const forgotPassword = document.querySelector('.forgot-password');
  forgotPassword.addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
      alert(`Password reset link would be sent to: ${email} (This is a demo)`);
    } else {
      alert('Please enter your email address first');
      document.getElementById('email').focus();
    }
  });

  const signupLink = document.querySelector('.signup-link a');
  signupLink.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Navigate to sign up page');
    alert('Would navigate to sign up page (This is a demo)');
  });
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach((group, index) => {
    group.style.animation = `slideIn 0.6s ease-out ${index * 0.1}s forwards`;
    group.style.opacity = '0';
  });
  const style = document.createElement('style');
  style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
  document.head.appendChild(style);
});
