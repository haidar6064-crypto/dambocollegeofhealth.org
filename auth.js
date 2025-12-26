// assets/js/auth.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const role = document.getElementById('role').value;

  // Fake auth: in real app, validate on server
  if (role === 'student') window.location.href = './student/dashboard.html';
  if (role === 'teacher') window.location.href = './teacher/dashboard.html';
  if (role === 'admin') window.location.href = './admin/dashboard.html';
});
