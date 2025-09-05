import { useState, useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`${styles.toast} ${styles[type]} ${isVisible ? styles.show : ''}`}>
      {message}
    </div>
  );
};

export default Toast;