import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer id="contato" className="bg-primary text-primary-foreground py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-serif text-2xl font-bold mb-6">Emporio Gavi</h3>
                        <p className="text-primary-foreground/60 text-sm leading-relaxed">
                            Trazendo o melhor da gastronomia mundial para a sua mesa com exclusividade e sofisticação.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Navegação</h4>
                        <ul className="space-y-4 text-sm text-primary-foreground/60">
                            <li><Link href="#produtos" className="hover:text-accent transition-colors">Produtos</Link></li>
                            <li><Link href="#historia" className="hover:text-accent transition-colors">História</Link></li>
                            <li><Link href="#experiencias" className="hover:text-accent transition-colors">Experiências</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm text-primary-foreground/60">
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /> (86) 99414-3443
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" /> contato@emporiogavi.com.br
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Av. Piauí, 700 - Centro, Timon - MA, 65630-030
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/emporiogavi/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/40">
                    <p>© {new Date().getFullYear()} Emporio Gavi. Todos os direitos reservados.</p>
                </div>
            </Container>
        </footer>
    );
}
