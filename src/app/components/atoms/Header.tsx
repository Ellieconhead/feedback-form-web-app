import React from 'react';

interface HeaderProps {
  text: string,
  classNames?: string,
}

export const Header = ({
  text,
  classNames
}: HeaderProps) => {
  const headingClasses = `font-sans text-l text-yellow ${classNames}`;
  return (
    <h1
      className={headingClasses}
    >
      {text}
    </h1>
  );
};

