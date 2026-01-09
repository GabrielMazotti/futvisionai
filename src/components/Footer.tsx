import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        <Separator className="mb-8 bg-border/50" />
        
        <div className="text-center space-y-4">
          {/* Compliance text */}
          <p className="text-xs md:text-sm text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Los resultados varían según disciplina y gestión de banca. 
            Apostar es para mayores de 18 años. Juega con responsabilidad.
          </p>

          {/* Brand */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="gradient-text font-semibold">FutVision GPS</span>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
