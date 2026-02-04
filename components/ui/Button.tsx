"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    target?: string;
    rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, any>(
    ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
        const variants = {
            primary:
                "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-black/5 active:scale-95 transition-all duration-200",
            secondary:
                "bg-white/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/20 active:scale-95 transition-all duration-200",
            outline:
                "border border-border bg-transparent hover:bg-accent/5 hover:text-accent-foreground transition-colors",
            ghost: "hover:bg-accent/10 hover:text-accent font-medium",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const classes = cn(
            "inline-flex items-center justify-center rounded-full font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            variants[variant as keyof typeof variants],
            sizes[size as keyof typeof sizes],
            className
        );

        if (href) {
            return (
                <motion.a
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    whileTap={{ scale: 0.98 }}
                    className={classes}
                    {...props}
                >
                    {children}
                </motion.a>
            );
        }

        return (
            <motion.button
                ref={ref as React.Ref<HTMLButtonElement>}
                whileTap={{ scale: 0.98 }}
                className={classes}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
