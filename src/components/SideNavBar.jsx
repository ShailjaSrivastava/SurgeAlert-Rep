import { Link, useLocation } from 'react-router-dom';

export default function SideNavBar() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', icon: 'home', path: '/dashboard' },
    { label: 'Reports', icon: 'assignment', path: '/report' },
    { label: 'Alerts', icon: 'warning', path: '#alerts' },
    { label: 'Map', icon: 'map', path: '#map' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="h-screen w-64 left-0 sticky top-0 bg-surface-container-low border-r-2 border-outline-variant flex-col gap-2 p-4 hidden md:flex z-50 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-primary-container flex items-center justify-center rounded-lg">
          <span className="material-symbols-outlined text-on-primary-container filled-icon">security</span>
        </div>
        <div>
          <h1 className="font-sans text-primary leading-none" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 700 }}>SurgeAlert</h1>
          <p className="font-sans uppercase tracking-widest text-on-surface-variant" style={{ fontSize: '10px', fontWeight: 700 }}>Emergency Command</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 flex-grow">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`font-sans flex items-center gap-4 p-4 transition-all active:translate-x-1 duration-200 rounded-xl ${
              isActive(item.path)
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:bg-surface-container-highest'
            }`}
            style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}
          >
            <span
              className="material-symbols-outlined"
              style={isActive(item.path) ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-4 flex flex-col gap-4 border-t border-outline-variant">
        <Link
          to="/report"
          className="bg-primary text-on-primary w-full py-4 rounded-lg font-sans flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
          style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}
        >
          <span className="material-symbols-outlined">add_alert</span>
          New Report
        </Link>
        <div className="flex items-center gap-2 p-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container bg-surface-container-highest flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans" style={{ fontSize: '14px', fontWeight: 700 }}>Officer Marcus</span>
            <span className="text-on-surface-variant" style={{ fontSize: '10px' }}>Dispatcher ID: 9921</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
