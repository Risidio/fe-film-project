import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl xl:text-4xl font-bold pb-2">
        Smart Contract Collection
      </h2>
      <p className="text-gray-500 text-lg xl:text-2xl">
        Select a smart contract to view or deploy
      </p>

      {children}
    </div>
  );
};

export default layout;
