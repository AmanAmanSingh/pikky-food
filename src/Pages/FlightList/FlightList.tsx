import React, { useEffect, useState } from "react";
import { Flight } from "../../interface/flight";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import StatusIndicator from "./StatusIndicator";
import ManualControl from "./ManualControl";
import useFlightUpdates from "../../custom-hooks/useFlightUpdates";
import SearchFilter from "./SearchFilter";
import { ButtonAsChild } from "../logout/logout";
import useAuth from "@/custom-hooks/useAuth";

interface FilterOptions {
	airline?: string;
	flightType?: string;
	status?: string;
	query?: string;
}

const FlightList: React.FC = () => {
	const flights = useFlightUpdates();
	const [filteredFlights, setFilteredFlights] = useState<Flight[]>(flights);
	const [filters, setFilters] = useState<FilterOptions>({});
	const { isAuthenticated } = useAuth();

	//handle search based on query
	const handleSearch = (query: string) => {
		const lowerQuery = query.toLowerCase();
		const result = flights.filter(
			(flight) =>
				flight.flightNumber.toLowerCase().includes(lowerQuery) ||
				flight.origin.toLowerCase().includes(lowerQuery) ||
				flight.destination.toLowerCase().includes(lowerQuery)
		);
		setFilteredFlights(result);
		setFilters({ ...filters, query });
	};

	//handle filter based on options
	const handleFilter = (filters: FilterOptions) => {
		setFilters(filters);
	};

	// Effect to filter flights based on changes in flights or filters
	useEffect(() => {
		let result = flights;

		if (filters.airline) {
			result = result.filter((flight) =>
				flight.flightNumber.startsWith(filters.airline || "")
			);
		}
		if (filters.flightType) {
			result = result.filter(
				(flight) => flight.flightType === filters.flightType
			);
		}
		if (filters.status) {
			result = result.filter(
				(flight) => flight.status === filters.status
			);
		}
		if (filters.query) {
			const lowerQuery = filters.query.toLowerCase();
			result = result.filter(
				(flight) =>
					flight.flightNumber.toLowerCase().includes(lowerQuery) ||
					flight.origin.toLowerCase().includes(lowerQuery) ||
					flight.destination.toLowerCase().includes(lowerQuery)
			);
		}

		setFilteredFlights(result);
	}, [flights, filters]);

	// Function to update flight status
	const handleUpdateStatus = (updatedFlight: Flight, newStatus: string) => {
		const updatedFlights = filteredFlights.map((flight) =>
			flight.flightNumber === updatedFlight.flightNumber
				? { ...flight, status: newStatus }
				: flight
		);
		setFilteredFlights(updatedFlights);
	};

	return (
		<div className="p-4 w-full h-full">
			{isAuthenticated && <ButtonAsChild />}
			<h1 className="text-2xl font-bold mb-4">Flight List</h1>
			<SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
			<div className="max-h-96 overflow-y-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableCell className="font-bold">
								Flight Number
							</TableCell>
							<TableCell className="font-bold">Origin</TableCell>
							<TableCell className="font-bold">
								Destination
							</TableCell>
							<TableCell className="font-bold">
								Scheduled Departure
							</TableCell>
							<TableCell className="font-bold">Status</TableCell>
							<TableCell className="font-bold">Actions</TableCell>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredFlights.map((flight: Flight) => (
							<TableRow key={flight.flightNumber}>
								<TableCell>{flight.flightNumber}</TableCell>
								<TableCell>{flight.origin}</TableCell>
								<TableCell>{flight.destination}</TableCell>
								<TableCell>
									{new Date(
										flight.scheduledDeparture
									).toLocaleString()}
								</TableCell>
								<TableCell className="status-cell">
									<StatusIndicator status={flight.status} />
								</TableCell>
								<TableCell>
									<ManualControl
										flight={flight}
										onUpdateStatus={handleUpdateStatus}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default FlightList;
