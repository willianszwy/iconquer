import { useState, useEffect } from 'react';
import styles from './AchievementModal.module.css';

const AchievementModal = ({ 
  isOpen, 
  onClose, 
  onSave, 
  onDelete, 
  achievement = null 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    achievementDate: ''
  });
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (achievement) {
      setFormData({
        name: achievement.name || '',
        description: achievement.description || '',
        achievementDate: achievement.achievementDate || ''
      });
      setCharCount(achievement.description?.length || 0);
    } else {
      setFormData({
        name: '',
        description: '',
        achievementDate: ''
      });
      setCharCount(0);
    }
  }, [achievement, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Nome da conquista é obrigatório!');
      return;
    }
    onSave(formData);
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'description') {
      setCharCount(value.length);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir esta conquista?')) {
      onDelete(achievement.id);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>{achievement ? '📜 Editar Conquista' : '✨ Nova Conquista'}</h3>
          <button className={styles.closeBtn} onClick={handleClose}>
            &times;
          </button>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">⚔️ Nome da Conquista *</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange('name')}
              required
              maxLength="100"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="description">📖 Descrição (100 caracteres)</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange('description')}
              maxLength="100"
              rows="3"
            />
            <small className={styles.charCounter}>{charCount}/100</small>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="achievementDate">🗓️ Data da Conquista</label>
            <input
              type="date"
              id="achievementDate"
              value={formData.achievementDate}
              onChange={handleChange('achievementDate')}
            />
          </div>
          
          <div className={styles.formActions}>
            <button type="button" className={styles.btnSecondary} onClick={handleClose}>
              Cancelar
            </button>
            {achievement && (
              <button type="button" className={styles.btnDanger} onClick={handleDelete}>
                Excluir
              </button>
            )}
            <button type="submit" className={styles.btnPrimary}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AchievementModal;