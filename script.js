// ===== ДАННЫЕ =====
const ideas = [
  { id: 1, name: "AI-помощник для бизнеса", category: "IT", capital: 25000, complexity: "Средняя", potential: "Высокий", rating: 4.8, desc: "Чат-боты и аналитика для малого бизнеса.", why: "Автоматизация продаж.", pros: "Быстрая окупаемость.", cons: "Конкуренция.", how: "Соберите MVP за 3 мес.", risks: "Технические сбои." },
  { id: 2, name: "Доставка здоровой еды", category: "Еда", capital: 18000, complexity: "Средняя", potential: "Средний", rating: 4.2, desc: "Готовые рационы для офисов.", why: "Рост ЗОЖ.", pros: "Постоянные клиенты.", cons: "Логистика.", how: "Начните с кухни.", risks: "Срок годности." },
  { id: 3, name: "Клининг 2.0", category: "Услуги", capital: 8000, complexity: "Низкая", potential: "Высокий", rating: 4.5, desc: "Уборка с эко-средствами.", why: "Спрос на чистоту.", pros: "Низкий порог.", cons: "Много ручного труда.", how: "Закупите инвентарь.", risks: "Травмы." },
  { id: 4, name: "Коворкинг для фрилансеров", category: "Недвижимость", capital: 120000, complexity: "Высокая", potential: "Средний", rating: 3.9, desc: "Пространство с переговорными.", why: "Рост удаленки.", pros: "Долгосрочная аренда.", cons: "Высокая аренда.", how: "Найдите помещение.", risks: "Низкая заполняемость." },
  { id: 5, name: "Производство деревянных игрушек", category: "Производство", capital: 30000, complexity: "Средняя", potential: "Средний", rating: 4.0, desc: "Эко-игрушки ручной работы.", why: "Тренд на натуральное.", pros: "Уникальность.", cons: "Масштабирование.", how: "Мастерская + станки.", risks: "Сезонность." },
  { id: 6, name: "Онлайн-школа английского", category: "Онлайн-бизнес", capital: 15000, complexity: "Низкая", potential: "Высокий", rating: 4.7, desc: "Интерактивные уроки с носителями.", why: "Образование онлайн.", pros: "Масштабируемость.", cons: "Конкуренция.", how: "Платформа Zoom.", risks: "Отток учеников." },
  { id: 7, name: "Франшиза кофейни", category: "Еда", capital: 90000, complexity: "Высокая", potential: "Средний", rating: 3.8, desc: "Готовая бизнес-модель.", why: "Популярность кофе.", pros: "Поддержка.", cons: "Роялти.", how: "Купите франшизу.", risks: "Зависимость." },
  { id: 8, name: "Сервис по ремонту гаджетов", category: "Услуги", capital: 12000, complexity: "Средняя", potential: "Высокий", rating: 4.3, desc: "Ремонт с выездом на дом.", why: "Дорогие устройства.", pros: "Низкий вход.", cons: "Навыки.", how: "Инструменты + реклама.", risks: "Повреждения." },
  { id: 9, name: "Аренда эксклюзивных авто", category: "Услуги", capital: 150000, complexity: "Высокая", potential: "Средний", rating: 3.5, desc: "Прокат премиум-класса.", why: "Статус.", pros: "Высокая маржа.", cons: "Обслуживание.", how: "Парк из 3 авто.", risks: "ДТП." },
  { id: 10, name: "Платформа для наставников", category: "IT", capital: 40000, complexity: "Средняя", potential: "Высокий", rating: 4.6, desc: "Связь менторов и учеников.", why: "Образование.", pros: "Комиссия.", cons: "Доверие.", how: "Сайт + модерация.", risks: "Мошенники." },
  { id: 11, name: "Фудтрак с азиатской кухней", category: "Еда", capital: 22000, complexity: "Средняя", potential: "Средний", rating: 4.1, desc: "Уличная еда в стиле стрит-фуд.", why: "Мобильность.", pros: "Гибкость.", cons: "Погода.", how: "Купите фудтрак.", risks: "Разрешения." },
  { id: 12, name: "Агентство по продвижению в соцсетях", category: "Онлайн-бизнес", capital: 5000, complexity: "Низкая", potential: "Высокий", rating: 4.4, desc: "SMM для малого бизнеса.", why: "Рост соцсетей.", pros: "Низкий старт.", cons: "Креатив.", how: "Портфолио.", risks: "Отток клиентов." },
  { id: 13, name: "Умный дом под ключ", category: "IT", capital: 35000, complexity: "Средняя", potential: "Средний", rating: 3.7, desc: "Интеграция систем умного дома.", why: "Автоматизация.", pros: "Дорого.", cons: "Сложность монтажа.", how: "Обучение.", risks: "Совместимость." },
  { id: 14, name: "Бистро здорового питания", category: "Еда", capital: 28000, complexity: "Средняя", potential: "Высокий", rating: 4.3, desc: "Блюда без глютена и сахара.", why: "Здоровье.", pros: "Целевая аудитория.", cons: "Цены.", how: "Аренда помещения.", risks: "Продукты." },
  { id: 15, name: "Консалтинг для стартапов", category: "Услуги", capital: 2000, complexity: "Низкая", potential: "Средний", rating: 3.9, desc: "Помощь в запуске.", why: "Много стартапов.", pros: "Экспертность.", cons: "Репутация.", how: "Сайт.", risks: "Нестабильность." },
  { id: 16, name: "Студия 3D-печати", category: "Производство", capital: 45000, complexity: "Средняя", potential: "Средний", rating: 4.0, desc: "Печать прототипов и сувениров.", why: "Технологии.", pros: "Индивидуальные заказы.", cons: "Материалы.", how: "Принтеры.", risks: "Поломка." },
  { id: 17, name: "Психологическая онлайн-платформа", category: "Онлайн-бизнес", capital: 20000, complexity: "Средняя", potential: "Высокий", rating: 4.8, desc: "Сессии с психологами.", why: "Рост тревожности.", pros: "Масштаб.", cons: "Сложность подбора.", how: "CRM.", risks: "Этика." },
  { id: 18, name: "Аренда спортивного инвентаря", category: "Услуги", capital: 10000, complexity: "Низкая", potential: "Средний", rating: 3.6, desc: "Велосипеды, лыжи, скейты.", why: "Активный отдых.", pros: "Сезонность.", cons: "Износ.", how: "Закупка.", risks: "Кражи." },
  { id: 19, name: "Мини-пекарня", category: "Еда", capital: 32000, complexity: "Средняя", potential: "Средний", rating: 4.2, desc: "Выпечка на заказ.", why: "Домашний уют.", pros: "Высокая маржа.", cons: "Ранний подъем.", how: "Оборудование.", risks: "Рецепты." },
  { id: 20, name: "Аренда коворкинга для творцов", category: "Недвижимость", capital: 80000, complexity: "Высокая", potential: "Средний", rating: 3.8, desc: "Студии для художников, музыкантов.", why: "Креативная экономика.", pros: "Сообщество.", cons: "Шум.", how: "Ремонт.", risks: "Низкий спрос." }
];

