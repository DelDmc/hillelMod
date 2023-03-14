const headerDiv = document.querySelector('div.lessons-list-timeline__header');
const allDefault = document.querySelectorAll(".lessons-timeline__item-link--default");
const allSuccess = document.querySelectorAll(".lessons-timeline__item-link--success");
const allDanger = document.querySelectorAll(".lessons-timeline__item-link--danger");
const allHolder = document.querySelectorAll("span.lessons-timeline__item-holder");

const lastLesson = +allHolder.item(allHolder.length -1).textContent;
const lessonsPassed = allDefault.length + allSuccess.length + allDanger.length;
const leftHomeWork = allDanger.length;
const lessonsLeft = lastLesson - lessonsPassed;

const headerMod = `<div _ngcontent-hillel_lms_server-c218="" class="lessons-list-timeline__header">
                    <span>Пройдено занять: ${lessonsPassed}</span>
                    <span>Залишилось занять: ${lessonsLeft}</span>
                    <span>Залишилось здати домашок: ${leftHomeWork}</span>
                  </div>`;
headerDiv.insertAdjacentHTML('afterend', headerMod);
