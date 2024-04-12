import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const title = css`
  text-align: right;
  font-size: 1.6rem;
  margin: 0 0 5px;

  ${pc} {
    font-size: 1.8rem;
  }
`;

export const code = css`
  white-space: pre;
  counter-reset: code;

  ::selection {
    background-color: var(--color);
    color: inherit;
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
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    height: 12px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color);
  }
`;
