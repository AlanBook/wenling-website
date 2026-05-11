// ===== 问灵 Wenling Landing Page - JavaScript =====

// 音乐播放列表
const MUSIC_PLAYLIST = [
  { file: 'assets/music/HOYO-MiX - 茗香悠远 The Journey of Tea Leaves.mp3', name: '茗香悠远' },
  { file: 'assets/music/HOYO-MiX - 融风渐暖 Springtide of Qiaoying.mp3', name: '融风渐暖' },
  { file: 'assets/music/HOYO-MiX - 锦彩之梦 Brocade Dreams.mp3', name: '锦彩之梦' },
  { file: 'assets/music/HOYO-MiX - 静夜流觞 Nightcap at Nightfall.mp3', name: '静夜流觞' }
];

// Scroll reveal observer
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // 初始化音乐播放器
  initMusicPlayer();

  // 滚动指示器点击
  initScrollIndicator();
});

// ===== 音乐播放器（多曲播放列表） =====
function initMusicPlayer() {
  const audio = document.getElementById('bgmAudio');
  const player = document.getElementById('musicPlayer');
  const toggle = document.getElementById('musicToggle');
  const trackName = document.getElementById('musicTrackName');
  
  if (!audio || !player || !toggle) return;

  let currentTrack = 0;
  let isPlaying = false;
  let hasInteracted = false;

  // 加载第一首
  function loadTrack(index) {
    currentTrack = index;
    audio.src = MUSIC_PLAYLIST[index].file;
    audio.load();
    if (trackName) {
      trackName.textContent = MUSIC_PLAYLIST[index].name;
    }
  }

  // 切到下一首
  function nextTrack() {
    const next = (currentTrack + 1) % MUSIC_PLAYLIST.length;
    loadTrack(next);
    if (isPlaying) {
      audio.play().catch(() => {});
    }
  }

  // 曲终自动切歌
  audio.addEventListener('ended', nextTrack);

  function play() {
    if (!audio.src) loadTrack(0);
    audio.play().then(() => {
      isPlaying = true;
      player.classList.add('playing');
    }).catch(() => {
      console.log('自动播放被阻止，请点击音乐按钮');
    });
  }

  function pause() {
    audio.pause();
    isPlaying = false;
    player.classList.remove('playing');
  }

  function togglePlay() {
    hasInteracted = true;
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }

  // 按钮点击切换
  toggle.addEventListener('click', togglePlay);

  // 首次用户交互时尝试自动播放
  function tryAutoPlay(e) {
    if (!hasInteracted && !isPlaying) {
      play();
      hasInteracted = true;
    }
  }

  // 监听用户的首次交互
  ['click', 'touchstart', 'scroll'].forEach(evt => {
    document.addEventListener(evt, tryAutoPlay, { once: true });
  });

  // 尝试直接自动播放
  audio.volume = 0.4;
  loadTrack(0);
  play();
}

// ===== 滚动指示器 =====
function initScrollIndicator() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;

  indicator.addEventListener('click', () => {
    const features = document.getElementById('features');
    if (features) {
      features.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
