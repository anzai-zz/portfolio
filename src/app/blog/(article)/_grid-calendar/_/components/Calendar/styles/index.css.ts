import { css } from "@linaria/core";

// import { pc } from "@_/styles/mediaquery";

export const month = css`
  margin: 0 0 20px;
  text-align: center;
  font-size: 2rem;
`;

export const calendar = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

export const week = css`
  grid-column: span 7;
  display: grid;
  grid-template-columns: subgrid;
`;

export const weekDay = css`
  background-color: #ccc;
  text-align: center;
  padding: 10px;
`;

export const days = css`
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  grid-column: 1 / 8;
`;

export const day = css`
  background-color: #eee;
  padding: 10px;
  grid-row: span 2;
  display: grid;
  grid-template-rows: subgrid;
`;

export const dayNumber = css`
  display: block;
  text-align: center;
`;

export const events = css`
  display: grid;
  grid-template-columns: subgrid;
  gap: 10px;
  grid-auto-flow: dense;
  grid-column: 1 / 8;
  padding: 0 0 15px;
`;

export const event = css`
  background-color: #5a7df2;
  color: #fff;
  padding: 5px;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
