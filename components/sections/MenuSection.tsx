"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const menuCategories = [
    {
        id: "vinhos",
        label: "Adega Selecionada",
        items: [
            {
                title: "Brunello di Montalcino",
                price: "R$ 480",
                description: "Toscana, Itália. Encorpado, com notas de frutas negras e especiarias.",
                image: "/images/wine-bottle.png", // Using existing image as placeholder
            },
            {
                title: "Pera Manca Branco",
                price: "R$ 650",
                description: "Alentejo, Portugal. Complexo, untuoso e com final prolongado.",
                image: "/images/wine-bottle.png",
            },
            {
                title: "Catena Zapata Malbec",
                price: "R$ 320",
                description: "Mendoza, Argentina. Clássico, com taninos macios e notas de violeta.",
                image: "/images/wine-bottle.png",
            },
            {
                title: "Champagne Veuve Clicquot",
                price: "R$ 590",
                description: "Reims, França. Perlage fina, frescor vibrante e notas de brioche.",
                image: "/images/wine-bottle.png",
            },
        ],
    },
    {
        id: "pratos",
        label: "Pratos do Chef",
        items: [
            {
                title: "Risoto de Camarão com Brie",
                price: "R$ 89",
                description: "Arroz arbóreo cremoso, camarões rosa grandes e finalizado com queijo brie.",
                image: "/images/olive-oil.png", // Placeholder
            },
            {
                title: "Filé ao Molho Poivre",
                price: "R$ 98",
                description: "Medalhão de filé mignon alto, crosta de pimentas e batatas rústicas.",
                image: "/images/olive-oil.png",
            },
            {
                title: "Bacalhau à Lagareiro",
                price: "R$ 110",
                description: "Lombo de bacalhau confitado no azeite, batatas ao murro e brócolis.",
                image: "/images/olive-oil.png",
            },
            {
                title: "Pasta Trufada",
                price: "R$ 78",
                description: "Massa fresca artesanal, manteiga de trufas brancas e parmesão 24 meses.",
                image: "/images/olive-oil.png",
            },
        ],
    },
    {
        id: "tapas",
        label: "Para Compartilhar",
        items: [
            {
                title: "Tábua de Queijos Premium",
                price: "R$ 120",
                description: "Seleção de 5 queijos importados, mel trufado, nuts e pães de fermentação natural.",
                image: "/images/cheese-board.png",
            },
            {
                title: "Burrata Caprese",
                price: "R$ 68",
                description: "Burrata cremosa, tomates confit, pesto de manjericão e foccacia.",
                image: "/images/cheese-board.png",
            },
            {
                title: "Jamón Ibérico",
                price: "R$ 140",
                description: "Fatias finas de presunto Pata Negra, servidas com pan con tomate.",
                image: "/images/cheese-board.png",
            },
            {
                title: "Bruschettas Variadas",
                price: "R$ 48",
                description: "Mix de sabores: Pomodoro, Cogumelos e Gorgonzola com Mel.",
                image: "/images/cheese-board.png",
            },
        ],
    },
];

export function MenuSection() {
    const [activeTab, setActiveTab] = useState("vinhos");

    return (
        <section id="menu" className="py-32 bg-neutral-50 dark:bg-neutral-900 border-t border-b border-black/5 dark:border-white/5">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
                        Gastronomia
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
                        Menu Experience
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg dark:text-neutral-400">
                        Uma curadoria de sabores pensada para harmonizar perfeitamente com nossa adega.
                    </p>
                </div>

                {/* Custom Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {menuCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${activeTab === category.id
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                                    : "bg-transparent text-muted-foreground border-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800"
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
                        >
                            {menuCategories
                                .find((c) => c.id === activeTab)
                                ?.items.map((item, index) => (
                                    <MenuItem key={index} item={item} />
                                ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="text-center mt-20">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white rounded-full px-8" asChild>
                        <a href="https://drive.google.com/file/d/11qCfsatS8AGc7cNgow3H57LLvLZkhe2A/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Ver Cardápio Completo (PDF)
                        </a>
                    </Button>
                </div>
            </Container>
        </section>
    );
}

function MenuItem({ item }: { item: any }) {
    return (
        <div className="group flex items-start gap-6 p-4 rounded-xl hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300">
            {/* Image with Hover Effect */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex-1 pt-1">
                <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors">
                        {item.title}
                    </h3>
                    <span className="text-accent font-semibold ml-4">{item.price}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-3">
                    {item.description}
                </p>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 group-hover:bg-accent/30 transition-colors" />
            </div>
        </div>
    );
}
