import { css } from "@linaria/core";

export const title = css`
  text-align: right;
  font-size: 1.8rem;
  margin: 0 0 5px;
`;

export const code = css`
  white-space: pre-wrap;
  counter-reset: code;

  ::selection {
    background-color: var(--color); 
  }
`;

export const item = css`
  min-height: calc(1lh + 10px);
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 15px;
  font-size: 1.4rem;

  &::before {
    content: counter(code);
    counter-increment: code;
    display: grid;
    place-items: center;
    font-size: 1.4rem;
  }

  &:nth-of-type(2n+1) {
    background-color: color-mix(in srgb, var(--color) 30%, transparent);

    &::before {
      background-color: var(--color);
    }
  }

  &:nth-of-type(2n) {
    background-color: color-mix(in srgb, var(--color) 15%, transparent);

    &::before {
      background-color: color-mix(in srgb, var(--color) 50%, transparent);
    }
  }
`;

export const text = css`
  padding: 5px 15px 5px 0;
`;
