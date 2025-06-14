import { render, screen } from "@testing-library/react"
import ResturantCart from "../ResturantCart"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render Restaurantcard component with prop data", () => {
    render(<ResturantCart resData={MOCK_DATA}/>);

   const name = screen.getByText("KFC");
   expect(name).toBeInTheDocument();
});