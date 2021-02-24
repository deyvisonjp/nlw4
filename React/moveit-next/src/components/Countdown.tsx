import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0').split(''); // Senão houver dezenas adiciona o caracter zero do lado direito
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active, time])

  return( 
    <div>
    <div className={styles.countdownContainer}>
      <div>
        <span>{minuteTen}</span>
        <span>{minuteUnit}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondTen}</span>
        <span>{secondUnit}</span>
      </div>
    </div>

      <button
        type="button"
        className={styles.countdownButtonStart}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  )
}