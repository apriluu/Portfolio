import { LanguageProvider } from './i18n/LanguageContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Nav />
        <main>
          <Hero />
          <TechStack />
          <Projects />
          <Experience />
          <Blog />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  )
}
