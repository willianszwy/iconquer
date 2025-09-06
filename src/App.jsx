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
        <h1 className="title">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="title-icon"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="a"></g> <g id="b"></g> <g id="c"></g> <g id="d"> <path d="M15.38,57.49l10.23-8.11-.33-5.52-.6-4.34-5.4-.78-4.3,17.85c-.05,.35,.1,.7,.39,.9h0Z" fill="#0acffb" id="e"></path> <path d="M5.11,25.88l13.04,7.2,2.98-1.99,3.36-3-.35-4.28-18.3,1.43c-.35,.06-.64,.31-.73,.65Z" fill="#6df4c0" id="f"></path> <path d="M19.29,38.75l6,5.11,5.88-3.16,.83-6.08-4.88-4.62-5.98,1.09L5.11,25.88c-.12,.33-.04,.7,.21,.95l13.97,11.91Z" fill="#9af6d3" id="g"></path> <path d="M48.64,57.53l-2.7-9.24-7.23-4.43-3.87-.82-2.85,4.94,15.65,9.61c.32,.18,.71,.16,1-.06h0Z" fill="#fdda5c" id="h"></path> <path d="M44.71,38.75l.12-5.4-1.96-2.26-5.39-1.48-5.47,5.01,1.28,6.31,5.43,2.94,9.93,13.67c.3-.21,.44-.58,.37-.93l-4.3-17.85Z" fill="#fce87b" id="i"></path> <path d="M58.93,25.87l-10.23,.78-5.84,4.44,1.85,7.66,13.97-11.91c.27-.24,.37-.62,.25-.97h0Z" fill="#d6b1ed" id="j"></path> <path d="M39.85,23.81c-3.16-3.56-5.62-2.78-7.85-.61l-2.78,5.56,2.78,5.86,10.86-3.53,16.07-5.22c-.11-.35-.41-.6-.77-.63l-18.3-1.43Z" fill="#e5c9f3" id="k"></path> <path d="M32,6.35l-2.58,12.54,2.58,4.32,7.85,.61-7.01-16.97c-.16-.31-.49-.51-.84-.49h0Z" fill="#fd91ba" id="l"></path> <path d="M31.65,6.35c-.22,.09-.4,.27-.49,.49l-7.01,16.97-3.01,7.28,10.86,3.53V6.35c-.12-.02-.23-.02-.35,0h0Z" fill="#ffa6c5" id="m"></path> <path d="M32,47.98l6.71-4.12-6.71-9.24-6.71,9.24-9.9,13.63c.28,.22,.66,.25,.97,.1l15.65-9.61Z" fill="#62d9fa" id="n"></path> <path d="M58.93,25.87l-15.14,9.05-.92-3.83,16.07-5.22Z" fill="#ca96e5" id="o"></path> <path d="M48.64,57.53l-13.29-11.61,3.36-2.06,9.93,13.67Z" fill="#f8c228" id="p"></path> <path d="M15.36,57.53l6.93-16.22,3,2.55-9.93,13.67Z" fill="#00bff8" id="q"></path> <path d="M5.07,25.87l17.57,1.58-1.5,3.64L5.07,25.87Z" fill="#3aedbc" id="r"></path> <path d="M32,6.3l3.93,17.2-3.93-.3V6.3Z" fill="#fc76a8" id="s"></path> <path d="M58.24,24.24l-17.69-1.38-6.78-16.4c-.4-.97-1.53-1.44-2.5-1.04-.47,.2-.84,.56-1.04,1.04l-6.78,16.4-17.69,1.38c-.51,.04-.97,.28-1.31,.66-.33,.39-.49,.88-.45,1.39,.04,.5,.28,.98,.67,1.31l13.5,11.51-4.16,17.25c-.25,1.03,.39,2.06,1.41,2.31,.49,.12,1.02,.03,1.45-.23l15.12-9.29,15.12,9.29c.92,.56,2.09,.26,2.63-.63,.27-.44,.35-.95,.23-1.45l-4.16-17.25,13.5-11.51c.8-.68,.9-1.89,.21-2.7-.33-.38-.8-.63-1.31-.67Zm-2.92,1.76l-22.32,7.25v-8.97l22.32,1.71Zm-17.01-3.31l-5.31-.41V9.84l5.31,12.85Zm-7.31-12.85v23.41l-8.53-2.77,2.6-6.28,5.93-14.35Zm-10.43,20.02l-11.83-3.84,13.86-1.08-2.03,4.92Zm-12.5-1.96l22.31,7.25-5.27,7.25L8.07,27.89Zm11.81,12.67l4.05,3.46-7.31,10.06,3.26-13.52Zm-1.67,14.74l13.79-18.98,5.27,7.25-19.06,11.73Zm20.24-10.11l7.31,10.06-11.85-7.27,4.54-2.79Zm8.96,8.93l-13.79-18.98,8.53-2.77,5.27,21.75Zm-2.11-17.2l-1.25-5.18,11.82-3.84-10.58,9.02Z"></path> </g> <g id="t"></g> <g id="u"></g> <g id="v"></g> <g id="w"></g> <g id="x"></g> <g id="y"></g> <g id="a`"></g> <g id="aa"></g> <g id="ab"></g> <g id="ac"></g> <g id="ad"></g> <g id="ae"></g> <g id="af"></g> <g id="ag"></g> <g id="ah"></g> <g id="ai"></g> <g id="aj"></g> <g id="ak"></g> <g id="al"></g> <g id="am"></g> <g id="an"></g> <g id="ao"></g> <g id="ap"></g> <g id="aq"></g> <g id="ar"></g> <g id="as"></g> <g id="at"></g> <g id="au"></g> <g id="av"></g> <g id="aw"></g> <g id="ax"></g> <g id="ay"></g> <g id="b`"></g> <g id="ba"></g> <g id="bb"></g> <g id="bc"></g> <g id="bd"></g> <g id="be"></g> <g id="bf"></g> <g id="bg"></g> <g id="bh"></g> <g id="bi"></g> <g id="bj"></g> <g id="bk"></g> <g id="bl"></g> <g id="bm"></g> </g></svg>
          iConquer
        </h1>
        <p className="subtitle">I'd forgotten not all victories were about saving the universe.</p>
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