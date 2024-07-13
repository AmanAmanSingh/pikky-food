import React, { useEffect, useState } from "react";

interface StatusIndicatorProps {
	status: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {

  const [displayedStatus, setDisplayedStatus] = useState(status);

  useEffect(() => {
    setDisplayedStatus(status);
  }, [status]);


	let statusColor;
	switch (status) {
		case "Scheduled":
			statusColor = "text-blue-500";
			break;
		case "In-flight":
			statusColor = "text-green-500";
			break;
		case "Delayed":
			statusColor = "text-yellow-500";
			break;
		case "Cancelled":
			statusColor = "text-red-500";
			break;
		default:
			statusColor = "text-gray-500";
			break;
	}

	return <span className={`status-indicator ${statusColor}`}>{displayedStatus}</span>
};

export default StatusIndicator;
