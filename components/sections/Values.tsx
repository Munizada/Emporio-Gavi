import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Award, Truck, ShieldCheck } from "lucide-react";

const values = [
    {
        icon: Award,
        title: "Qualidade Premium",
        description: "Produtos selecionados rigorosamente para garantir a máxima excelência.",
    },
    {
        icon: Truck,
        title: "Entrega Rápida",
        description: "Receba o melhor da gastronomia no conforto da sua casa.",
    },
    {
        icon: ShieldCheck,
        title: "Garantia de Origem",
        description: "Trabalhamos apenas com produtores certificados e de confiança.",
    },
];

export function Values() {
    return (
        <section id="historia" className="py-24 bg-background">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="text-center hover:border-accent/40 transition-colors duration-300"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-accent/10 text-accent">
                                    <value.icon className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-4">{value.title}</h3>
                            <p className="text-muted">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
