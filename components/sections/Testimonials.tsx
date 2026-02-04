"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Ricardo Oliveira",
        role: "Sommelier",
        content: "A seleção de vinhos do Emporio Gavi é incomparável. Encontrei rótulos que procurava há anos.",
        rating: 5,
    },
    {
        name: "Ana Paula Souza",
        role: "Chef de Cozinha",
        content: "Ingredientes frescos e de altíssima qualidade. O azeite trufado é um espetáculo à parte.",
        rating: 5,
    },
    {
        name: "Carlos Mendes",
        role: "Cliente Vip",
        content: "O atendimento personalizado e a entrega rápida fazem toda a diferença. Recomendo de olhos fechados.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section id="experiencias" className="py-24 bg-background border-t border-border">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        O Que Dizem Nossos Clientes
                    </h2>
                    <p className="text-muted">Experiências reais de quem vive a gastronomia.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-white/50 backdrop-blur-sm">
                            <div className="flex gap-1 text-accent mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-foreground/80 italic mb-6">"{testimonial.content}"</p>
                            <div>
                                <p className="font-bold text-primary">{testimonial.name}</p>
                                <p className="text-sm text-muted">{testimonial.role}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
