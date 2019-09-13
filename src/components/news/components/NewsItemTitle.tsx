import * as React from 'react';

interface NewsItemTitleBigProps {
  title: string
};

const NewsItemTitleBig = ({
  title,
}: NewsItemTitleBigProps) => (
    <header>
      <h3>{title}</h3>
    </header>
);

interface NewsItemTitleSmallProps {
  title: string
};

const NewsItemTitleSmall = ({
  title
}: NewsItemTitleSmallProps) => (
  <h4 className="readLaterItem-title">{title}</h4>
);

export {
  NewsItemTitleBig,
  NewsItemTitleSmall
};
