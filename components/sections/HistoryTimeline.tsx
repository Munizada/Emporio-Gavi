"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const timelineEvents = [
    {
        year: "2018",
        title: "O Início de Tudo",
        description: "Um sonho saindo do papel. Paredes descascadas, projetos na mesa e a certeza de que algo grande estava por vir.",
        image: "/images/history-beginning.png",
        likes: "842",
    },
    {
        year: "2020",
        title: "Primeira Garrafa",
        description: "Nossa primeira venda oficial de um rótulo vintage. O momento que marcou nossa entrada no mundo da alta gastronomia.",
        image: "/images/history-first-bottle.png",
        likes: "1.2k",
    },
    {
        year: "2022",
        title: "A Expansão",
        description: "O dia em que nossa casa ficou pequena para tantos amigos. Expandimos, brindamos e celebramos novos horizontes.",
        image: "/images/history-expansion.png",
        likes: "2.5k",
    },
    {
        year: "2024",
        title: "Excelência Premiada",
        description: "Reconhecimento, pratos autorais e a experiência completa que oferecemos hoje. O Emporio Gavi em sua melhor forma.",
        image: "/images/history-today.png",
        likes: "4.1k",
    },
];

export function HistoryTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section id="historia" className="py-24 bg-neutral-950 text-white overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            <Container>
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-4"
                    >
                        <Instagram className="w-4 h-4" />
                        <span>@emporiogavi</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">
                        Nossa Jornada
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Da primeira obra ao prato premiado. Acompanhe os capítulos da nossa história através das nossas memórias favoritas.
                    </p>
                </div>

                <div ref={containerRef} className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

                    <div className="flex flex-col gap-24">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-20">
                    <Button
                        size="lg"
                        className="bg-[#E1306C] hover:bg-[#C13584] text-white border-none rounded-full px-8 shadow-lg shadow-[#E1306C]/20"
                        href="https://www.instagram.com/emporiogavi/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Siga nossa história completa
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </Container>
        </section>
    );
}

function TimelineItem({ event, index }: { event: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Content Side */}
            <div className={`flex-1 text-center ${isEven ? "md:text-right" : "md:text-left"}`}>
                <div className="inline-block mb-4">
                    <span className="text-6xl font-serif font-bold text-white/5">{event.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent">{event.title}</h3>
                <p className="text-white/70 leading-relaxed max-w-md mx-auto md:mx-0 ml-auto">
                    {event.description}
                </p>
            </div>

            {/* Center Dot */}
            <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-white/20 shadow-xl shadow-black/50">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            </div>

            {/* Image Side (Polaroid Style) */}
            <div className="flex-1">
                <motion.div
                    whileHover={{ scale: 1.02, rotate: isEven ? 2 : -2 }}
                    className="relative bg-white p-4 pb-12 shadow-2xl skew-y-1 md:skew-y-0 transform transition-all duration-500 max-w-sm mx-auto"
                >
                    <div className="aspect-square relative overflow-hidden bg-neutral-100 mb-4 filter sepia-[0.2]">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-2 text-neutral-800">
                            <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                            <span className="text-sm font-bold">{event.likes} likes</span>
                        </div>
                        <Instagram className="w-5 h-5 text-neutral-300" />
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-neutral-400 text-xs">
                        @{event.year} • Emporio Gavi
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
