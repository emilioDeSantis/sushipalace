
// components/LinkButton.tsx
import Link from 'next/link';
import { FC } from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({ href, children }) => {
  return (
    <a href={href} 
    className='link-button'
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBlock: '0.8rem',
        border: '1px solid #F9361B', 
        // border: '0.3px solid #9462FF',
        // color: '#9462FF',
        fontSize: '1.1rem',
        width: '100%',
        fontWeight: 300,
        letterSpacing: '0.32em',
        maxWidth: '30rem',
      }}>
        {children}
      </a>
  );
};

export default LinkButton;
