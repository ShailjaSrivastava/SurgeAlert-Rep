import { Link, useLocation } from 'react-router-dom';

export default function TopAppBar({ variant = 'mobile' }) {
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Reports', path: '/report' },
    { label: 'Alerts', path: '#' },
    { label: 'Map', path: '#' },
  ];

  // Desktop navigation bar
  if (variant === 'desktop') {
    return (
      <nav className="bg-surface border-b-2 border-outline-variant w-full top-0 sticky z-50">
        <div className="flex justify-between items-center h-20 px-margin-desktop w-full max-w-max-width mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-sans text-display-lg font-black text-primary leading-none tracking-tight" style={{ fontSize: '48px', lineHeight: '56px', fontWeight: 800, letterSpacing: '-0.02em' }}>
              SurgeAlert
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-sans text-label-bold px-4 py-2 rounded-lg transition-colors duration-150 active:scale-95 ${
                  location.pathname === link.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
                style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-150">
              notifications
            </button>
            <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-150">
              settings
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-outline-variant bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant text-2xl">account_circle</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Mobile navigation bar (default)
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 bg-surface border-b-2 border-outline-variant">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center justify-center w-12 h-12 transition-transform active:scale-95 duration-100 text-primary">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <Link to="/" className="font-sans text-primary leading-none" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 700 }}>
          SurgeAlert
        </Link>
      </div>
      <div className="flex items-center">
        <button className="flex items-center justify-center w-12 h-12 transition-transform active:scale-95 duration-100 text-on-surface-variant">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
}
