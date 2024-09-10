var swiper;

document.addEventListener("DOMContentLoaded", function () {
  swiper = new Swiper(".swiper-container", {
    slidesPerView: 3, // 显示3张幻灯片
    spaceBetween: 10, // 幻灯片之间的间距
    loop: true, // 启用无限循环模式
    autoplay: {
      delay: 3000, // 3秒自动切换
      disableOnInteraction: false, // 用户交互后继续自动播放
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".paddlenav-arrow-next",
    //   prevEl: ".paddlenav-arrow-prev",
    // },
  });
});

function toggleSwiperAutoplay(swiperInstance) {
  const playPauseBtn = document.querySelector(".play-pause");
  if (playPauseBtn.textContent === "▶") {
    swiperInstance.autoplay.start();
    playPauseBtn.textContent = "||";
  } else {
    swiperInstance.autoplay.stop();
    playPauseBtn.textContent = "▶";
  }
}

var langData = {
  "zh-Hans-CN": {
    appTitle: "Pap.er - 专为 Mac 设计的壁纸应用",
    appDescription: "每天享受来自全球新鲜精美的壁纸",
    masLinkText: "Mac App Store 下载",
    directLinkText: "直接下载",
    contactLinkText: "联系我们",
    updateLinkText: "更新旧版 macOS",
    changelogsTitle: "更新说明)：",
    changelogs: [
      "需要 macOS 11 Big Sur 或更高系统版本；",
      "已兼容 Apple M1、M2 芯片；",
      "若仍在使用旧版 macOS，请下载页面底部的 v3.6 版本。",
    ],
  },
  "zh-Hant": {
    appTitle: "Pap.er - 專為 Mac 設計的桌布應用",
    appDescription: "每天享受來自全球新鮮精美的桌布",
    masLinkText: "從 Mac App Store 獲取",
    directLinkText: "直接下載",
    contactLinkText: "給我們發郵件",
    changelogsTitle: "更新說明",
    changelogs: [
      "需要 macOS 11 Big Sur 或更高系統版本；",
      "已兼容 Apple M1、M2 系列；",
      "若仍在使用舊版 macOS，請下載頁面底部的 v3.6 版本。",
    ],
  },
  en: {
    appTitle: "Pap.er - Elegant Wallpaper App for macOS.",
    appDescription: "Deliver fresh and stunning wallpapers everyday.",
    masLinkText: "Mac App Store",
    directLinkText: "Download",
    contactLinkText: "Contact us",
    changelogsTitle: "Changelog",
    changelogs: [
      "Requirements: macOS 11 Big Sur or later. ",
      "Now compatible on both Apple Silicon (M1, M2 etc) as well as macOS 12 Monterey.",
      "For macOS 10.15, please check the v3.6 version from the bottom of the page.",
    ],
  },
};

// 初始化页面文本
function initializePageContent(selectedLanguage) {
  document.getElementById("app-title").textContent =
    langData[selectedLanguage].appTitle;
  document.getElementById("app-description").textContent =
    langData[selectedLanguage].appDescription;
  // document.getElementById("changelogs-title").textContent =
  //   langData[selectedLanguage].changelogsTitle;
  // document.getElementById("mas-link").textContent =
  //   langData[selectedLanguage].masLinkText;
  // document.getElementById("direct-link").textContent =
  //   langData[selectedLanguage].directLinkText;
  // document.getElementById("contact-link").textContent =
  //   langData[selectedLanguage].contactLinkText;

  // var changelogsList = document.getElementById("changelogs-list");
  // changelogsList.innerHTML = "";

  // langData[selectedLanguage].changelogs.forEach(function (item) {
  //   var li = document.createElement("li");
  //   li.textContent = item;
  //   changelogsList.appendChild(li);
  // });
}

// 初始化页面文本为默认语言（例如，中文简体）
initializePageContent("zh-Hans-CN");

// 点击触发多语言切换功能
function changeLanguage(selectedLanguage) {
  initializePageContent(selectedLanguage);
}

// 动态设置版权年份
// document.addEventListener("DOMContentLoaded", function () {
//   const year = new Date().getFullYear();
//   document.querySelector(".footer p").textContent = `© ${year} pap.er`;
// });
