import { ReactNode } from "react";

interface HeaderProps {
  logo: ReactNode;
  links: Link[];
}

interface Link {
  to: string;
  text: string;
}

export { HeaderProps };
