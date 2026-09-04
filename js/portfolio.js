const ITEMS = [
    { src: "img/camsample1.jpg", cat: "camera" },
    { src: "img/camsample2.jpg", cat: "camera" },
    { src: "img/camsample3.jpg", cat: "camera" },
    { src: "img/camsample4.jpg", cat: "camera" },
    { src: "img/camsample6.jpg", cat: "camera" },
    { src: "img/camsample7.jpg", cat: "camera" },
    { src: "img/camsample8.jpg", cat: "camera" },
    { src: "img/camsample9.jpg", cat: "camera" },
    { src: "img/camsample10.jpg", cat: "camera" },
    { src: "img/camsample11.jpg", cat: "camera" },
    { src: "img/camsample15.jpg", cat: "camera" },
    { src: "img/camsample16.jpeg", cat: "camera" },
    { src: "img/camsample17.jpeg", cat: "camera" },
    { src: "img/camsample18.jpg", cat: "camera" },
    { src: "img/alsample1.jpg", cat: "alarm" },
    { src: "img/alsample2.jpg", cat: "alarm" },
    { src: "img/alsample3.jpg", cat: "alarm" },
    { src: "img/alsample4.jpg", cat: "alarm" },
    { src: "img/alsample5.jpg", cat: "alarm" },
    { src: "img/alsample6.jpg", cat: "alarm" },
    { src: "img/alsample7.jpg", cat: "alarm" },
    { src: "img/alsample8.jpg", cat: "alarm" },
    { src: "img/alsample9.jpg", cat: "alarm" },
    { src: "img/alsample10.jpg", cat: "alarm" },
    { src: "img/alsample11.jpg", cat: "alarm" },
    { src: "img/alsample12.jpg", cat: "alarm" },
];

// دزدگیر
let alarmIndex = 0;
const alarmList = ITEMS.filter(it => it.cat === "alarm");
const alarmImg = document.getElementById("alarm-image");
const alarmCaption = document.getElementById("alarm-caption");
const alarmPrev = document.querySelector("#alarm-carousel .nav.prev");
const alarmNext = document.querySelector("#alarm-carousel .nav.next");

function renderAlarm() {
    const item = alarmList[alarmIndex];
    alarmImg.src = item.src;
    alarmImg.alt = item.title;
    alarmCaption.textContent = item.title;
}
alarmPrev.addEventListener("click", () => {
    alarmIndex = (alarmIndex - 1 + alarmList.length) % alarmList.length;
    renderAlarm();
});
alarmNext.addEventListener("click", () => {
    alarmIndex = (alarmIndex + 1) % alarmList.length;
    renderAlarm();
});
renderAlarm();

// دوربین
let cameraIndex = 0;
const cameraList = ITEMS.filter(it => it.cat === "camera");
const cameraImg = document.getElementById("camera-image");
const cameraCaption = document.getElementById("camera-caption");
const cameraPrev = document.querySelector("#camera-carousel .nav.prev");
const cameraNext = document.querySelector("#camera-carousel .nav.next");

function renderCamera() {
    const item = cameraList[cameraIndex];
    cameraImg.src = item.src;
    cameraImg.alt = item.title;
    cameraCaption.textContent = item.title;
}
cameraPrev.addEventListener("click", () => {
    cameraIndex = (cameraIndex - 1 + cameraList.length) % cameraList.length;
    renderCamera();
});
cameraNext.addEventListener("click", () => {
    cameraIndex = (cameraIndex + 1) % cameraList.length;
    renderCamera();
});
renderCamera();