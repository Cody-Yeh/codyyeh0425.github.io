import { useEffect } from 'react';

type Props = {
  children: React.ReactElement;
};

export const Layout = ({ children }: Props): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.userSelect = 'text';
  }, []);

  return <div>{children}</div>;
};