
  document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get form field values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (fullName.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Here, you can send the data to your server (backend) using fetch()
    console.log('Form Submitted:', { fullName, email, message });

    // Show success message and clear form
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('userForm').reset();
  });
