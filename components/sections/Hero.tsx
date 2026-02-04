"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with abstract gradient (Apple-like) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
                        A Arte do Sabor
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 tracking-tight leading-tight">
                        Emporio Gavi <br />
                        <span className="text-foreground/80 font-normal italic">Seleção Premium</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        Descubra vinhos raros, queijos artesanais e iguarias selecionadas para os paladares mais exigentes. Uma experiência gastronômica única.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="rounded-full px-8 group" href="#produtos">
                            Explorar Coleção
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="secondary" size="lg" className="rounded-full px-8" href="#historia">
                            Nossa História
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
