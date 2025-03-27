import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto h-full max-w-6xl px-4 py-10">
      <h2 className="pb-2 text-2xl font-bold xl:text-4xl">
        Smart Contract Collection
      </h2>
      <p className="text-lg text-gray-500 xl:text-2xl">
        Select a smart contract to view or deploy
      </p>

      {children}
    </div>
  );
};

export default layout;
