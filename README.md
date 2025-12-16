```markdown
# Modern Login Page

> A clean, responsive login page with social authentication options and modern UI design.

## Quick Start

1. **Download the files**
   ```bash
   git clone https://github.com/Evanroby/login-page.git/
   cd login-page
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```
   Or simply double-click `index.html`

## File Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## Features

- Email/password authentication form
- Password visibility toggle
- Remember me functionality
- Social login buttons (Google, GitHub, Apple)
- Forgot password flow
- Fully responsive design
- Smooth animations and transitions

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --secondary: #8b5cf6;
    /* ... */
}
```

### Form Validation

Modify validation rules in `script.js`:

```javascript
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your validation logic here
});
```

### Backend Integration

Replace the simulated API call in `script.js` with your endpoint:

```javascript
// Replace this:
setTimeout(() => { /* demo code */ }, 1500);

// With this:
fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
})
.then(response => response.json())
.then(data => { /* handle response */ });
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

> **Warning**
> This is a frontend demo. Implement proper backend authentication and security measures for production use.

> **Note**
> Social login buttons are UI-only. Integrate with OAuth providers for functionality.

## License

MIT

```