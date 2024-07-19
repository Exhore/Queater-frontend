import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SectionLayout({ children, className }: Props) {
  return (
    <section className={`mx-auto w-full max-w-8xl px-4 xl:px-10 ${className}`}>
      {children}
    </section>
  );
}
