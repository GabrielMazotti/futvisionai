import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TELEGRAM_INVITE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export const CTAButton = ({ variant = "primary", children, className }: CTAButtonProps) => {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={TELEGRAM_INVITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button
        size="lg"
        className={cn(
          "group relative font-heading text-base md:text-lg font-semibold px-8 py-6 md:px-10 md:py-7 rounded-xl transition-all duration-300",
          isPrimary
            ? "bg-primary text-primary-foreground glow-button pulse-glow"
            : "bg-secondary text-secondary-foreground border border-primary/30 hover:border-primary/60 hover:bg-secondary/80",
          className
        )}
      >
        <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        {children}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.a>
  );
};
