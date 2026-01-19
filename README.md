# Vishal Vishwas - Full Stack Developer Portfolio

A modern, fully responsive personal portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React, TypeScript, and Tailwind CSS with smooth animations and interactive components.

## 🔗 Live

Visit the live portfolio: [https://vishalvishwas.gleeze.com](https://vishalvishwas.gleeze.com)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Smooth Animations**: Engaging animations powered by Framer Motion for a modern user experience
- **Interactive Sections**:
  - Hero section with social media links and CTA buttons
  - About section with contact information and statistics
  - Skills section with categorized technologies (Frontend, Backend, Database, Cloud & DevOps)
  - Featured projects carousel with live demos and GitHub links
  - Experience and education timeline
  - Smooth scroll navigation
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Dark Mode Ready**: Uses CSS custom properties for easy theme customization
- **Performance Optimized**: Fast loading with Vite and optimized animations

## 🛠️ Tech Stack

**Frontend:**
- React 18.3
- TypeScript
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)
- Lenis (smooth scrolling)

**UI Components:**
- shadcn/ui
- Radix UI primitives

**Development Tools:**
- Vite (build tool)
- Vitest (testing)
- ESLint & TypeScript ESLint (code quality)
- PostCSS & Autoprefixer

**Hosting:**
- Vercel

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishalvishwas01/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:8080`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Usage

### Development

```bash
# Start development server with hot reload
npm run dev

# Run linter
npm run lint

# Run tests
npm run test

# Watch tests
npm run test:watch
```

### Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **HeroSection.tsx** - Update name, title, and description
   ```tsx
   <span className="text-foreground">Your Name</span>
   ```

2. **AboutSection.tsx** - Update bio, contact info, and statistics
   ```tsx
   const contactInfo = [
     { icon: Mail, label: 'Email', value: 'your-email@example.com', ... }
   ];
   ```

3. **SkillsSection.tsx** - Modify skill categories and technologies
4. **ProjectsSection.tsx** - Add/update featured projects with details
5. **ExperienceSection.tsx** - Update work experience and education

### Add Profile Picture

Place your profile image in the `src/assets/` folder and update the import in [`HeroSection.tsx`](src/components/HeroSection.tsx):

```tsx
import profileImage from '@/assets/your-image.jpg';
```

### Modify Colors

Edit CSS variables in [`src/index.css`](src/index.css):

```css
:root {
  --primary: 175 80% 50%;      /* Cyan */
  --accent: 280 70% 60%;       /* Purple */
  --background: 220 20% 5%;    /* Dark */
  --foreground: 210 40% 98%;   /* Light */
}
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## 📱 Sections Overview

### Hero Section
- Welcome message with animated text
- Call-to-action buttons
- Social media links (GitHub, LinkedIn, Email)
- Animated profile image with floating badge
- Scroll indicator

### About Section
- Professional bio
- Key statistics (projects, education, CGPA)
- Contact information with live links
- Interactive hover effects

### Skills Section
- **Languages**: Python, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
- **Technologies**: React, Next.js, Node.js, Express, MERN stack, etc.
- **Database**: MySQL, PostgreSQL, MongoDB, Firebase
- **Cloud & DevOps**: AWS, Docker, CI/CD, GitHub Actions, Vercel
- **Coursework**: OOPs, DBMS

### Projects Section
Carousel showcasing 4 featured projects:
1. **Datavine** - MERN form builder with payment integration
2. **BridgeTalk** - Multilingual real-time chat application
3. **File Whisper AI** - AI-powered document interaction dashboard
4. **Task Manager** - Task management application

Each project includes:
- Live demo link
- GitHub repository link
- Project highlights
- Technology tags

### Experience Section
- Timeline layout with alternating design
- Work experience at Xeltratech
- Education at Amity University
- Detailed descriptions and technologies used

### Footer
- Social media links
- Copyright information
- Scroll to top button

## 🎯 Performance

- **Optimized Animations**: Uses Framer Motion for smooth, GPU-accelerated animations
- **Lazy Loading**: Sections animate in on scroll using Intersection Observer
- **Code Splitting**: Vite automatically code-splits for optimal loading
- **Production Build**: ~150KB gzipped



## 📞 Contact

- **Email**: [vishalvishwas7082@gmail.com](mailto:vishalvishwas7082@gmail.com)

- **GitHub**: [github.com/vishalvishwas01](https://github.com/vishalvishwas01)
- **LinkedIn**: [linkedin.com/in/vishalvishwas](https://linkedin.com/in/vishalvishwas)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Smooth scrolling with [Lenis](https://lenis.stroll.io/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by Vishal Vishwas**