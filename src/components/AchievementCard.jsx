import { useState } from 'react';
import styles from './AchievementCard.module.css';
import TrophyIcon from './TrophyIcon';

const AchievementCard = ({ 
  title, 
  trophy, 
  achievements, 
  onPrevious, 
  onNext, 
  onAchievementClick 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <button className={styles.navBtn} onClick={onPrevious}>‹</button>
        <h2 className={styles.cardTitle}>{title}</h2>
        <button className={styles.navBtn} onClick={onNext}>›</button>
      </div>
      
      <div className={styles.trophySection}>
        <TrophyIcon icon={trophy.icon} className={styles.trophyIcon} />
        <div className={styles.trophyName}>{trophy.name}</div>
        <div className={styles.trophyQuote}>{trophy.quote}</div>
      </div>
      
      <div className={styles.achievementsList}>
        {achievements.length === 0 ? (
          <p className={styles.noAchievements}>Nenhuma conquista registrada</p>
        ) : (
          achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className={styles.achievementItem}
              onClick={() => onAchievementClick(achievement)}
            >
              <div className={styles.achievementName}>{achievement.name}</div>
              {achievement.description && (
                <div className={styles.achievementDescription}>
                  {achievement.description}
                </div>
              )}
              <div className={styles.achievementDate}>
                {new Date(achievement.achievementDate).toLocaleDateString('pt-BR')}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AchievementCard;