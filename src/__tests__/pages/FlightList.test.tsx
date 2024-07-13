import { render, screen, fireEvent } from "@testing-library/react";
import FlightList from "@/Pages/FlightList/FlightList";
import useFlightUpdates from "@/custom-hooks/useFlightUpdates";
import useAuth from "@/custom-hooks/useAuth";

jest.mock("@/custom-hooks/useFlightUpdates");
jest.mock("@/custom-hooks/useAuth");

const mockUseFlightUpdates = useFlightUpdates as jest.Mock;
const mockUseAuth = useAuth as jest.Mock;

describe("FlightList", () => {
	beforeEach(() => {
		mockUseFlightUpdates.mockReturnValue([
			{
				flightNumber: "AA123",
				origin: "NYC",
				destination: "LAX",
				scheduledDeparture: "2024-07-15T10:00:00Z",
				status: "Scheduled",
				flightType: "Domestic",
			},
		]);
		mockUseAuth.mockReturnValue({ isAuthenticated: true });
	});

	it("should render flight details", () => {
		render(<FlightList />);
		expect(screen.getByText("Flight Number")).toBeInTheDocument();
		expect(screen.getByText("AA123")).toBeInTheDocument();
		expect(screen.getByText("NYC")).toBeInTheDocument();
		expect(screen.getByText("LAX")).toBeInTheDocument();
	});

	it("should filter flights based on search query", () => {
		render(<FlightList />);
		const searchInput = screen.getByPlaceholderText("Search...");
		fireEvent.change(searchInput, { target: { value: "AA123" } });
		expect(screen.getByText("AA123")).toBeInTheDocument();
	});

	it("should update flight status", () => {
		render(<FlightList />);
		const statusButton = screen.getByText("Scheduled");
		fireEvent.click(statusButton);
		expect(screen.getByText("In-flight")).toBeInTheDocument();
	});

	it("should render logout button when authenticated", () => {
		render(<FlightList />);
		expect(screen.getByText("Logout")).toBeInTheDocument();
	});
});
