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
                "rounded-2xl border bg-white dark:bg-neutral-900/50 p-6 shadow-sm transition-all duration-300",
                "border-neutral-200 dark:border-white/10",
                glass && "bg-white/70 dark:bg-black/40 backdrop-blur-xl border-white/40 dark:border-white/10 shadow-xl hover:bg-white/80 dark:hover:bg-black/50 hover:border-white/50 dark:hover:border-white/20 hover:scale-[1.02]",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
