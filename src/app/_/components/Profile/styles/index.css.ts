import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const profile = css`
  display: grid;
  gap: 40px;

  ${pc} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const photo = css`
  aspect-ratio: 1 / 1;
  width: 50%;
  margin: 0 auto;

  ${pc} {
    width: auto;
    margin: 0;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const table = css`
  width: 100%;
  align-self: flex-start;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 15px 20px;

  ${pc} {
    grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
    gap: 25px 10px;
  }
`;

export const tbody = css`
  display: contents;
`;

export const row = css`
  display: contents;
`;

export const head = css`
  text-align: left;
`;

export const detail = css`
`;

export const detailCol3 = css`

  ${pc} {
    grid-column: 2 / 5;
  }
`;

export const skill = css``;

export const skillItem = css`
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 5px;
    aspect-ratio: 1 / 1;
    background-color: #cc3b3b;
    border-radius: 50%;
    flex-shrink: 0;
    margin: 0 5px 0 0;
  }
`;

export const history = css`
`;

export const historyRow = css``;

export const historyHead = css`
  text-align: left;
  vertical-align: top;
  padding: 0 20px 0 0;
`;

export const historyDetail = css`
  vertical-align: top;
`;

export const sns = css`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const snsIcon = css`
  display: block;
  width: 40px;
  background-color: #000;
  padding: 8px;
  border-radius: 5px;
`;

export const snsGitHub = css`
  background-color: #1f2328;
`
