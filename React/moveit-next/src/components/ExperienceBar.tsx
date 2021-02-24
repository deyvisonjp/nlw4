import { useContext } from 'react';
import { ChalllengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceNextToLevel } = useContext(ChalllengeContext);
  const percenToNextLevel = Math.round(currentExperience * 100) / experienceNextToLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      
      <div>
        <div style= {{ width: `${percenToNextLevel}` }}>
          <span className={styles.currentExperience} style={{ left: `${percenToNextLevel}` }}>
            {currentExperience} xp
          </span>
        </div>
      </div>

      <span>{experienceNextToLevel} xp</span>
    </header>
  )
}