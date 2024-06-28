// pages/menu.tsx
import React from 'react';
import Menu from '../components/Menu';

const MenuPage: React.FC = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '4rem',
        alignItems: 'center',
    }}>
      <Menu />
    </div>
  );
};

export default MenuPage;
