import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Test from ".";

describe("Testコンポーネント", () => {
  it("buttonRoleテスト", () => {
    render(<Test />);

    const role = screen.getByRole("button");
    expect(role).toBeInTheDocument();
  });

  it("text表示テスト", () => {
    render(<Test />);

    const text = screen.getByText(/ボタンだよ$/);
    screen.debug(text);
    expect(text).toBeInTheDocument();
  });

  it("カウント計測テスト", () => {
    render(<Test />);

    const onButtonElement = screen.getByRole("button");
    screen.debug(onButtonElement);

    fireEvent.click(onButtonElement);
    fireEvent.click(onButtonElement);
    fireEvent.click(onButtonElement);

    expect(onButtonElement.textContent).not.toBe("1ボタンだよ");
    expect(onButtonElement.textContent).toBe("3ボタンだよ");
  });
});
