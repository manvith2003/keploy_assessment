import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'
import { Github } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <span className="text-orange-500">Keploy</span>
          <span className="text-gray-600 dark:text-gray-400">Tutorial</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-4 text-sm font-medium items-center">
            <a 
              href="https://keploy.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-500 transition-colors duration-300 hover:scale-105 flex items-center gap-1"
            >
              Keploy.io
            </a>
            <a 
              href="https://github.com/keploy/keploy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-500 transition-colors duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
