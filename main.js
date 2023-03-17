const headerDiv = document.querySelector('div.lessons-list-timeline__header');
const allDefault = document.querySelectorAll(".lessons-timeline__item-link--default");
const allSuccess = document.querySelectorAll(".lessons-timeline__item-link--success");
const allDanger = document.querySelectorAll(".lessons-timeline__item-link--danger");
const allHolder = document.querySelectorAll("span.lessons-timeline__item-holder");

const lastLesson = +allHolder.item(allHolder.length - 1).textContent;
const lessonsPassed = allDefault.length + allSuccess.length + allDanger.length;
const lessonsLeft = lastLesson - lessonsPassed;

let totalHWs = Array.from(document.querySelectorAll(`app-lesson-header > div.lesson-header-top.ng-star-inserted > app-lesson-badge > span:nth-child(3)`))
  .reduce((acc, element) => acc + (+element.textContent), 0);

let passedHWsNumber = Array.from(document.querySelectorAll("article > header > app-lesson-header > div.lesson-header-top.ng-star-inserted > app-lesson-badge > span:nth-child(1)"))
  .reduce((acc, element) => acc + (+element.textContent), 0);

const toPassHWs = totalHWs - passedHWsNumber;

const headerMod = `
  <div _ngcontent-hillel_lms_server-c218="" class="lessons-list-timeline__header">
    <span>Пройдено занять: ${lessonsPassed}</span>
    <span>Залишилось занять: ${lessonsLeft}</span>
    <span>Здано домашок: ${passedHWsNumber}</span>
    <span>Залишилось здати домашок: ${toPassHWs}</span>
  </div>`;
headerDiv.insertAdjacentHTML('afterend', headerMod);
