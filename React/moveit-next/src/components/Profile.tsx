import { useContext } from 'react';
import { ChalllengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChalllengeContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/38982851?s=460&u=e240e4d85995476b794e23532884c0a2b700b653&v=4" alt="avatar perfil Deyvison"/>
      <div>
        <strong>Deyvison J Paula</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}