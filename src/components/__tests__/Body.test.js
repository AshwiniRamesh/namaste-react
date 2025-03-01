import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Body } from "../Body";
import { UserContext } from "../utils/userContext";
import useOnlineStatus from "../utils/useOnlineStatus";

jest.mock("../../utils/useOnlineStatus", () => jest.fn());
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {
              card: {
                card: {
                  info: {
                    id: "1",
                    name: "Pizza Hut",
                    promoted: true,
                  },
                },
              },
            },
            {
              card: {
                card: {
                  info: {
                    id: "2",
                    name: "Dominos",
                    promoted: false,
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

describe("Body Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render shimmer when loading", async () => {
    useOnlineStatus.mockReturnValue(true);
    render(
      <UserContext.Provider value={{ loggedInUser: "John", setUserName: jest.fn() }}>
        <Body />
      </UserContext.Provider>
    );
    
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    
    await waitFor(() => expect(screen.getByText(/Pizza Hut/i)).toBeInTheDocument());
  });

  test("should render restaurant list after API fetch", async () => {
    useOnlineStatus.mockReturnValue(true);
    render(
      <UserContext.Provider value={{ loggedInUser: "John", setUserName: jest.fn() }}>
        <Body />
      </UserContext.Provider>
    );

    await waitFor(() => expect(screen.getByText("Pizza Hut")).toBeInTheDocument());
    expect(screen.getByText("Dominos")).toBeInTheDocument();
  });

  test("should filter restaurants on search", async () => {
    useOnlineStatus.mockReturnValue(true);
    render(
      <UserContext.Provider value={{ loggedInUser: "John", setUserName: jest.fn() }}>
        <Body />
      </UserContext.Provider>
    );

    await waitFor(() => screen.getByText("Pizza Hut"));

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "Pizza" } });

    fireEvent.click(screen.getByText(/search/i));

    expect(screen.getByText("Pizza Hut")).toBeInTheDocument();
    expect(screen.queryByText("Dominos")).not.toBeInTheDocument();
  });

  test("should update username input", async () => {
    useOnlineStatus.mockReturnValue(true);
    const setUserName = jest.fn();
    
    render(
      <UserContext.Provider value={{ loggedInUser: "John", setUserName }}>
        <Body />
      </UserContext.Provider>
    );

    const userInput = screen.getByLabelText("UserName:");
    fireEvent.change(userInput, { target: { value: "Alice" } });

    expect(setUserName).toHaveBeenCalledWith("Alice");
  });

  test("should show offline message when not connected", () => {
    useOnlineStatus.mockReturnValue(false);
    render(<Body />);

    expect(screen.getByText(/you are offline/i)).toBeInTheDocument();
  });
});
