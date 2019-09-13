import * as React from 'react';

interface ButtonProps {
  className: string
  onClick: () => void
  title: string
};

export const Button = ({
  className,
  onClick,
  title
}: ButtonProps) => (
  <button
    className={`button ${className}`}
    onClick={onClick}
  >
    {title}
  </button>
);

interface LinkAsAButtonProps {
  href: string
  title: string
  className?: string
};

export const LinkAsAButton = ({
  href,
  title,
  className
}: LinkAsAButtonProps) => (
  <a
    href={href}
    className={`button ${className}`}
    target="_blank"
  >
    {title}
  </a>
);
