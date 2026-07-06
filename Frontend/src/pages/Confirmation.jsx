import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Confirmation() {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgressWidth(72), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Confirmation (shown below lg) */}
      <main className="lg:hidden flex-grow flex flex-col items-center justify-center px-margin-mobile pt-24 pb-12 max-w-2xl mx-auto w-full text-center">
        <div className="relative w-full py-12 flex flex-col items-center">
          {/* Animated Checkmark */}
          <div className="relative mb-8 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white border-2 border-outline-variant rounded-full hard-shadow">
            <svg className="w-20 h-20 md:w-24 md:h-24 text-green-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
              <polyline className="check-path" points="20 6 9 17 4 12" />
            </svg>
            <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-pulse-soft opacity-50"></div>
            <div className="absolute -inset-4 rounded-full border-2 border-green-100 animate-pulse-soft opacity-30" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="inline-block bg-green-100 text-green-800 font-sans px-3 py-1 rounded-full mb-2 uppercase" style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: 800 }}>
              Verification Complete
            </div>
            <h2 className="font-sans text-on-surface max-w-md mx-auto leading-tight" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 700 }}>
              Report Logged Successfully
            </h2>
            <p className="font-sans text-on-surface-variant max-w-lg mx-auto px-4" style={{ fontSize: '16px', lineHeight: '24px' }}>
              Nearby reports are being clustered. Dispatch will be notified once the surge threshold is met. Your data helps keep the community safe.
            </p>
          </div>

          {/* Map Snapshot Card */}
          <div className="mt-10 w-full rounded-xl border-2 border-outline-variant overflow-hidden bg-white hard-shadow relative">
            <div className="h-48 w-full relative bg-surface-dim">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-sm border border-outline flex items-center gap-1" style={{ fontSize: '10px', fontWeight: 700 }}>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  ACTIVE CLUSTER DETECTED
                </span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between bg-surface-container-low border-t border-outline-variant">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">share_location</span>
                </div>
                <div className="text-left">
                  <p className="font-sans text-on-surface" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>Location Broadcasted</p>
                  <p className="text-on-surface-variant" style={{ fontSize: '12px' }}>Incident #SA-8291 logged at 14:02</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline">info</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full px-4 justify-center">
            <Link
              to="/dashboard"
              className="w-full sm:w-auto min-w-[200px] h-14 bg-primary text-on-primary font-sans rounded-lg flex items-center justify-center gap-2 hard-shadow hover:brightness-110 active:scale-95 transition-all"
              style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}
            >
              <span className="material-symbols-outlined">explore</span>
              View Live Map
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto min-w-[200px] h-14 border-2 border-outline text-on-surface font-sans rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-high active:scale-95 transition-all"
              style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}
            >
              <span className="material-symbols-outlined">home</span>
              Return Home
            </Link>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-outline-variant/30 w-full max-w-md">
          <p className="text-on-surface-variant italic" style={{ fontSize: '12px' }}>
            Thank you for your report. Information is anonymized and transmitted securely via SurgeAlert Emergency Protocols.
          </p>
        </div>
      </main>

      {/* Desktop Confirmation (shown at lg+) */}
      <main className="hidden lg:block flex-grow w-full max-w-max-width mx-auto px-margin-desktop py-10">
        {/* Hero */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4 border-4 border-green-500">
            <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="check-path" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
          <h1 className="font-sans text-on-surface mb-2" style={{ fontSize: '32px', lineHeight: '40px', fontWeight: 700, letterSpacing: '-0.01em' }}>
            Report Logged Successfully
          </h1>
          <p className="font-sans text-on-surface-variant max-w-2xl" style={{ fontSize: '18px', lineHeight: '28px' }}>
            Your report has been encrypted and added to the cluster queue. Dispatch units will be automatically notified once the <span className="text-primary font-bold">surge threshold</span> for your specific location is met.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Map Cluster Panel */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-low border-2 border-outline-variant rounded-xl overflow-hidden hard-shadow-lg flex flex-col h-[500px]">
            <div className="p-4 bg-surface flex justify-between items-center border-b-2 border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="font-sans" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>Active Threshold Clusters</span>
              </div>
              <div className="flex gap-1">
                <span className="bg-primary text-on-primary px-2 py-1 rounded uppercase" style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: 800 }}>High Density</span>
                <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded uppercase" style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: 800 }}>Trending</span>
              </div>
            </div>
            <div className="flex-grow relative bg-surface-container-highest overflow-hidden">
              <div className="absolute inset-0 bg-surface-dim"></div>
              {/* Overlay */}
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md p-4 border-2 border-outline-variant rounded-lg">
                <div className="uppercase text-on-surface-variant" style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: 800 }}>NEIGHBORHOOD STATUS</div>
                <div className="font-sans text-primary" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 600 }}>Alert Level 4</div>
              </div>
              {/* Pulse Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-soft">
                  <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {/* Broadcast Status Card */}
            <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 hard-shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-tertiary">
                <span className="material-symbols-outlined filled-icon">broadcast_on_personal</span>
                <h3 className="font-sans uppercase" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>Broadcast Status</h3>
              </div>
              <div className="space-y-md">
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-sans" style={{ fontSize: '16px', lineHeight: '24px' }}>Verification</span>
                  <span className="text-green-600 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check_circle</span> Verified
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-sans" style={{ fontSize: '16px', lineHeight: '24px' }}>Anonymity</span>
                  <span className="text-on-surface font-bold">100% Secure</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-sans" style={{ fontSize: '16px', lineHeight: '24px' }}>Threshold Gap</span>
                  <span className="text-primary font-extrabold">+3 Reports</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-surface-container-high h-4 rounded-full overflow-hidden border border-outline-variant mt-4">
                  <div
                    className="bg-primary h-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
                <p className="text-on-surface-variant text-center mt-1 italic" style={{ fontSize: '12px' }}>Dispatch trigger at 10 reports per cluster.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <Link
                to="/dashboard"
                className="bg-primary-container text-on-primary-container h-14 font-sans rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg"
                style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}
              >
                <span className="material-symbols-outlined">live_tv</span>
                View Live Map
              </Link>
              <Link
                to="/dashboard"
                className="bg-surface border-2 border-outline h-14 font-sans rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container-high active:scale-95 transition-all"
                style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}
              >
                <span className="material-symbols-outlined">dashboard</span>
                Return to Dashboard
              </Link>
            </div>

            {/* Pro Tip */}
            <div className="bg-secondary-fixed border-2 border-on-secondary-fixed-variant rounded-xl p-4 flex items-start gap-2">
              <span className="material-symbols-outlined text-on-secondary-fixed-variant">info</span>
              <div>
                <div className="font-sans text-on-secondary-fixed-variant" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>Pro Tip</div>
                <p className="text-on-secondary-fixed-variant leading-tight" style={{ fontSize: '13px' }}>Stay within the safe perimeter marked on the live map until emergency units arrive.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
