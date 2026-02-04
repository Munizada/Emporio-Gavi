"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    glass?: boolean;
}

export function Card({ children, className, glass = false, ...props }: CardProps) {
    return (
        <motion.div
            className={cn(
                "rounded-2xl border border-border bg-white dark:bg-neutral-900 p-6 shadow-sm",
                glass && "bg-white/60 dark:bg-black/60 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-lg",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
