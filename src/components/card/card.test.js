import { render, screen } from "@testing-library/react";
import { Card } from "./index";

test("renders card with name, last name, address and city", () => {
  const mockProps = {
    name: "John",
    lastName: "Doe",
    adress: "123 Main St",
    adressCep: "12345-678",
    city: "Anytown",
    state: "CA",
    profile: "https://example.com/profile.jpg",
  };

  render(
    <Card
      name={mockProps.name}
      lastName={mockProps.lastName}
      adress={mockProps.adress}
      adressCep={mockProps.adressCep}
      city={mockProps.city}
      state={mockProps.state}
      profile={mockProps.profile}
    />
  );

  const image = screen.getByRole("img");
  expect(image.src).toBe(mockProps.profile);

  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Main St, 123/i)).toBeInTheDocument();
  expect(screen.getByText(/Anytown/i)).toBeInTheDocument();
  expect(screen.getByText(/CA - CEP: 12345-678/i)).toBeInTheDocument();
});
