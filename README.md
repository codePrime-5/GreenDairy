# GreenDairy

A modern, animated dairy farming business website showcasing products, services, and farm stories with smooth animations and responsive design.

**Live Demo:** [https://codePrime-5.github.io/GreenDairy](https://codePrime-5.github.io/GreenDairy)

---

## 🌿 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion and 3D elements with React Three Fiber
- **Farm Video Section** - Showcase farm operations with embedded video
- **Product Showcase** - Display dairy products and farm offerings
- **Testimonials** - Customer reviews and testimonials section
- **Interactive Components** - Avatar groups, ratings, pagination, and more
- **Contact Form** - Easy customer communication
- **Loading Animation** - Custom animated loading screen
- **Accessibility** - React Aria Components for better UX

---

## 🚀 Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **3D Graphics:** Three.js & React Three Fiber
- **UI Components:** React Aria Components
- **Icons:** Lucide React, Untitled UI Icons
- **Utilities:** Clsx, Tailwind Merge
- **Code Quality:** ESLint

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codePrime-5/GreenDairy.git
   cd GreenDairy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

---

## 📂 Project Structure

```
GreenDairy/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── application/     # Complex components (pagination, etc.)
│   │   └── base/            # Base UI components (buttons, avatars, etc.)
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FarmVideo.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/              # Images, videos, and other media
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Project dependencies
```

---

## 🛠️ Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## 🎨 Key Components

### Sections
- **Hero** - Eye-catching landing section with CTA
- **About** - Company story and mission
- **Products** - Showcase dairy products and farm offerings
- **WhyChooseUs** - Unique value propositions
- **Testimonials** - Customer satisfaction proof
- **FarmVideo** - Embedded farm video with custom player
- **Contact** - Contact form for inquiries
- **Footer** - Site navigation and links

### Base Components
- **Avatar** - User profile avatars with online status and verification
- **Button Group** - Grouped button controls
- **Buttons** - Styled button variants
- **Tooltip** - Contextual tooltips
- **Rating Stars** - Star rating display

---

## 🚀 Deployment

This project is deployed to GitHub Pages using gh-pages.

### Deploy to Production:
```bash
npm run deploy
```

The build process automatically:
1. Builds the project with `npm run build`
2. Deploys the `dist/` folder to GitHub Pages

Update the `homepage` in `package.json` when deploying to a different GitHub repository.

---

## 🐛 Troubleshooting

### Video Not Loading After Deploy
If the farm video isn't loading after deployment:
- Ensure the video file is imported correctly: `import farm from '../assets/farm.mp4'`
- Use the imported variable instead of hardcoded paths
- Vite will handle the asset path correctly in production

### Port Already in Use
Change the dev server port:
```bash
npm run dev -- --port 3000
```

---

## 📝 Environment Configuration

Create a `.env` file in the root directory for environment variables (if needed):
```env
VITE_API_BASE_URL=your_api_url
```

---

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 📞 Support

For questions or issues, please open an issue on the GitHub repository or contact the development team.

---

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- 3D graphics with [Three.js](https://threejs.org)
