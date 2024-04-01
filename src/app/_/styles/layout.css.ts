import { css } from "@linaria/core";

export const body = css`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100svh;
`;

export const main = css`
  max-width: 1050px;
  margin: 0 auto 100px;
  padding-inline: 25px;
  width: 100%;
`;
