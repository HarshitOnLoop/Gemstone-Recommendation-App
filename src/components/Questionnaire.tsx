import React, { useState } from 'react';
import type { Color, Property, Zodiac, Chakra, Budget, UserPreferences } from '../types';

interface QuestionnaireProps {
  onComplete: (prefs: UserPreferences) => void;
}

const colors: Color[] = ['Red', 'Blue', 'Green', 'Purple', 'Clear', 'Yellow', 'Black', 'Pink'];
const properties: Property[] = ['Love', 'Wealth', 'Health', 'Protection', 'Clarity', 'Energy'];
const zodiacs: Zodiac[] = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const chakras: Chakra[] = ['Root', 'Sacral', 'Solar Plexus', 'Heart', 'Throat', 'Third Eye', 'Crown'];
const budgets: Budget[] = ['Low', 'Medium', 'High'];

export const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [prefs, setPrefs] = useState<UserPreferences>({});

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else onComplete(prefs);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const isCurrentStepValid = () => {
    if (step === 1) return !!prefs.color;
    if (step === 2) return !!prefs.property;
    if (step === 3) return !!prefs.zodiac;
    if (step === 4) return !!prefs.chakra;
    if (step === 5) return !!prefs.budget;
    return false;
  };

  return (
    <div className="card">
      <div className="question-container">
        {step === 1 && (
          <div className="question animation-fade">
            <h2>What color draws you in the most?</h2>
            <div className="options-grid">
              {colors.map((c) => (
                <button
                  key={c}
                  className={`option-btn ${prefs.color === c ? 'selected' : ''}`}
                  onClick={() => setPrefs({ ...prefs, color: c })}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="question animation-fade">
            <h2>What energy are you seeking right now?</h2>
            <div className="options-grid">
              {properties.map((p) => (
                <button
                  key={p}
                  className={`option-btn ${prefs.property === p ? 'selected' : ''}`}
                  onClick={() => setPrefs({ ...prefs, property: p })}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="question animation-fade">
            <h2>What is your Zodiac sign?</h2>
            <div className="options-grid">
              {zodiacs.map((z) => (
                <button
                  key={z}
                  className={`option-btn ${prefs.zodiac === z ? 'selected' : ''}`}
                  onClick={() => setPrefs({ ...prefs, zodiac: z })}
                >
                  {z}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="question animation-fade">
            <h2>Which Chakra do you wish to align?</h2>
            <div className="options-grid">
              {chakras.map((c) => (
                <button
                  key={c}
                  className={`option-btn ${prefs.chakra === c ? 'selected' : ''}`}
                  onClick={() => setPrefs({ ...prefs, chakra: c })}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="question animation-fade">
            <h2>What is your preferred budget range?</h2>
            <div className="options-grid">
              {budgets.map((b) => (
                <button
                  key={b}
                  className={`option-btn ${prefs.budget === b ? 'selected' : ''}`}
                  onClick={() => setPrefs({ ...prefs, budget: b })}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="nav-buttons">
          <button className="btn" onClick={handleBack} disabled={step === 1}>
            Back
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={!isCurrentStepValid()}
          >
            {step === totalSteps ? 'Reveal Gemstone' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};