// ===== СОСТОЯНИЕ =====
let favorites = JSON.parse(localStorage.getItem('ideahub_favs')) || [];
let likes = JSON.parse(localStorage.getItem('ideahub_likes')) || {};
let currentFilter = 'all';
let currentSort = 'rating';
let searchTerm = '';
let currentTheme = localStorage.getItem('ideahub_theme') || 'dark';
let currentUser = null;
let viewHistory = JSON.parse(localStorage.getItem('ideahub_history')) || [];
let achievements = JSON.parse(localStorage.getItem('ideahub_achievements')) || [];
let accounts = JSON.parse(localStorage.getItem('ideahub_accounts')) || [];

// ===== DOM =====
const grid = document.getElementById('cardsGrid');
const modalOverlay = document.getElementById('ideaModal');
const modalWindow = document.getElementById('modalWindow');
const modalContent = document.getElementById('modalContent');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const searchInput = document.getElementById('searchInput');
const filterPills = document.querySelectorAll('.filter-pill');
const sortSelect = document.getElementById('sortSelect');
const exploreBtn = document.getElementById('exploreBtn');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userInfo = document.getElementById('userInfo');
const guestActions = document.getElementById('guestActions');
const userName = document.getElementById('userName');
const userAvatar = document.getElementById('userAvatar');
const userAvatarWrapper = document.getElementById('userAvatarWrapper');

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'success') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notif = document.createElement('div');
  notif.className = `notification ${type}`;
  notif.textContent = message;
  document.body.appendChild(notif);

  setTimeout(() => notif.classList.add('show'), 10);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.remove(), 400);
  }, 3000);
}

