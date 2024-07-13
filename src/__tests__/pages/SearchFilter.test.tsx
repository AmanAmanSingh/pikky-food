import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchFilter from "@/Pages/FlightList/SearchFilter";

const mockOnSearch = jest.fn();
const mockOnFilter = jest.fn();

const renderSearchFilter = () => {
	render(<SearchFilter onSearch={mockOnSearch} onFilter={mockOnFilter} />);
};

describe("SearchFilter component", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should render SearchFilter component correctly", () => {
		renderSearchFilter();

		expect(
			screen.getByPlaceholderText(
				"Search by flight number, origin, or destination"
			)
		).toBeInTheDocument();
		expect(screen.getByText("Search")).toBeInTheDocument();
		expect(screen.getByText("Filter")).toBeInTheDocument();
	});

	it("should trigger onSearch callback on search button click", () => {
		renderSearchFilter();

		fireEvent.change(
			screen.getByPlaceholderText(
				"Search by flight number, origin, or destination"
			),
			{
				target: { value: "ABC123" },
			}
		);

		fireEvent.click(screen.getByText("Search"));

		expect(mockOnSearch).toHaveBeenCalledWith("ABC123");
	});

	it("should trigger onFilter callback on filter button click", () => {
		renderSearchFilter();

		fireEvent.change(screen.getByRole("combobox", { name: "airline" }), {
			target: { value: "AA" },
		});

		fireEvent.change(screen.getByRole("combobox", { name: "flightType" }), {
			target: { value: "Commercial" },
		});

		fireEvent.change(screen.getByRole("combobox", { name: "status" }), {
			target: { value: "Scheduled" },
		});

		fireEvent.click(screen.getByText("Filter"));

		expect(mockOnFilter).toHaveBeenCalledWith({
			airline: "AA",
			flightType: "Commercial",
			status: "Scheduled",
		});
	});
});
