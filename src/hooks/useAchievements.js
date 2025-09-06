import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'iconquer-achievements';

export const trophies = [
  { name: 'Bill the Pony', icon: '🐴', quote: '"Mesmo o menor dos seres pode mudar o curso do futuro." — J.R.R. Tolkien' },
  { name: 'Mafagafo', icon: '🌀', quote: '"O absurdo é o tempero que transforma o impossível em divertido."' },
  { name: 'Elizabeth Bennet', icon: '📚', quote: '"Coragem é a graça sob pressão." — Ernest Hemingway' },
  { name: 'Don\'t panic! & Thanks for the fish', icon: '🐟', quote: '"O universo é grande, estranho e cheio de peixes; sorria e continue nadando."' },
  { name: 'Timão & Pumba', icon: '🐗', quote: '"Às vezes, a melhor estratégia é rir, comer e seguir em frente."' },
  { name: 'Steve Wozniak', icon: '💻', quote: '"A melhor maneira de prever o futuro é inventá-lo." — Alan Kay' },
  { name: 'Inigo Montoya', icon: '⚔️', quote: '"Caia sete vezes e levante-se oito." — Provérbio japonês' },
  { name: 'Carmen Sandiego', icon: '🕵️‍♀️', quote: '"Não é o destino que importa, mas a viagem." — T.S. Eliot' },
  { name: 'Jack Reacher', icon: '🥊', quote: '"A coragem não é ausência de medo, mas a decisão de que algo é mais importante que ele." — Ambrose Redmoon' },
  { name: 'John Wick', icon: '🐶', quote: '"O homem que se ergue é mais forte do que o que nunca caiu." — Viktor Frankl' },
  { name: 'Geralt', icon: '🐺', quote: '"O homem que conquista a si mesmo é mais poderoso do que aquele que conquista mil homens em batalha." — Buda' },
  { name: 'Musashi', icon: '🏯', quote: '"Perceba o que não pode ser visto a olho nu." — Miyamoto Musashi' },
  { name: 'Asterix & Obelix', icon: '💪', quote: '"A alegria evita mil males e prolonga a vida." — William Shakespeare' },
  { name: 'Cheshire Cat', icon: '😼', quote: '"Não se perca no tempo: nós somos feitos dele." — Jorge Luis Borges' },
  { name: 'Scadufax', icon: '🌟', quote: '"A velocidade não é nada sem direção." — Provérbio chinês' },
  { name: 'Harry Vanderspeigle', icon: '👽', quote: '"Às vezes, ser estranho é apenas o primeiro passo para ser extraordinário." — Clarissa Pinkola Estés' },
  { name: 'Tiffany Aching', icon: '🥾', quote: '"O que você faz com o que tem é o que define quem você é." — Madeline L\'Engle' },
  { name: 'Calcifer', icon: '🔥', quote: '"Aqueles que não acreditam em magia jamais a encontrarão." — Roald Dahl' },
  { name: '10ª Doctor', icon: '⏳', quote: '"O tempo é muito lento para os que esperam, muito rápido para os que temem, muito longo para os que sofrem, muito curto para os que se alegram, mas para os que amam, o tempo é eternidade." — Henry Van Dyke' },
  { name: 'Lúthien Tinúviel', icon: '✨', quote: '"A imaginação é o verdadeiro começo da criação." — George Bernard Shaw' }
];

const motivationalMessages = [
  "🎉 Incrível! Você conquistou um novo troféu!",
  "🌟 Parabéns! Sua dedicação está valendo a pena!",
  "🚀 Fantástico! Você está evoluindo!",
  "💪 Excelente! Continue assim!",
  "🏆 Uau! Mais um troféu na sua coleção!",
  "✨ Brilhante! Você é imparável!",
  "🔥 Sensacional! Que conquista incrível!"
];

