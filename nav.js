// ===============================
// 心灯ナビゲーション共通スクリプト
// ===============================
function kokorobiNav(active) {
  const links = [
    { id: 'home', label: '🌕 心灯フォーチュン', url: 'https://kokorobi-project.vercel.app' },
    { id: 'books', label: '📖 心灯ブックス', url: 'https://kokorobi-books.vercel.app' },
    { id: 'gallery', label: '🌌 ギャラリー井門', url: 'https://open-imon.vercel.app' }
  ];

  const navItems = links
    .map(l => `
      <a href="${l.url}" class="kb-nav-item ${l.id === active ? 'active' : ''}">
        ${l.label}
      </a>
    `)
    .join('');

  return `
  <nav class="kb-nav">
    ${navItems}
  </nav>
  <style>
    .kb-nav {
      display:flex;
      justify-content:center;
      align-items:center;
      gap:1.2em;
      background:rgba(255,255,255,.05);
      border-bottom:1px solid rgba(255,255,255,.08);
      padding:10px 12px;
      flex-wrap:wrap;
    }
    .kb-nav-item {
      color:#ffd780;
      text-decoration:none;
      font-size:15px;
      letter-spacing:.05em;
      transition:.25s;
    }
    .kb-nav-item:hover {
      color:#fff3d0;
    }
    .kb-nav-item.active {
      color:#fff;
      font-weight:600;
      border-bottom:2px solid #ffd780;
      padding-bottom:2px;
    }
  </style>
  `;
}

// グローバル公開（これが重要！）
window.kokorobiNav = kokorobiNav;
