import React from 'react';

interface TextButtonProps {
    onClick?: () => void;
    text: string;
    classNames?: string;
  }

export const TextButton = ({
  onClick,
  text,
  classNames
}: TextButtonProps) => {
  const TextButtonClasses = `font-sans text-m h-10 rounded border-2 mt-6 w-40 bg-light-blue text-blue ${classNames}`;
  return (
    <button
      onClick={onClick}
    >
      <div className={TextButtonClasses}>
        {text}
      </div>
    </button>
  );
};