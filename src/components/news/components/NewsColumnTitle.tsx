import * as React from 'react';

interface Props {
  title: string
};

export const NewsColumnTitle = ({
  title,
}: Props) => (
  <h2 className="newsColumnTitle">{title}</h2>
);
