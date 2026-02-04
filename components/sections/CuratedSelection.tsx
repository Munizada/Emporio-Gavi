"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Placeholder images would be replaced by actual product images
const categories = [
    {
        title: "Vinhos Raros",
        description: "Rótulos exclusivos das melhores adegas do mundo.",
        image: "/images/wine-bottle.png",
    },
    {
        title: "Queijos Artesanais",
        description: "Sabores autênticos de produtores premiados.",
        image: "/images/cheese-board.png",
    },
    {
        title: "Azeites & Temperos",
        description: "O toque final para elevar suas criações culinárias.",
        image: "/images/olive-oil.png",
    },
];

export function CuratedSelection() {
    return (
        <section id="produtos" className="py-24 bg-background">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-accent font-medium text-sm tracking-wider uppercase mb-2 block">
                        Nossa Coleção
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                        Curadoria Exclusiva
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Cada item em nossa loja conta uma história de tradição, sabor e excelência.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-[500px] relative overflow-hidden group border-none p-0 !bg-transparent">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <h3 className="text-2xl font-serif font-bold mb-3 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-white/80 mb-6 transform transition-transform duration-300 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden">
                                        {category.description}
                                    </p>
                                    <Button
                                        variant="secondary"
                                        className="w-full justify-between group/btn bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-black"
                                        href="https://drive.google.com/file/d/11qCfsatS8AGc7cNgow3H57LLvLZkhe2A/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver Cardápio
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
