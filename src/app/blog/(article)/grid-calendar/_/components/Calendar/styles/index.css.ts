import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const calendar = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`

export const week = css`
  grid-column: span 7;
  display: grid;
  grid-template-columns: subgrid;
`;

export const weekDay = css`
  background-color: #ccc;
  text-align: center;
  padding: 10px;
`
