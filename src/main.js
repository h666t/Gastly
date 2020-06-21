import cssString from "./style.js";
const $text = $("#text");
const $style = $("<style>");
//实际使用的css,用于插入到head中
let i = 0;
//与cssString比较，用于substring(0, i)
let t;
//用于命名setTimeout 以便进行clearTimeout
let k = false;
//用于判断是否在播放，若在播放，再点击则播放无效 默认false 播放时为true
let time = 50;

const player = {
  init: () => {
    $("head").append($style);
    gsap.to("#turbulence", {
      duration: 12,
      repeat: -1,
      ease: "linear",
      attr: {
        baseFrequency: 0.01,
      },
    });
    player.run();
    player.blindEvents();
  },

  hash: {
    ".stop": "pause",
    ".continue": "continue",
    ".slow": "slow",
    ".normal": "normal",
    ".fast": "fast",
  },

  blindEvents: () => {
    for (let key in player["hash"]) {
      if (player.hash.hasOwnProperty(key)) {
        const value = player.hash[key];
        $(`${key}`).on("click", player[value]);
      }
    }
  },

  run: () => {
    $text[0].innerText = cssString.substring(0, i);
    $style[0].innerHTML = cssString.substring(0, i);
    i++;
    //往textDiv和head中写css
    k = true;
    $("#textDiv")[0].scrollTop = $("#textDiv")[0].scrollHeight;
    //往下滚动
    i < cssString.length
      ? (t = setTimeout(player.run, time))
      : //cssString没读完就继续读
        ($text[0].innerHTML = cssString);
    //cssString读完了就一直显示cssString，防止点击播放出现undefined
  },
  //使用setTimeout模拟setInterval 播放动画

  pause: () => {
    clearTimeout(t);
    k = false;
  },

  continue: () => {
    k ? undefined : player.run();
  },

  slow: () => {
    player.pause();
    time = 100;
    player.run();
  },

  normal: () => {
    player.pause();
    time = 50;
    player.run();
  },

  fast: () => {
    player.pause();
    time = 0;
    player.run();
  },
};
player.init();
