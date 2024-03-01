import { render, screen } from "@testing-library/react";
import { Footer } from ".";

jest.mock("../../assets/logo-pb.svg", () => "Logo Image");
jest.mock("../ui/icons/linkedin.svg", () => "Linkedin Icon");
jest.mock("../ui/icons/facebook.svg", () => "Facebook Icon");
jest.mock("../ui/icons/instagram.svg", () =>  "Instagram Icon");

test("renders Footer with logo, company name, social media links", () => {
  render(<Footer />);

  expect(
    screen.getByText(/Juntos Somos Mais Fidelização S.A./i)
  ).toBeInTheDocument();

  expect(screen.getByText(/Siga-nos nas redes sociais:/i)).toBeInTheDocument();

  expect(screen.getAllByRole("img")).toHaveLength(4);
});
