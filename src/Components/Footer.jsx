import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" p-6 bg-card relative border-t border-border mt-8 pt-5 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground items-center">
        {" "}
        &copy; {new Date().getFullYear()} Ashlesha.  All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};