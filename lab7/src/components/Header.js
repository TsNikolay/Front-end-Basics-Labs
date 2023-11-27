import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.authorInfo}>
        <div className={styles.authorName}>
          <h2>Царик Микола Миколайович</h2>
        </div>
        <div className={styles.authorBirthday}>
          <p>Місце народження: 21.08.2004, м.Чернігів</p>
        </div>
        <div className={styles.authorSecondaryEdu}>
          <p>Освіта: Чернігівська загальноосвітня школа I-III ступенів №3</p>
        </div>
        <div className={styles.authorHigherEdu}>
          <p>
            Національний технічний університет України "Київський політехнічний
            інститут імені Ігоря Сікорського"
          </p>
        </div>
      </div>

      <div className={styles.authorHobbies}>
        <p id="hobbies">Хоббі:</p>
        <ul>
          <li>Відеоігри</li>
          <li>Програмування</li>
          <li>Футбол</li>
        </ul>
      </div>
      <div className={styles.authorMovies}>
        <p>Улюблені фільми:</p>
        <ol>
          <li>Володар перснів</li>
          <li>Пірати карибського моря</li>
          <li>Вовк с Уолл-стріт</li>
        </ol>
      </div>
      <div className={styles.authorFavCity}>
        <p>
          Мілан - це італійське місто, яке славиться своєю багатою історією,
          модою та мистецтвом. Він є фінансовим та модним центром Італії, а
          також будинком для таких знаменитих пам'яток, як собор Дуомо, картинна
          галерея "Пінакотека Брера" та театр "Ла Скала". Мілан також відомий
          своїми вишуканими ресторанами та магазинами, роблячи його популярним
          напрямком для шопінгу та культурного відпочинку.
        </p>
      </div>
    </div>
  );
}

export default Header;
