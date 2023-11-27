import React from "react";
import styles from "./Image.module.css";

function Image(props) {
  //{ isVisible, onAddClick, onDeleteClick, onZoomInClick, onZoomOutClick, imgWidth }
  return (
    <div>
      <div className={styles.buttons}>
        <button className={styles.addButton} onClick={props.onAddClick}>
          Додати
        </button>
        <button className={styles.zoomInButton} onClick={props.onZoomInClick}>
          Збільшити
        </button>
        <button className={styles.zoomOutButton} onClick={props.onZoomOutClick}>
          Зменшити
        </button>
        <button className={styles.deleteButton} onClick={props.onDeleteClick}>
          Видалити
        </button>
      </div>

      <div
        className={styles.authorFavCityPhoto}
        style={{ display: props.isVisible ? "block" : "none" }}
      >
        <img
          className={styles.image}
          style={{ width: props.imgWidth + "px" }}
          src="https://i.ibb.co/4tBdCS9/photo-2023-09-07-20-41-49.jpg"
          alt="https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/milan-7.jpg"
        />
      </div>
    </div>
  );
}

export default Image;
