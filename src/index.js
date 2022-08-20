const item = [
  "1 삼성",
  "2 나이키",
  "3 투썸",
  "4 베스킨",
  "5 빽다방",
  "6 캐시",
  "7 상품권",
  "8 공차",
  "9 맘터",
];
let current = 0;
let result = 0;

const rRandom = () => {
  var min = 4680;
  var max = 5400;
  return Math.floor(Math.random() * (max - min)) + min;
};

const rRotate = () => {
  var panel = document.querySelector(".rouletter-wacu");
  var btn = document.querySelector(".rouletter-btn");

  btn.disabled = true; //button,input
  btn.style.pointerEvents = "none";

  const randomAmount = rRandom();
  current += randomAmount;

  panel.style.transform = "rotate(" + current + "deg)"; //랜덤숫자로 멈춤
};

document.addEventListener("click", function (e) {
  var target = e.target;
  if (target.tagName === "BUTTON") {
    rRotate();

    // 잔여초 이후 버튼활성화
    setTimeout(() => {
      target.disabled = false;
      target.style.pointerEvents = "auto";
      x;

      result = current % 360;
      // const get = (result + 30) / 60; // item.length 바뀌면 바뀌어야함
      // item.length = 6
      // seg = 60 = 360 / 6 = 360 / item.length
      // 30 = seg / 2
      const seg = 360 / item.length;
      const get = ((result + seg / 2) / seg) % item.length;
      // console.log("이벤트가 끝남: ", get);
      const getInt = parseInt(get);
      console.log(get, getInt, result);
      console.log("이벤트가 끝남: ", item[getInt]);
    }, 2100);
  }
});
