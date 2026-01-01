import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Deepesh Kumar. All rights reserved.
          </p>

          <p className="text-muted-foreground text-xs sm:text-sm">
            Jaipur, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
};
