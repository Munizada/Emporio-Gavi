"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
    { href: "#produtos", label: "Produtos" },
    { href: "#historia", label: "História" },
    { href: "#experiencias", label: "Experiências" },
    { href: "#contato", label: "Contato" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-4 shadow-sm"
                        : "bg-transparent py-6"
                )}
            >
                <Container className="flex items-center justify-between">
                    <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
                        Emporio Gavi
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="hidden md:flex" href="#contato">
                            Contato
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            className="gap-2"
                            href="https://drive.google.com/file/d/11qCfsatS8AGc7cNgow3H57LLvLZkhe2A/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            <span className="hidden sm:inline">Cardápio</span>
                        </Button>
                        <button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </Container>
            </header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background pt-24 px-4 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-serif text-foreground hover:text-accent"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button
                                className="w-full mt-4"
                                size="lg"
                                href="https://drive.google.com/file/d/11qCfsatS8AGc7cNgow3H57LLvLZkhe2A/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver Cardápio
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
