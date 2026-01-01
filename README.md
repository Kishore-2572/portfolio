# Kishore N - Portfolio Website

A modern, production-grade React portfolio website showcasing professional experience, skills, and projects.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Beautiful animations and transitions
- **Dynamic Typing Effect**: Animated role display
- **Interactive UI**: Hover effects, smooth scrolling, and interactive elements
- **Production Ready**: Optimized for deployment

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Skills/
│   │   ├── Education/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── ScrollToTop/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🛠️ Technologies Used

- **Frontend**: React 18
- **Styling**: CSS3 with custom properties
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins, Fira Code)
- **Build Tool**: Create React App

## 📦 Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Production Build

Create an optimized production build:
```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📤 Deployment

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=build
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🔧 Configuration

### Update Personal Information

Edit the component files in `src/components/` to update:
- Personal details in `Hero.js`
- Work experience in `Experience.js`
- Skills in `Skills.js`
- Education in `Education.js`
- Contact information in `Contact.js`

### Customize Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... other variables */
}
```

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (⚠️ irreversible)

## 🌟 Features Breakdown

### Navbar
- Fixed navigation with smooth scrolling
- Active section highlighting
- Mobile-responsive hamburger menu

### Hero Section
- Dynamic typing animation
- Social media links
- Call-to-action buttons
- Animated floating gradient background

### About Section
- Professional summary
- Key highlights with icons
- Hover animations

### Experience Section
- Timeline-based layout
- Detailed role descriptions
- Technology tags

### Skills Section
- Categorized skill display
- Animated progress bars
- Hover effects on cards

### Education Section
- Degree information
- Institution details
- Interactive card design

### Contact Section
- Contact information
- Interactive contact form
- Email integration

### Footer
- Copyright information
- Social media links
- Responsive layout

## 🎨 Design Philosophy

- **Dark Theme**: Modern dark color scheme
- **Purple Gradients**: Consistent gradient usage
- **Smooth Animations**: CSS animations for better UX
- **Responsive**: Mobile-first approach
- **Accessible**: Semantic HTML and ARIA labels

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👤 Author

**Kishore N**
- Email: kishoren2572@gmail.com
- GitHub: [@Kishore-2572](https://github.com/Kishore-2572)
- LinkedIn: [Kishore N](https://linkedin.com/in/kishore-n)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- React team for the amazing framework
