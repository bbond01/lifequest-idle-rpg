// js/router.js

function navigate(page) {
  switch (page) {
    case 'tasks':
      window.location.href = 'pages/tasks.html';
      break;

    case 'heroes':
      window.location.href = 'pages/heroes.html';
      break;

    case 'summon':
      window.location.href = 'pages/summon.html';
      break;

    case 'battle':
      window.location.href = 'pages/battle.html';
      break;

    case 'inventory':   // ← NEW
      window.location.href = 'pages/inventory.html';
      break;

    default:
      console.warn("Unknown page:", page);
  }
}
