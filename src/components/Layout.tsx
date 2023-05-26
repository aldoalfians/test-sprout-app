import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children, className }: Props) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light px-32  xl:p-24 lg:p-16 md:p-12 sm:p-4  ${className}`}
    >
      {children}
    </div>
  );
}
