import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <p className="text-muted-foreground text-sm">
            Designed & Developed with passion
          </p>
        </div>
      </div>
    </footer>
  );
};
