import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const list = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 45px 0 0;

  ${pc} {
    gap: 15px;
    margin: 60px 0 0;
  }
`;