

import * as styles from "./styles/index.css"

export default function Calendar() {

  return (
    <>
      <div>
        4月
      </div>
      <div className={styles.calendar}>
        <div className={styles.week}>
          <span className={styles.weekDay}>日</span>
          <span className={styles.weekDay}>月</span>
          <span className={styles.weekDay}>火</span>
          <span className={styles.weekDay}>水</span>
          <span className={styles.weekDay}>木</span>
          <span className={styles.weekDay}>金</span>
          <span className={styles.weekDay}>土</span>
        </div>
      </div>
    </>
  );
}