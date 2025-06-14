import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantsMenu from "../RestaurantsMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockRsMenu.json";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestaurantsMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordians = screen.getByText(
    "Korean Spicy Fest(Limited Time Only) (14)"
  );
  fireEvent.click(accordians);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  const updateCart = screen.getByText("🛒 (1 Items)")
  expect(updateCart).toBeInTheDocument();
  
  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  fireEvent.click(screen.getByRole("button", {name: "Clear cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(14);
  expect(screen.getByText("Your cart item is empty please add some food!!")).toBeInTheDocument();

});
