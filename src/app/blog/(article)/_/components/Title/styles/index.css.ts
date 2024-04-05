import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const title = css`
  margin: 0 0 20px;
  font-size: 1.5rem;
  background-image: linear-gradient(transparent 70%, var(--color) 70%);
  width: fit-content;
  padding: 0 5px 2px 0;

  ${pc} {
    font-size: 1.8rem;
  }
`;
