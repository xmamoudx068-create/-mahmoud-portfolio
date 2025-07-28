

// Custom cursor implementation
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Change cursor style on interactive elements
const interactiveElements = ['button', 'a', '.project-card', 'input', 'textarea'];

interactiveElements.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
});

// Dark/light mode toggle
const body = document.body;
const toggleButton = document.createElement('button');
toggleButton.id = 'dark-light-toggle';
toggleButton.textContent = 'Toggle Dark/Light Mode';
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  // Smooth transition handled by CSS
});

// Micro-interactions example: button press effect
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.classList.add('pressed');
  });
  button.addEventListener('mouseup', () => {
    button.classList.remove('pressed');
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('pressed');
  });
});

// Placeholder for glitch effect or morphing shapes transitions
// This can be expanded with SVG or canvas animations as needed

// Contact form validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Thank you for your message, ' + name + '!');
  contactForm.reset();
});

function validateEmail(email) {
  const re = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
  return re.test(email.toLowerCase());
}
