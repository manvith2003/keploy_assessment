"use client"

import { Highlight, themes } from "prism-react-renderer"
import { useState } from "react"

export const CodeBlock = ({ children, className }: { children: string, className?: string }) => {
  const [isCopied, setIsCopied] = useState(false)
  const language = className ? className.replace(/language-/, "") : "bash"

  const onCopy = () => {
    navigator.clipboard.writeText(children)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative group my-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
      <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onCopy}
          className="bg-gray-800 text-white text-xs px-2 py-1 rounded hover:bg-gray-700 transition-colors"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
      <Highlight
        theme={themes.nightOwl}
        code={children.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} p-4 overflow-x-auto text-sm`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
