const headerDiv = document.querySelector('div.lessons-list-timeline__header');
const defaultElements = document.querySelectorAll(".lessons-timeline__item-link--default");
const successElements = document.querySelectorAll(".lessons-timeline__item-link--success");
const warningElements = document.querySelectorAll(".lessons-timeline__item-link--warning");
const dangerElements = document.querySelectorAll(".lessons-timeline__item-link--danger");
const holderElements = document.querySelectorAll("span.lessons-timeline__item-holder");
const HWElements = document.querySelectorAll(`app-lesson-header > div.lesson-header-top.ng-star-inserted > app-lesson-badge > span:nth-child(3)`);
const PassedHWsElements = document.querySelectorAll("article > header > app-lesson-header > div.lesson-header-top.ng-star-inserted > app-lesson-badge > span:nth-child(1)");

const lastLesson = +holderElements.item(holderElements.length - 1).textContent;
const lessonsPassed = defaultElements.length + successElements.length + warningElements.length + dangerElements.length;
const lessonsLeft = lastLesson - lessonsPassed;
const totalHWs = Array.from(HWElements).reduce((acc, element) => acc + (+element.textContent), 0);
const passedHWsNumber = Array.from(PassedHWsElements).reduce((acc, element) => acc + (+element.textContent), 0);
const toPassHWS = totalHWs - passedHWsNumber;

const headerMod = `
  <div _ngcontent-hillel_lms_server-c218="" class="lessons-list-timeline__header">
    <span>Пройдено занять: ${lessonsPassed}</span>
    <span>Залишилось занять: ${lessonsLeft}</span>
    <span>Здано домашок: ${passedHWsNumber}</span>
    <span>Залишилось здати домашок: ${toPassHWS}</span>
  </div>`;
headerDiv.insertAdjacentHTML('afterend', headerMod);
