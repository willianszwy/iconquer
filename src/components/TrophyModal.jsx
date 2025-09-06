import { useEffect } from 'react';
import styles from './TrophyModal.module.css';
import TrophyIcon from './TrophyIcon';

const TrophyModal = ({ 
  isOpen, 
  onClose, 
  trophy, 
  message 
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !trophy) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.trophyAnimation}>
          <TrophyIcon icon={trophy.icon} className={styles.trophyIconLarge} />
          <div className={styles.sparkles}>✨</div>
        </div>
        <h3 className={styles.trophyTitle}>🏆 Nova Honra Conquistada! 🏆</h3>
        <div className={styles.trophyNameLarge}>{trophy.name}</div>
        <div className={styles.trophyQuoteLarge}>{trophy.quote}</div>
        {message && (
          <div className={styles.motivationalMessage}>{message}</div>
        )}
        <button className={styles.btnPrimary} onClick={onClose}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default TrophyModal;