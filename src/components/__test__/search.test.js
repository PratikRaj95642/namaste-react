import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search the res list for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  //screening cards before searching
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  // expecting the cards before searching is 20

  expect(cardsBeforeSearch.length).toBe(20);
  // searching button whose ame is Search
  const searchBtn = screen.getByRole("button", { name: "Search" });

  //here we search input box by id name which is searchInput
  const searchInput = screen.getByTestId("searchInput");

  // here we apply the fire event of changing the rescard by searching it on webpage by burger
  fireEvent.change(searchInput, { target: { value: "burger" } });

  // here we apply the fire event of clicking on searchBtn
  fireEvent.click(searchBtn);

  //after all these things we have to screening the resCard by id
  const cardsAfterSearching = screen.getAllByTestId("resCard");

  //   now we expect the output
  expect(cardsAfterSearching.length).toBe(1);
});

it("should filter the res list ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Resturant"});
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(11); 
});
