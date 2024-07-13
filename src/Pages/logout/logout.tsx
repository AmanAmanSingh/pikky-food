import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export function ButtonAsChild() {


	const handleLogout = () => {
		localStorage.setItem("isAuthenticated", "false");
	};
	return (
		<Button variant="secondary" className="float-right	">
			<Link to="/login" onClick={handleLogout}>
				LogOut
			</Link>
		</Button>
	);
}
