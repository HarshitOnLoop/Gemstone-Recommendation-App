import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Questionnaire } from './components/Questionnaire'
import { RecommendationResult } from './components/RecommendationResult'
import { gemstones } from './data/gemstones'
import type { UserPreferences, Gemstone } from './types'
import './index.css'

function App() {
  const [recommendedGem, setRecommendedGem] = useState<Gemstone | null>(null)

  const handleComplete = (prefs: UserPreferences) => {
    let bestMatch: Gemstone | null = null;
    let highestScore = -1;

    gemstones.forEach(gem => {
      let score = 0;

      if (prefs.color && gem.color === prefs.color) score += 3;
      if (prefs.property && gem.properties.includes(prefs.property)) score += 3;
      

      if (prefs.zodiac && gem.zodiacs.includes(prefs.zodiac)) score += 2;
      if (prefs.chakra && gem.chakras.includes(prefs.chakra)) score += 2;
      

      if (prefs.budget && gem.budget === prefs.budget) score += 1;

      if (score > highestScore) {
        highestScore = score;
        bestMatch = gem;
      }
    });

    if (!bestMatch && gemstones.length > 0) {
      bestMatch = gemstones[0];
    }

    setRecommendedGem(bestMatch);
  }

  const handleReset = () => {
    setRecommendedGem(null);
  }

  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <div className="container app-container">
          <div className="app-header">
            <h1>Find Your Spiritual Stone</h1>
            <p>Discover the crystal energy that aligns with your soul's journey</p>
          </div>
          {!recommendedGem ? (
            <Questionnaire onComplete={handleComplete} />
          ) : (
            <RecommendationResult gemstone={recommendedGem} onReset={handleReset} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
