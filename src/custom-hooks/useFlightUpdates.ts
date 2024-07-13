import { useState, useEffect } from "react";
import flightData from "../data/flights.json";
import { Flight } from "../interface/flight";

const useFlightUpdates = (): Flight[] => {
	const [flights, setFlights] = useState<Flight[]>(flightData);

	const [status, setStatus] = useState(["Scheduled", "In-flight", "Delayed"]);

	function genrateNumberBetweenZeroToTwo() {
		let newStatus = Math.floor(Math.random() * 3);
		// console.log(newStatus, "newStatus")
		return newStatus;
	}

	useEffect(() => {
		const intervalId = setTimeout(() => {
			const updatedFlights = flights.map((flight) => {
				if (flight.status === "Scheduled") {
					// console.log("Scheduled")

					return {
						...flight,
						status: status[genrateNumberBetweenZeroToTwo()],
					};
				}

				if (flight.status === "In-flight") {
					// console.log("flight")

					return {
						...flight,
						status: status[genrateNumberBetweenZeroToTwo()],
					};
				}

				if (flight.status === "Delayed") {
					// console.log("Delayed")

					return {
						...flight,
						status: status[genrateNumberBetweenZeroToTwo()],
					};
				}

				if (flight.status === "Cancelled") {
					// console.log("cancel")
					return {
						...flight,
						status: status[genrateNumberBetweenZeroToTwo()],
					};
				}

				return flight;
			});
			setFlights(updatedFlights);
		}, 5000);

		return () => clearTimeout(intervalId);
	}, [flights, genrateNumberBetweenZeroToTwo()]);

	return flights;
};

export default useFlightUpdates;
