import { render, fireEvent } from "@testing-library/react";

import TechList from "~/components/TechList";

describe("TechList component", () => {
  it("should be able to add new tech", () => {
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.click(getByText("Adicionar"));

    expect();
  });
});
