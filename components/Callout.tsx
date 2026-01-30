export function Callout({ children, type = "default", title }: { children: React.ReactNode, type?: "default" | "warning" | "danger" | "info", title?: string }) {
  const colors = {
    default: "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 border-l-4",
    warning: "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-500 text-yellow-900 dark:text-yellow-200 border-l-4",
    danger: "bg-red-50 dark:bg-red-900/30 border-red-500 text-red-900 dark:text-red-200 border-l-4",
    info: "bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-900 dark:text-blue-200 border-l-4",
  }
  
  return (
    <div className={`p-4 my-4 rounded-r shadow-sm ${colors[type]}`}>
      {title && <div className="font-bold mb-2">{title}</div>}
      <div className="text-sm">{children}</div>
    </div>
  )
}
