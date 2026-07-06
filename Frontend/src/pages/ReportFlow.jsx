import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    question: 'Is there an accident?',
    description: 'Please confirm if there is a visible collision or vehicle-related incident at your current location.',
    yesIcon: 'warning',
    noIcon: 'cancel',
  },
  {
    question: 'Is there a danger to life?',
    description: 'Please confirm if there are injured persons requiring immediate medical attention or an ambulance.',
    yesIcon: 'warning',
    noIcon: 'close',
  },
  {
    question: 'Is police or traffic control needed?',
    description: 'Confirm if the situation requires law enforcement for safety or to manage vehicle flow.',
    yesIcon: 'local_police',
    noIcon: 'close',
  },
];

export default function ReportFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentStep]: answer };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Done with questionnaire — go to report details
      navigate('/report/details', { state: { answers: newAnswers } });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Layout */}
      <main className="flex-grow pt-24 pb-32 md:pb-12 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full flex flex-col items-center">
        {/* Progress */}
        <div className="w-full max-w-2xl mb-12">
          <div className="flex justify-between items-end mb-4">
            <span className="font-sans text-primary uppercase tracking-widest" style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: 800 }}>
              REPORTING STATUS
            </span>
            <span className="font-sans text-on-surface-variant" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="h-4 w-full bg-surface-container-highest rounded-full overflow-hidden border-2 border-outline-variant">
            <div
              className="h-full bg-primary-container transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-3xl text-center space-y-12">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 bg-error-container text-on-error-container rounded-lg font-sans mb-4" style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: 800 }}>
              HIGH PRIORITY
            </div>
            <h2 className="font-sans text-on-surface leading-tight px-4" style={{ fontSize: '32px', lineHeight: '40px', fontWeight: 700, letterSpacing: '-0.01em' }}>
              {step.question}
            </h2>
            <p className="font-sans text-on-surface-variant max-w-lg mx-auto" style={{ fontSize: '18px', lineHeight: '28px' }}>
              {step.description}
            </p>
          </div>

          {/* YES / NO Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter w-full px-4">
            <button
              onClick={() => handleAnswer('yes')}
              className="group relative flex flex-col items-center justify-center h-48 md:h-64 bg-primary text-on-primary rounded-xl border-4 border-primary transition-all active:translate-y-2 active:shadow-none"
              style={{ boxShadow: '0 8px 0 0 #93000b' }}
            >
              <span className="material-symbols-outlined mb-4 filled-icon" style={{ fontSize: '64px' }}>
                {step.yesIcon}
              </span>
              <span className="font-sans uppercase" style={{ fontSize: '48px', lineHeight: '56px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                YES
              </span>
            </button>
            <button
              onClick={() => handleAnswer('no')}
              className="group relative flex flex-col items-center justify-center h-48 md:h-64 bg-surface-container-highest text-on-surface-variant rounded-xl border-4 border-outline transition-all active:translate-y-2 active:shadow-none"
              style={{ boxShadow: '0 8px 0 0 #5c403c' }}
            >
              <span className="material-symbols-outlined mb-4" style={{ fontSize: '64px' }}>
                {step.noIcon}
              </span>
              <span className="font-sans uppercase" style={{ fontSize: '48px', lineHeight: '56px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                NO
              </span>
            </button>
          </div>
        </div>

        {/* Map Reference */}
        <div className="mt-16 w-full max-w-2xl rounded-xl border-2 border-outline-variant overflow-hidden bg-surface-container">
          <div className="p-4 flex items-center justify-between border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary filled-icon">location_on</span>
              <span className="font-sans" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>Current Location</span>
            </div>
            <span className="text-on-surface-variant font-mono" style={{ fontSize: '12px' }}>40.7128° N, 74.0060° W</span>
          </div>
          <div className="h-32 bg-surface-variant relative">
            <div className="absolute inset-0 bg-surface-dim opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full animate-ping opacity-75"></div>
              <div className="w-4 h-4 bg-primary rounded-full absolute border-2 border-white"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-margin-mobile flex justify-center mb-4">
        <button className="text-on-surface-variant font-sans flex items-center gap-2 px-6 py-3 rounded-full hover:bg-surface-container-high transition-colors" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 700 }}>
          <span className="material-symbols-outlined">help</span>
          Need Help Identifying?
        </button>
      </footer>
    </div>
  );
}
