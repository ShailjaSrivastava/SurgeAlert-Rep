import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-6 mt-auto border-t-2 border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto gap-4">
        <div className="flex items-center gap-2">
          <span className="font-sans text-primary" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>SurgeAlert</span>
          <span className="text-on-surface-variant font-sans" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>|</span>
          <span className="text-on-surface-variant font-sans" style={{ fontSize: '12px', fontWeight: 700 }}>
            © 2024 SurgeAlert. All reports are encrypted and support 100% anonymity.
          </span>
        </div>
        <div className="flex gap-6">
          <Link to="#" className="text-on-surface-variant font-sans hover:text-primary transition-colors opacity-80 hover:opacity-100" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>
            Legal
          </Link>
          <Link to="#" className="text-on-surface-variant font-sans hover:text-primary transition-colors opacity-80 hover:opacity-100" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>
            Anonymity Policy
          </Link>
          <Link to="#" className="text-on-surface-variant font-sans hover:text-primary transition-colors opacity-80 hover:opacity-100" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
