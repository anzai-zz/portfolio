import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const title = css`
  font-size: 1.6rem;
  text-align: center;
  margin: 0 0 25px;
  text-transform: capitalize;

  ${pc} {
    font-size: 2.5rem;
    margin: 0 0 40px;
  }
`;
