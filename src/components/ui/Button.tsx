import * as React from "react"
import { cn } from "../../lib/utils"

// I need to install class-variance-authority first or use simple strings. 
// Plan said "Button.tsx: Variants". cva is standard for this stack.
// I will install class-variance-authority first.

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    // Simple implementation without cva for now to save a step, or install it?
    // User expects "Premium". CVA is better for maintainability.
    // I'll use a simple switch or map for now to avoid another install round unless I really want it.
    // actually, I installed clsx and tailwind-merge. 
    // Let's stick to simple efficient code.

    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }

    const sizes = {
      sm: "h-9 px-3 rounded-md text-xs",
      md: "h-11 px-8 rounded-md text-sm",
      lg: "h-14 px-10 rounded-lg text-base",
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
