import { Link, useLocation } from 'react-router-dom';

export default function BottomNavBar() {
  const location = useLocation();

  const tabs = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Reports', icon: 'assignment', path: '/report' },
    { label: 'Alerts', icon: 'notifications', path: '#alerts' },
    { label: 'Map', icon: 'explore', path: '#map' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('#')) return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-surface border-t-2 border-outline-variant px-margin-mobile pb-safe">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          to={tab.path}
          className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-200 ${
            isActive(tab.path)
              ? 'bg-primary-container text-on-primary-container rounded-full px-4 py-1'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={isActive(tab.path) ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            {tab.icon}
          </span>
          <span className="font-sans" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>
            {tab.label}
          </span>
          {tab.label === 'Alerts' && (
            <span className="absolute top-0 right-0 bg-primary w-2 h-2 rounded-full border border-surface"></span>
          )}
        </Link>
      ))}
    </nav>
  );
}
