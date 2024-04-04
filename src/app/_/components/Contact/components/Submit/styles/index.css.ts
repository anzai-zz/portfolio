import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const submit = css`
  background-color: #cc3b3b;
  color: #fff;
  display: block;
  text-align: center;
  margin: 40px auto 0;
  min-width: min(400px, 100%);
  width: fit-content;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.4rem;
  border: 0;
  cursor: pointer;

  ${pc} {
    padding: 15px;
    margin: 70px auto 0;
  }
`;
