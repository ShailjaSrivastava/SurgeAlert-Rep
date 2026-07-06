import { Routes, Route, useLocation } from 'react-router-dom';
import TopAppBar from './components/TopAppBar';
import BottomNavBar from './components/BottomNavBar';
import SideNavBar from './components/SideNavBar';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import ReportFlow from './pages/ReportFlow';
import ReportDetails from './pages/ReportDetails';
import IncidentForm from './pages/IncidentForm';
import Confirmation from './pages/Confirmation';
import Dashboard from './pages/Dashboard';

function AppLayout({ children, layout }) {
  if (layout === 'dashboard') {
    return (
      <div className="flex min-h-screen">
        <SideNavBar />
        <div className="flex flex-col flex-grow min-w-0">
          {children}
          <Footer />
        </div>
      </div>
    );
  }

  if (layout === 'desktop-form') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopAppBar variant="desktop" />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    );
  }

  if (layout === 'confirmation-desktop') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopAppBar variant="desktop" />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    );
  }

  if (layout === 'confirmation-mobile') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopAppBar variant="mobile" />
        {children}
      </div>
    );
  }

  // Default: mobile app layout
  return (
    <div className="min-h-screen flex flex-col">
      <TopAppBar variant="mobile" />
      <div className="flex-grow">
        {children}
      </div>
      <BottomNavBar />
    </div>
  );
}

// Responsive wrapper that shows different layouts based on screen size
function ResponsiveLayout({ mobileLayout, desktopLayout, children }) {
  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <AppLayout layout={mobileLayout}>
          {children}
        </AppLayout>
      </div>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <AppLayout layout={desktopLayout}>
          {children}
        </AppLayout>
      </div>
    </>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Routes>
      {/* Landing - mobile nav on small, desktop nav on large */}
      <Route path="/" element={
        <ResponsiveLayout mobileLayout="default" desktopLayout="desktop-form">
          <Landing />
        </ResponsiveLayout>
      } />

      {/* Report Flow */}
      <Route path="/report" element={
        <ResponsiveLayout mobileLayout="default" desktopLayout="desktop-form">
          <ReportFlow />
        </ResponsiveLayout>
      } />

      {/* Report Details */}
      <Route path="/report/details" element={
        <ResponsiveLayout mobileLayout="default" desktopLayout="desktop-form">
          <ReportDetails />
        </ResponsiveLayout>
      } />

      {/* Incident Form (Desktop Specific Form) */}
      <Route path="/report/incident" element={
        <ResponsiveLayout mobileLayout="default" desktopLayout="desktop-form">
          <IncidentForm />
        </ResponsiveLayout>
      } />

      {/* Confirmation */}
      <Route path="/report/confirmation" element={
        <ResponsiveLayout mobileLayout="confirmation-mobile" desktopLayout="confirmation-desktop">
          <Confirmation />
        </ResponsiveLayout>
      } />

      {/* Dashboard */}
      <Route path="/dashboard" element={
        <ResponsiveLayout mobileLayout="default" desktopLayout="dashboard">
          <Dashboard />
        </ResponsiveLayout>
      } />
    </Routes>
  );
}
