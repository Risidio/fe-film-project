import React from "react";

interface TextProps {
  text: string;
  colour?: string;
}

const Tag = ({ text, colour }: TextProps) => {
  return (
    <small
      className={`w-fit px-3 py-1 font-bold rounded-full ${colour} bg-gray-100`}
    >
      {text}
    </small>
  );
};

export default Tag;
