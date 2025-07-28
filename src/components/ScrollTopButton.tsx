import { useEffect, useState } from 'react';

const buttonStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '32px',
  right: '32px',
  zIndex: 1000,
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  cursor: 'pointer',
  transition: 'opacity 0.3s',
};

const iconStyle: React.CSSProperties = {
  width: '32px',
  height: '32px',
  color: 'white',
};

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <button style={buttonStyle} onClick={handleClick} aria-label="Scroll to top">
      <svg style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
        <path d="M6 11l6-6 6 6" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
} 