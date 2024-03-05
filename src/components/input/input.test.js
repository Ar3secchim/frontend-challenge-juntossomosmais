import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";

jest.mock("../ui/icons/search.svg", () => "Search Icon");

test("renders input field with placeholder, value and search icon", () => {
  const mockSearchChange = jest.fn();
  const mockSearchTerm = "test search";

  render(<Input searchChange={mockSearchChange} searchTerm={mockSearchTerm} />);

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument(1);
  expect(input.placeholder).toBe("Buscar aqui");

  expect(input.value).toBe(mockSearchTerm);

  const searchIcon = screen.getByRole("img");
  expect(searchIcon).toBeInTheDocument(1);
});

test("calls searchChange function on input change", () => {
  const mockSearchChange = jest.fn();

  render(<Input onChangeSearch={mockSearchChange} searchTerm="" />);

  const input = screen.getByPlaceholderText("Buscar aqui");
  console.log(input.value);
  fireEvent.change(input, { target: { value: "search" } });
  console.log(input.value);
  
  expect(mockSearchChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("search");
});
