import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return <div className="mx-auto h-full max-w-6xl px-4">{children}</div>;
};

export default layout;
