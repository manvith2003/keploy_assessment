"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-keploy", title: "What is Keploy?" },
  { id: "prerequisites", title: "Prerequisites" },
  { id: "step-1-clone-the-sample-application", title: "Step 1: Clone Sample" },
  { id: "step-2-understanding-the-setup", title: "Step 2: Understanding Setup" },
  { id: "step-3-record-mode---capturing-api-interactions", title: "Step 3: Record Mode" },
  { id: "step-4-generate-test-cases-with-api-calls", title: "Step 4: Generate Tests" },
  { id: "step-5-understanding-the-generated-tests", title: "Step 5: Understanding Tests" },
  { id: "step-6-test-mode---running-your-tests", title: "Step 6: Test Mode" },
  { id: "best-practices", title: "Best Practices" },
  { id: "troubleshooting", title: "Troubleshooting" },
  { id: "wrapping-up", title: "Wrapping Up" },
]

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -35% 0px" }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto hidden lg:block w-64 p-4 border-l border-gray-200 dark:border-gray-800">
      <h3 className="font-semibold text-sm mb-4 text-gray-900 dark:text-gray-100 uppercase tracking-wider">
        Table of Contents
      </h3>
      <ul className="space-y-2 text-sm">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block transition-colors duration-200 hover:text-orange-500 ${
                activeSection === id
                  ? "text-orange-500 font-medium"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
