import { useState, useCallback } from 'react';
import { useAchievements } from './hooks/useAchievements';
import AchievementCard from './components/AchievementCard';
import AchievementModal from './components/AchievementModal';
import TrophyModal from './components/TrophyModal';
import Toast from './components/Toast';
import './App.css';

function App() {
  const {
    achievements,
    currentDay,
    currentMonth,
    currentYear,
    addAchievement,
    updateAchievement,
    deleteAchievement,
    getAchievementsByDay,
    getAchievementsByMonth,
    getAchievementsByYear,
    calculateTrophy,
    getCurrentTrophies,
    navigateDay,
    navigateMonth,
    navigateYear,
    getRandomMotivationalMessage
  } = useAchievements();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingAchievement, setEditingAchievement] = useState(null);
  const [trophyModal, setTrophyModal] = useState({ open: false, trophy: null, message: '' });
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ message: '', type: 'success' });
  }, []);

  const checkForNewTrophies = useCallback((oldTrophies, newTrophies) => {
    const periods = ['day', 'month', 'year'];
    
    periods.forEach(period => {
      if (oldTrophies[period].name !== newTrophies[period].name) {
        setTimeout(() => {
          setTrophyModal({
            open: true,
            trophy: newTrophies[period],
            message: getRandomMotivationalMessage()
          });
        }, 500);
      }
    });
  }, [getRandomMotivationalMessage]);

  const handleOpenModal = useCallback(() => {
    setEditingAchievement(null);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setEditingAchievement(null);
  }, []);

  const handleAchievementClick = useCallback((achievement) => {
    setEditingAchievement(achievement);
    setModalOpen(true);
  }, []);

  const handleSaveAchievement = useCallback((formData) => {
    const oldTrophies = getCurrentTrophies();
    
    if (editingAchievement) {
      updateAchievement(editingAchievement.id, formData);
      showToast('Conquista atualizada!');
    } else {
      addAchievement(formData);
      showToast('Nova conquista adicionada!');
    }
    
    handleCloseModal();
    
    // Check for new trophies after a short delay
    setTimeout(() => {
      const newTrophies = getCurrentTrophies();
      checkForNewTrophies(oldTrophies, newTrophies);
    }, 100);

    // Deadline functionality removed - no notifications needed
  }, [editingAchievement, updateAchievement, addAchievement, handleCloseModal, showToast, getCurrentTrophies, checkForNewTrophies]);

  const handleDeleteAchievement = useCallback((id) => {
    deleteAchievement(id);
    handleCloseModal();
    showToast('Conquista excluída!');
  }, [deleteAchievement, handleCloseModal, showToast]);


  const dayAchievements = getAchievementsByDay(currentDay);
  const monthAchievements = getAchievementsByMonth(currentMonth);
  const yearAchievements = getAchievementsByYear(currentYear);

  const dayTrophy = calculateTrophy(dayAchievements.length, 'day');
  const monthTrophy = calculateTrophy(monthAchievements.length, 'month');
  const yearTrophy = calculateTrophy(yearAchievements.length, 'year');

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">🏆 iConquer</h1>
        <p className="subtitle">Crônicas das Suas Grandes Aventuras</p>
      </header>

      <main className="main-content">
        <AchievementCard
          title={currentDay.toLocaleDateString('pt-BR', { 
            day: 'numeric', 
            month: 'long' 
          })}
          trophy={dayTrophy}
          achievements={dayAchievements}
          onPrevious={() => navigateDay(-1)}
          onNext={() => navigateDay(1)}
          onAchievementClick={handleAchievementClick}
        />

        <AchievementCard
          title={currentMonth.toLocaleDateString('pt-BR', { 
            month: 'long',
            year: 'numeric'
          })}
          trophy={monthTrophy}
          achievements={monthAchievements}
          onPrevious={() => navigateMonth(-1)}
          onNext={() => navigateMonth(1)}
          onAchievementClick={handleAchievementClick}
        />

        <AchievementCard
          title={currentYear.getFullYear().toString()}
          trophy={yearTrophy}
          achievements={yearAchievements}
          onPrevious={() => navigateYear(-1)}
          onNext={() => navigateYear(1)}
          onAchievementClick={handleAchievementClick}
        />
      </main>

      <button className="fab" onClick={handleOpenModal}>
        +
      </button>

      <AchievementModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAchievement}
        onDelete={handleDeleteAchievement}
        achievement={editingAchievement}
      />

      <TrophyModal
        isOpen={trophyModal.open}
        onClose={() => setTrophyModal({ open: false, trophy: null, message: '' })}
        trophy={trophyModal.trophy}
        message={trophyModal.message}
      />

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />
    </div>
  );
}

export default App;