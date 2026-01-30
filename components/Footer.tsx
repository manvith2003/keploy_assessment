import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold text-orange-500">Keploy</span>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            The Open Source API Testing Platform
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/keploy/keploy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/keployio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Keploy Inc.
        </div>
      </div>
    </footer>
  )
}
