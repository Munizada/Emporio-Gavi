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
        <section id="historia" className="py-24 bg-[#050505] text-white overflow-hidden relative">
            {/* Background Gradient & Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950/0 to-neutral-950 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

            <Container>
                <div className="text-center mb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-neutral-200 text-sm font-medium mb-6 shadow-glow"
                    >
                        <Instagram className="w-4 h-4" />
                        <span>@emporiogavi</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-white tracking-tight">
                        Nossa Jornada
                    </h2>
                    <p className="text-neutral-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Da primeira obra ao prato premiado. Acompanhe os capítulos da nossa história através das nossas memórias favoritas.
                    </p>
                </div>

                <div ref={containerRef} className="relative z-10">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

                    <div className="flex flex-col gap-32">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-32 relative z-10">
                    <Button
                        size="lg"
                        className="bg-[#E1306C] hover:bg-[#C13584] text-white border-none rounded-full px-10 py-6 text-lg shadow-lg shadow-[#E1306C]/20 transition-all hover:scale-105"
                        href="https://www.instagram.com/emporiogavi/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Siga nossa história completa
                        <ArrowRight className="ml-2 w-5 h-5" />
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
            className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Content Side */}
            <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                <div className="inline-block mb-4">
                    <span className="text-6xl font-serif font-bold text-white mb-2 block drop-shadow-md opacity-100">{event.year}</span>
                    <div className={`h-1 w-20 bg-accent rounded-full mb-6 ${isEven ? "ml-auto" : "mr-auto"}`} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">{event.title}</h3>
                <p className="text-neutral-200 leading-relaxed text-lg font-medium">
                    {event.description}
                </p>
            </div>

            {/* Center Dot */}
            <div className="relative z-10 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                <div className="absolute w-full h-full rounded-full bg-accent animate-ping opacity-20" />
            </div>

            {/* Image Side (Polaroid Style) */}
            <div className="flex-1 flex justify-center">
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    style={{ rotate: isEven ? 3 : -3 }}
                    className="relative bg-white p-3 pb-10 shadow-2xl transition-all duration-500 max-w-sm"
                >
                    <div className="aspect-square relative overflow-hidden bg-neutral-100 mb-4">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between px-2 text-neutral-800">
                        <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                            <span className="text-sm font-bold opacity-80">{event.likes}</span>
                        </div>
                        <div className="font-handwriting text-xs opacity-50">@{event.year}</div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