// ===== АВТОРИЗАЦИЯ (LocalStorage) =====
function getUsers() {
  return JSON.parse(localStorage.getItem('ideahub_users')) || [];
}

function saveUsers(users) {
  localStorage.setItem('ideahub_users', JSON.stringify(users));
}

function getCurrentUser() {
  const saved = localStorage.getItem('ideahub_current_user');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return null;
    }
  }
  return null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('ideahub_current_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('ideahub_current_user');
  }
  currentUser = user;
  updateUI();
}

function signUp(name, email, password) {
  const users = getUsers();
  
  if (users.find(u => u.email === email)) {
    showNotification('Пользователь с таким email уже существует', 'error');
    return false;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    joined: new Date().toISOString(),
    bio: '',
    username: '@' + name.toLowerCase().replace(/\s/g, ''),
    country: '',
    city: '',
    links: '',
    settings: {
      theme: 'dark',
      animations: true,
      blur: true,
      compact: false,
      size: 'medium'
    }
  };
  
  users.push(newUser);
  saveUsers(users);
  
  // Добавляем в список аккаунтов
  if (!accounts.find(a => a.email === email)) {
    accounts.push({ id: newUser.id, name: newUser.name, email: newUser.email });
    localStorage.setItem('ideahub_accounts', JSON.stringify(accounts));
  }
  
  setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });
  showNotification(`Добро пожаловать, ${name}!`);
  return true;
}

function signIn(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    showNotification('Неверный email или пароль', 'error');
    return false;
  }

  setCurrentUser({ id: user.id, name: user.name, email: user.email });
  showNotification(`Добро пожаловать, ${user.name}!`);
  return true;
}

function signOut() {
  setCurrentUser(null);
  showNotification('Вы вышли из аккаунта');
  renderCards();
}

function updateUI() {
  if (currentUser) {
    userInfo.style.display = 'flex';
    guestActions.style.display = 'none';
    userName.textContent = currentUser.name;
    userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
  } else {
    userInfo.style.display = 'none';
    guestActions.style.display = 'flex';
  }
  
  // Обновляем профиль если на странице профиля
  if (window.location.pathname.includes('profile.html')) {
    updateProfilePage();
  }
}

// ===== ИСТОРИЯ ПРОСМОТРОВ =====
function addToHistory(ideaId) {
  const idea = ideas.find(i => i.id === ideaId);
  if (!idea) return;
  
  viewHistory = viewHistory.filter(item => item.id !== ideaId);
  viewHistory.unshift({
    id: ideaId,
    name: idea.name,
    timestamp: new Date().toISOString()
  });
  
  if (viewHistory.length > 50) viewHistory.pop();
  localStorage.setItem('ideahub_history', JSON.stringify(viewHistory));
}

function getHistory() {
  return viewHistory;
}

// ===== ДОСТИЖЕНИЯ =====
function checkAchievements() {
  const newAchievements = [];
  
  // Первые просмотры
  if (viewHistory.length >= 5 && !achievements.find(a => a.id === 'view5')) {
    newAchievements.push({ id: 'view5', icon: '👀', name: 'Любопытный', desc: 'Просмотрено 5 идей' });
  }
  if (viewHistory.length >= 20 && !achievements.find(a => a.id === 'view20')) {
    newAchievements.push({ id: 'view20', icon: '🔍', name: 'Исследователь', desc: 'Просмотрено 20 идей' });
  }
  if (viewHistory.length >= 50 && !achievements.find(a => a.id === 'view50')) {
    newAchievements.push({ id: 'view50', icon: '🧠', name: 'Эксперт', desc: 'Просмотрено 50 идей' });
  }
  
  // Лайки
  const totalLikes = Object.values(likes).reduce((sum, val) => sum + val, 0);
  if (totalLikes >= 1 && !achievements.find(a => a.id === 'like1')) {
    newAchievements.push({ id: 'like1', icon: '❤️', name: 'Первый лайк', desc: 'Поставлен первый лай
