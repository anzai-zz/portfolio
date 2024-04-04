import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const more = css`
  background-color: #cc3b3b;
  color: #fff;
  display: block;
  text-align: center;
  margin: 20px auto 0;
  min-width: min(400px, 100%); 
  width: fit-content;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.4rem;

  ${pc} {
    margin: 40px auto 0;
    padding: 15px;
  }
`;
