import type { MDXComponents } from 'mdx/types'
import { CodeBlock } from '@/components/CodeBlock'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children, ...props }: any) => {
      const codeElement = children as React.ReactElement
      if (codeElement && codeElement.props && (codeElement.props as any).className) {
         return <CodeBlock className={(codeElement.props as any).className}>{(codeElement.props as any).children}</CodeBlock>
      }
      return <pre {...props}>{children}</pre>
    },
    h1: ({ children, ...props }: any) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return <h1 id={id} {...props}>{children}</h1>
    },
    h2: ({ children, ...props }: any) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return <h2 id={id} {...props}>{children}</h2>
    },
    h3: ({ children, ...props }: any) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return <h3 id={id} {...props}>{children}</h3>
    },
    ...components,
  }
}
