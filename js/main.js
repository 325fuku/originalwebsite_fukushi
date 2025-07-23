// モバイルメニュー
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.global-nav ul');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));

// 動画スライダー（簡易版）
const prev = document.querySelector('.video-slider .prev');
const next = document.querySelector('.video-slider .next');
const videos = document.querySelector('.video-slider .videos');

next?.addEventListener('click', () => videos.scrollBy({ left: 320, behavior: 'smooth' }));
prev?.addEventListener('click', () => videos.scrollBy({ left: -320, behavior: 'smooth' }));
