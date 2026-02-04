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
        id: "especiais",
        label: "Pratos Especiais",
        items: [
            {
                title: "Salada de Salmão Defumado",
                price: "R$ 42",
                description: "Mix de folhas, salmão defumado desfiado, picles de cenoura e granola.",
                image: "/images/menu-salmao-defumado.png",
            },
            {
                title: "Crepe Rosbife",
                price: "R$ 32",
                description: "Massa leve com ovos e leite, rosbife da casa, molho tapenade de azeitonas e alcaparras.",
                image: "/images/menu-crepe-rosbife.png",
            },
            {
                title: "Salmão Gravlax",
                price: "R$ 38",
                description: "Fatia de pão italiano de fermentação natural, creme da casa, topping de gravlax de salmão e picles.",
                image: "/images/menu-gravlax.png",
            },
            {
                title: "Ovos Cremos com Bacon",
                price: "R$ 20",
                description: "Fatia de pão italiano de fermentação natural, topping de ovos cremosos e mexidos com bacon.",
                image: "/images/cheese-board.png", // Using default as we didn't generate this specific one yet
            },
        ],
    },
    {
        id: "brunch",
        label: "Brunch & Entradas",
        items: [
            {
                title: "Croissant",
                price: "R$ 12",
                description: "Consulte os sabores disponíveis. Clássico amanteigado ou recheado.",
                image: "/images/menu-croissant.png",
            },
            {
                title: "Quiche",
                price: "R$ 20",
                description: "Massa leve e recheio cremoso. Consulte os sabores do dia.",
                image: "/images/cheese-board.png", // Placeholder
            },
            {
                title: "Salada Caprese",
                price: "R$ 34",
                description: "Mix de folhas, tomate cereja, queijo coalho, molho pesto e croutons.",
                image: "/images/menu-caprese.png",
            },
            {
                title: "Pão de Queijo",
                price: "R$ 4",
                description: "A receita tradicional mineira, feito com queijo da Canastra.",
                image: "/images/cheese-board.png", // Placeholder
            },
        ],
    },
    {
        id: "doces",
        label: "Doce Final",
        items: [
            {
                title: "Bolo Tiramisú",
                price: "R$ 24",
                description: "Bolo denso com massa de cacau black, recheio de chantilly de café e cobertura de ganache.",
                image: "/images/menu-tiramisu.png",
            },
            {
                title: "Bolo Vitoriano",
                price: "R$ 24",
                description: "Fatia de bolo de massa branca amanteigada, recheio de creme de chantilly e frutas vermelhas.",
                image: "/images/wine-bottle.png", // Placeholder reuse
            },
            {
                title: "Strudel de Maçã",
                price: "R$ 20",
                description: "Fatia de torta folhada recheada com maçã cozida e canela.",
                image: "/images/wine-bottle.png", // Placeholder reuse
            },
            {
                title: "Bolo Floresta Negra",
                price: "R$ 20",
                description: "Fatia de bolo de chocolate, recheado com cerejas e chantilly.",
                image: "/images/wine-bottle.png", // Placeholder reuse
            },
        ],
    },
];

export function MenuSection() {
    const [activeTab, setActiveTab] = useState("especiais");

    return (
        <section id="menu" className="py-32 bg-neutral-50 dark:bg-[#050505] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950/0 to-neutral-950 pointer-events-none" />

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
        <Card glass className="group flex flex-col md:flex-row items-center md:items-start gap-6 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
            {/* Image with Hover Effect - Fixed Square Aspect Ratio */}
            <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-inner bg-neutral-100 dark:bg-neutral-800">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="flex-1 w-full pt-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                        {item.title}
                    </h3>
                    <span className="text-accent font-semibold ml-4 whitespace-nowrap bg-accent/10 px-3 py-1 rounded-full text-sm">
                        {item.price}
                    </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                    {item.description}
                </p>
                <div className="w-12 h-0.5 bg-neutral-200 dark:bg-neutral-700 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
            </div>
        </Card>
    );
}
