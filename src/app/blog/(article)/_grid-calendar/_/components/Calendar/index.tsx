import * as styles from "./styles/index.css";

export default function Calendar() {
  return (
    <>
      <h3 className={styles.month}>4月</h3>
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
        <div className={styles.days} style={{ gridRow: "2 / 4" }}>
          <div className={styles.day} style={{ gridColumnStart: 3 }}>
            <span className={styles.dayNumber}>1</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>2</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>3</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>4</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>5</span>
          </div>
        </div>
        <div className={styles.events} style={{ gridRow: "3 / 4" }}>
          <div className={styles.event} style={{ gridColumn: "3 / 5" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "3 / 6" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "6 / 8" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "5 / 6" }}>
            長い名前のイベント長い名前のイベント
          </div>
        </div>
        <div className={styles.days} style={{ gridRow: "4 / 6" }}>
          <div className={styles.day}>
            <span className={styles.dayNumber}>6</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>7</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>8</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>9</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>10</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>11</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>12</span>
          </div>
        </div>
        <div className={styles.events} style={{ gridRow: "5 / 6" }}>
          <div className={styles.event} style={{ gridColumn: "2 / 5" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "3 / 6" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "5 / 8" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "1 / 6" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "1 / 2" }}>
            長い名前のイベント長い名前のイベント
          </div>
          <div className={styles.event} style={{ gridColumn: "1 / 2" }}>
            イベント
          </div>
        </div>
        <div className={styles.days} style={{ gridRow: "6 / 8" }}>
          <div className={styles.day}>
            <span className={styles.dayNumber}>13</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>14</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>15</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>16</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>17</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>18</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>19</span>
          </div>
        </div>
        <div className={styles.events} style={{ gridRow: "7 / 8" }}>
          <div className={styles.event} style={{ gridColumn: "4 / 5" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "2 / 7" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "5 / 8" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "1 / 3" }}>
            長い名前のイベント長い名前のイベント長い名前のイベント長い名前のイベント
          </div>
        </div>
        <div className={styles.days} style={{ gridRow: "8 / 10" }}>
          <div className={styles.day}>
            <span className={styles.dayNumber}>20</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>21</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>22</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>23</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>24</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>25</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>26</span>
          </div>
        </div>
        <div className={styles.events} style={{ gridRow: "9 / 10" }}>
          <div className={styles.event} style={{ gridColumn: "2 / 5" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "3 / 6" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "5 / 8" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "1 / 8" }}>
            イベント
          </div>
        </div>
        <div className={styles.days} style={{ gridRow: "10 / 12" }}>
          <div className={styles.day}>
            <span className={styles.dayNumber}>27</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>28</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>29</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>30</span>
          </div>
          <div className={styles.day}>
            <span className={styles.dayNumber}>31</span>
          </div>
        </div>
        <div className={styles.events} style={{ gridRow: "11 / 12" }}>
          <div className={styles.event} style={{ gridColumn: "2 / 5" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "3 / 6" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "5 / 6" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "5 / 6" }}>
            イベント
          </div>
          <div className={styles.event} style={{ gridColumn: "1 / 6" }}>
            イベント
          </div>
        </div>
      </div>
    </>
  );
}
