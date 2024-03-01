import { render, screen } from "@testing-library/react";
import { Header } from ".";

jest.mock("../../assets/logo.svg", () => "Logo Image");

test("renders header with logo and two gray bars", () => {
  render(<Header />);

  const logo = screen.getByRole("img");
  expect(logo).toBeInTheDocument();

  expect(screen.getByText(/vector a/i)).toBeInTheDocument();
  expect(screen.getByText(/vector b/i)).toBeInTheDocument();
});

test("renders header with children content", () => {
  const content = <p>Content test</p>;
  render(<Header>{content}</Header>);

  expect(screen.getByText(/Content test/i)).toBeInTheDocument();
});
