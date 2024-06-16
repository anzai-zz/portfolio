import Image from "next/image";

import type { Metadata } from "next";

import Article from "../_/components/Article";
import P from "../_/components/P";
import Section from "../_/components/Section";
import Title from "../_/components/Title";
import Code from "../_/components/Code";
// import B from "../_/components/B";
import Calendar from "./_/components/Calendar";

import type { TagSlug } from "@_/data/tag";

import * as styles from "./_/styles/page.css";

const id = "grid-calendar";
const title = "カレンダービューはGridで作る";
const tag: TagSlug[] = ["css"];
const color = "#5a7df2";

const update = "2024-04-17";

export default function Page() {
  return (
    <Article id={id} title={title} tag={tag} color={color} update={update}>
      <Calendar />
      <Code language="html" title="HTML">{`
        <h3 class="month">4月</h3>
        <div class="calendar">
          <div class="week">
            <span class="weekDay">日</span>
            <span class="weekDay">月</span>
            <span class="weekDay">火</span>
            <span class="weekDay">水</span>
            <span class="weekDay">木</span>
            <span class="weekDay">金</span>
            <span class="weekDay">土</span>
          </div>
          <div class="days" style="grid-row: 2 / 4">
            <div class="day" style="grid-column-start: 3"><span class="dayNumber">1</span></div>
            <div class="day"><span class="dayNumber">2</span></div>
            <div class="day"><span class="dayNumber">3</span></div>
            <div class="day"><span class="dayNumber">4</span></div>
            <div class="day"><span class="dayNumber">5</span></div>
          </div>
          <div class="events" style="grid-row: 3 / 4">
            <div class="event" style="grid-column: 3 / 5">イベント</div>
            <div class="event" style="grid-column: 3 / 6">イベント</div>
            <div class="event" style="grid-column: 6 / 8">イベント</div>
            <div class="event" style="grid-column: 5 / 6">長い名前のイベント長い名前のイベント</div>
          </div>
          <div class="days" style="grid-row: 4 / 6">
            <div class="day"><span class="dayNumber">6</span></div>
            <div class="day"><span class="dayNumber">7</span></div>
            <div class="day"><span class="dayNumber">8</span></div>
            <div class="day"><span class="dayNumber">9</span></div>
            <div class="day"><span class="dayNumber">10</span></div>
            <div class="day"><span class="dayNumber">11</span></div>
            <div class="day"><span class="dayNumber">12</span></div>
          </div>
          <div class="events" style="grid-row: 5 / 6">
            <div class="event" style="grid-column: 2 / 5">イベント</div>
            <div class="event" style="grid-column: 3 / 6">イベント</div>
            <div class="event" style="grid-column: 5 / 8">イベント</div>
            <div class="event" style="grid-column: 1 / 6">イベント</div>
            <div class="event" style="grid-column: 1 / 2">長い名前のイベント長い名前のイベント</div>
            <div class="event" style="grid-column: 1 / 2">イベント</div>
          </div>
          <div class="days" style="grid-row: 6 / 8">
            <div class="day"><span class="dayNumber">13</span></div>
            <div class="day"><span class="dayNumber">14</span></div>
            <div class="day"><span class="dayNumber">15</span></div>
            <div class="day"><span class="dayNumber">16</span></div>
            <div class="day"><span class="dayNumber">17</span></div>
            <div class="day"><span class="dayNumber">18</span></div>
            <div class="day"><span class="dayNumber">19</span></div>
          </div>
          <div class="events" style="grid-row: 7 / 8">
            <div class="event" style="grid-column: 4 / 5">イベント</div>
            <div class="event" style="grid-column: 2 / 7">イベント</div>
            <div class="event" style="grid-column: 5 / 8">イベント</div>
            <div class="event" style="grid-column: 1 / 3">長い名前のイベント長い名前のイベント長い名前のイベント長い名前のイベント</div>
          </div>
          <div class="days" style="grid-row: 8 / 10">
            <div class="day"><span class="dayNumber">20</span></div>
            <div class="day"><span class="dayNumber">21</span></div>
            <div class="day"><span class="dayNumber">22</span></div>
            <div class="day"><span class="dayNumber">23</span></div>
            <div class="day"><span class="dayNumber">24</span></div>
            <div class="day"><span class="dayNumber">25</span></div>
            <div class="day"><span class="dayNumber">26</span></div>
          </div>
          <div class="events" style="grid-row: 9 / 10">
            <div class="event" style="grid-column: 2 / 5">イベント</div>
            <div class="event" style="grid-column: 3 / 6">イベント</div>
            <div class="event" style="grid-column: 5 / 8">イベント</div>
            <div class="event" style="grid-column: 1 / 8">イベント</div>
          </div>
          <div class="days" style="grid-row: 10 / 12">
            <div class="day"><span class="dayNumber">27</span></div>
            <div class="day"><span class="dayNumber">28</span></div>
            <div class="day"><span class="dayNumber">29</span></div>
            <div class="day"><span class="dayNumber">30</span></div>
            <div class="day"><span class="dayNumber">31</span></div>
          </div>
          <div class="events" style="grid-row: 11 / 12">
            <div class="event" style="grid-column: 2 / 5">イベント</div>
            <div class="event" style="grid-column: 3 / 6">イベント</div>
            <div class="event" style="grid-column: 5 / 6">イベント</div>
            <div class="event" style="grid-column: 5 / 6">イベント</div>
            <div class="event" style="grid-column: 1 / 6">イベント</div>
          </div>
        </div>
      `}</Code>
    </Article>
  );
}

export const metadata: Metadata = { title };
