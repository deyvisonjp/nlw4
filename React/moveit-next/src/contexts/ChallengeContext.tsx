import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  activeChallenge: Challenge,
  experienceNextToLevel: number,
  levelUp: () => void,
  startNewChallenge: () => void,
  resetChallenge: () => void,
}

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChalllengeContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceNextToLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge)
  };

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChalllengeContext.Provider
      value={{
        level,
        currentExperience,
        experienceNextToLevel,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChalllengeContext.Provider>
  );
}
