import { motion } from "framer-motion";
import { Send } from "lucide-react";
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
          "group relative font-heading text-sm md:text-base font-semibold px-4 py-4 md:px-6 md:py-5 rounded-xl transition-all duration-300 w-full max-w-xs md:max-w-md",
          "bg-[#0088cc] hover:bg-[#0077b5] text-white shadow-[0_0_20px_rgba(0,136,204,0.4)] hover:shadow-[0_0_30px_rgba(0,136,204,0.6)]",
          className
        )}
      >
        <Send className="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
        <span className="truncate">{children}</span>
      </Button>
    </motion.a>
  );
};