export const useAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setAchievements(JSON.parse(stored));
    }
  }, []);

  const saveToStorage = useCallback((newAchievements) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAchievements));
    setAchievements(newAchievements);
  }, []);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const getLocalDateString = (date = new Date()) => {
    // Fix timezone issue by adjusting for local timezone
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().split('T')[0];
  };

  const addAchievement = useCallback((achievement) => {
    const newAchievement = {
      ...achievement,
      id: generateId(),
      createdAt: new Date().toISOString(),
      achievementDate: achievement.achievementDate || getLocalDateString()
    };
    const newAchievements = [...achievements, newAchievement];
    saveToStorage(newAchievements);
    return newAchievement;
  }, [achievements, saveToStorage]);

  const updateAchievement = useCallback((id, updates) => {
    const newAchievements = achievements.map(achievement => 
      achievement.id === id ? { ...achievement, ...updates } : achievement
    );
    saveToStorage(newAchievements);
  }, [achievements, saveToStorage]);

  const deleteAchievement = useCallback((id) => {
    const newAchievements = achievements.filter(achievement => achievement.id !== id);
    saveToStorage(newAchievements);
  }, [achievements, saveToStorage]);

  const getAchievementsByDay = useCallback((date) => {
    const targetDate = date.toDateString();
    return achievements.filter(achievement => {
      if (!achievement.achievementDate) return false;
      const achievementDate = new Date(achievement.achievementDate);
      return achievementDate.toDateString() === targetDate;
    });
  }, [achievements]);

  const getAchievementsByMonth = useCallback((date) => {
    const targetMonth = date.getMonth();
    const targetYear = date.getFullYear();
    return achievements.filter(achievement => {
      if (!achievement.achievementDate) return false;
      const achievementDate = new Date(achievement.achievementDate);
      return achievementDate.getMonth() === targetMonth && 
             achievementDate.getFullYear() === targetYear;
    });
  }, [achievements]);

  const getAchievementsByYear = useCallback((date) => {
    const targetYear = date.getFullYear();
    return achievements.filter(achievement => {
      if (!achievement.achievementDate) return false;
      const achievementDate = new Date(achievement.achievementDate);
      return achievementDate.getFullYear() === targetYear;
    });
  }, [achievements]);

  const calculateTrophy = useCallback((achievementCount, period) => {
    let trophyIndex = 0;
    
    if (period === 'day') {
      if (achievementCount === 0) trophyIndex = 0;
      else if (achievementCount <= 2) trophyIndex = Math.min(achievementCount - 1, 19);
      else trophyIndex = Math.min(achievementCount + 1, 19);
    } else if (period === 'month') {
      const weeksInMonth = 4;
      const avgPerWeek = achievementCount / weeksInMonth;
      trophyIndex = Math.min(Math.floor(avgPerWeek * 4), 19);
    } else if (period === 'year') {
      const monthsInYear = 12;
      const avgPerMonth = achievementCount / monthsInYear;
      trophyIndex = Math.min(Math.floor(avgPerMonth * 2), 19);
    }
    
    return trophies[Math.max(0, Math.min(trophyIndex, 19))];
  }, []);

  const getCurrentTrophies = useCallback(() => {
    const today = new Date();
    const dayAchievements = getAchievementsByDay(today);
    const monthAchievements = getAchievementsByMonth(today);
    const yearAchievements = getAchievementsByYear(today);
    
    return {
      day: calculateTrophy(dayAchievements.length, 'day'),
      month: calculateTrophy(monthAchievements.length, 'month'),
      year: calculateTrophy(yearAchievements.length, 'year')
    };
  }, [getAchievementsByDay, getAchievementsByMonth, getAchievementsByYear, calculateTrophy]);

  const navigateDay = useCallback((direction) => {
    const newDate = new Date(currentDay);
    newDate.setDate(newDate.getDate() + direction);
    setCurrentDay(newDate);
  }, [currentDay]);

  const navigateMonth = useCallback((direction) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentMonth(newDate);
  }, [currentMonth]);

  const navigateYear = useCallback((direction) => {
    const newDate = new Date(currentYear);
    newDate.setFullYear(newDate.getFullYear() + direction);
    setCurrentYear(newDate);
  }, [currentYear]);

  const getRandomMotivationalMessage = useCallback(() => {
    return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  }, []);

  return {
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
  };
};