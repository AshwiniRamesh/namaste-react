const { render, screen } = require("@testing-library/react");
import { resturantsList } from "../../utils/sample-resto-data";
import Body from "../Body";
import { BrowserRouter } from 'react-router-dom';

// Mock TextEncoder to avoid ReferenceError
global.TextEncoder = require("util").TextEncoder;

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve({
        statusCode: 0,
        data: {
          cards: resturantsList // Ensure this matches the expected structure
        }
      });
    },
  });
});

it("should render the Body component with search", async () => {
  render(<BrowserRouter><Body /></BrowserRouter>);

  // Wait for the async fetch to complete
  const searchInput = await screen.findByPlaceholderText(/search/i); // Change to how you plan to identify the input
  expect(searchInput).toBeInTheDocument(); // Check if the input is rendered

  // Optionally, check if some restaurant cards are rendered
  const restaurantCards = await screen.findAllByText(/restaurant name/i); // Replace with actual restaurant names or identifiers
  expect(restaurantCards.length).toBeGreaterThan(0); // Ensure at least one card is rendered
});
