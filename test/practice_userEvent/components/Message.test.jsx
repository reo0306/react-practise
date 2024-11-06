import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('Messageコンポーネントの動作確認', () => {
    describe('初期表示の正常確認', () => {
        test('input要素が表示されていること', () => {
            render(<Message />);

            const inputEl = screen.getByRole('textbox');
            expect(inputEl).toBeInTheDocument();
        })
    })

    describe('画面操作正常確認', () => {
        test('input要素に値をいれると正しく値が更新されていること', async () => {
            const user = userEvent.setup();

            render(<Message />);

            const inputEl = screen.getByRole('textbox');

            await user.type(inputEl, 'こんばんわ');

            expect(inputEl.value).toBe("こんばんわ");
        })
    })
})