import { Button } from "@/components/ui/button";
import { TELEGRAM_INVITE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export const CTAButton = ({ variant: _variant = "primary", children, className }: CTAButtonProps) => {
  return (
    <a
      href={TELEGRAM_INVITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-full sm:max-w-md mx-auto transition-transform duration-200 active:scale-[0.98] hover:scale-[1.02]"
    >
      <Button
        size="lg"
        className={cn(
          "group relative font-heading text-sm md:text-base font-semibold px-4 py-4 md:px-6 md:py-5 rounded-xl transition-all duration-300 w-full min-w-0 whitespace-normal text-center leading-snug",
          "bg-telegram hover:bg-telegram-hover text-telegram-foreground telegram-glow-button",
          className
        )}
      >
        <span className="min-w-0">{children}</span>
      </Button>
    </a>
  );
};
