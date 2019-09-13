import * as React from 'react';
import headerLogo from '../../assets/logo.png';

interface Props {
  title: string
};

export const ScreenHeader = ({
  title,
}: Props) => (
  <header className="appHeader">
    <div className="container appHeader-inner">
      <img
        src={headerLogo}
        alt="company logo"
        className="companyLogo"
      />
      <h1 className="appTitle">
        {title}
      </h1>
    </div>
  </header>
);
