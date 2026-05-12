// ===== 问灵 Wenling Landing Page - JavaScript =====

// 音乐播放列表（显示全名）
const MUSIC_PLAYLIST = [
  { file: 'assets/music/HOYO-MiX - 丽日逢源 A Nice Day at the Port.mp3', name: '丽日逢源 · A Nice Day at the Port' },
  { file: 'assets/music/HOYO-MiX - 云暖采茶时 Teaplucker\'s Joy.mp3', name: "云暖采茶时 · Teaplucker's Joy" },
  { file: 'assets/music/HOYO-MiX - 云染夕曛轻 Dusk\'s Descent.mp3', name: "云染夕曛轻 · Dusk's Descent" },
  { file: 'assets/music/HOYO-MiX - 况是花繁月正明 Camellia Night.mp3', name: '况是花繁月正明 · Camellia Night' },
  { file: 'assets/music/HOYO-MiX - 半入江风半入云 Through Clouds and Rivers.mp3', name: '半入江风半入云 · Through Clouds and Rivers' },
  { file: 'assets/music/HOYO-MiX - 半枕灵兰落玉机 When the Herb Fades.mp3', name: '半枕灵兰落玉机 · When the Herb Fades' },
  { file: 'assets/music/HOYO-MiX - 名藏仙府 The Absent Hermit.mp3', name: '名藏仙府 · The Absent Hermit' },
  { file: 'assets/music/HOYO-MiX - 埠上风光 What a Delightful Scenery.mp3', name: '埠上风光 · What a Delightful Scenery' },
  { file: 'assets/music/HOYO-MiX - 壶中金匮 Trace of Grace.mp3', name: '壶中金匮 · Trace of Grace' },
  { file: 'assets/music/HOYO-MiX - 山峦的仙语 Whispering Mountains.mp3', name: '山峦的仙语 · Whispering Mountains' },
  { file: 'assets/music/HOYO-MiX - 幽谷舟咏 The Rime of the Ancient Bargeman.mp3', name: '幽谷舟咏 · The Rime of the Ancient Bargeman' },
  { file: 'assets/music/HOYO-MiX - 我心孤云身野鹤 Thoughts Straying as Clouds.mp3', name: '我心孤云身野鹤 · Thoughts Straying as Clouds' },
  { file: 'assets/music/HOYO-MiX - 明月照翠珑 The Jadeite Reflection.mp3', name: '明月照翠珑 · The Jadeite Reflection' },
  { file: 'assets/music/HOYO-MiX - 春尽水如天 Into the Yonder and Water.mp3', name: '春尽水如天 · Into the Yonder and Water' },
  { file: 'assets/music/HOYO-MiX - 曲水如鳞 Her Silhouette.mp3', name: '曲水如鳞 · Her Silhouette' },
  { file: 'assets/music/HOYO-MiX - 村巷欢声 Pleasure of Rural Life.mp3', name: '村巷欢声 · Pleasure of Rural Life' },
  { file: 'assets/music/HOYO-MiX - 松荫白日寒 Isolated Pine.mp3', name: '松荫白日寒 · Isolated Pine' },
  { file: 'assets/music/HOYO-MiX - 沉玉谷渔歌 Chenyu Fisherman\'s Song.mp3', name: "沉玉谷渔歌 · Chenyu Fisherman's Song" },
  { file: 'assets/music/HOYO-MiX - 沉珑的瑶庭 Garden of Jade.mp3', name: '沉珑的瑶庭 · Garden of Jade' },
  { file: 'assets/music/HOYO-MiX - 浮光摇日月 Xuanlian\'s Wavering Light.mp3', name: "浮光摇日月 · Xuanlian's Wavering Light" },
  { file: 'assets/music/HOYO-MiX - 清润玉响 A Mild Tale Untold.mp3', name: '清润玉响 · A Mild Tale Untold' },
  { file: 'assets/music/HOYO-MiX - 清露涟涟 Melody of Morning Dew.mp3', name: '清露涟涟 · Melody of Morning Dew' },
  { file: 'assets/music/HOYO-MiX - 玉磬漻漻 Jade Chimes.mp3', name: '玉磬漻漻 · Jade Chimes' },
  { file: 'assets/music/HOYO-MiX - 玉篆之诗 A Jade-Like Ode.mp3', name: '玉篆之诗 · A Jade-Like Ode' },
  { file: 'assets/music/HOYO-MiX - 王山遗威 Guhua\'s Legacy.mp3', name: "王山遗威 · Guhua's Legacy" },
  { file: 'assets/music/HOYO-MiX - 竹林溪涧 Dweller of Bamboo Groves.mp3', name: '竹林溪涧 · Dweller of Bamboo Groves' },
  { file: 'assets/music/HOYO-MiX - 笑语谐趣 A Jolly Trick.mp3', name: '笑语谐趣 · A Jolly Trick' },
  { file: 'assets/music/HOYO-MiX - 芳草庭闲 Verdant Longings.mp3', name: '芳草庭闲 · Verdant Longings' },
  { file: 'assets/music/HOYO-MiX - 茗香悠远 The Journey of Tea Leaves.mp3', name: '茗香悠远 · The Journey of Tea Leaves' },
  { file: 'assets/music/HOYO-MiX - 蜿蜒的旧忆 Creeks of Nostalgia.mp3', name: '蜿蜒的旧忆 · Creeks of Nostalgia' },
  { file: 'assets/music/HOYO-MiX - 融风渐暖 Springtide of Qiaoying.mp3', name: '融风渐暖 · Springtide of Qiaoying' },
  { file: 'assets/music/HOYO-MiX - 远山笼宿雾 Mountains of Mist.mp3', name: '远山笼宿雾 · Mountains of Mist' },
  { file: 'assets/music/HOYO-MiX - 采药归乡 Herb Gatherer\'s Dream.mp3', name: "采药归乡 · Herb Gatherer's Dream" },
  { file: 'assets/music/HOYO-MiX - 锦彩之梦 Brocade Dreams.mp3', name: '锦彩之梦 · Brocade Dreams' },
  { file: 'assets/music/HOYO-MiX - 锦色映夜风 Night\'s Whispering Breath.mp3', name: "锦色映夜风 · Night's Whispering Breath" },
  { file: 'assets/music/HOYO-MiX - 锦落云升 Fujin\'s Chant.mp3', name: "锦落云升 · Fujin's Chant" },
  { file: 'assets/music/HOYO-MiX - 闲揽九霄云 Retaining Clouds.mp3', name: '闲揽九霄云 · Retaining Clouds' },
  { file: 'assets/music/HOYO-MiX - 陌路春深 On a Remote Trail.mp3', name: '陌路春深 · On a Remote Trail' },
  { file: 'assets/music/HOYO-MiX - 静夜流觞 Nightcap at Nightfall.mp3', name: '静夜流觞 · Nightcap at Nightfall' }
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
  const trackInner = document.getElementById('musicTrackInner');
  
  if (!audio || !player || !toggle) return;

  let currentTrack = 0;
  let isPlaying = false;
  let hasInteracted = false;

  // 加载曲目
  function loadTrack(index) {
    currentTrack = index;
    audio.src = MUSIC_PLAYLIST[index].file;
    audio.load();
    if (trackInner) {
      trackInner.textContent = MUSIC_PLAYLIST[index].name;
    }
    // 延迟一帧检测是否溢出，触发滑动效果
    requestAnimationFrame(() => checkOverflow());
  }

  // 检查文本是否溢出容器，触发滑动动画
  function checkOverflow() {
    if (!trackName || !trackInner) return;
    // 先移除旧动画
    trackInner.classList.remove('scrolling');
    trackInner.style.animation = 'none';
    // 强制重排后检测
    void trackInner.offsetWidth;
    if (trackInner.scrollWidth > trackName.clientWidth) {
      trackInner.classList.add('scrolling');
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

  // 用户首次交互时自动播放
  function tryAutoPlay(e) {
    if (!hasInteracted && !isPlaying) {
      hasInteracted = true;
      play();
    }
  }

  // 点击/触摸时触发首次自动播放
  ['click', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, tryAutoPlay, { once: true });
  });

  // 音量设置
  audio.volume = 0.4;
  loadTrack(0);
  // GitHub Pages 等 HTTPS 环境不允许 autoplay，
  // 等待用户首次点击/触摸页面时自动播放
  console.log('🎵 背景音乐已准备就绪，点击页面任意位置即可播放');
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
