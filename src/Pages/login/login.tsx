import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/custom-hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const {isAuthenticated, login } = useAuth(); 
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = ()=>{
		login(username, password);
		
		setUsername('');
		setPassword('');
		setError('');
	}

	useEffect(()=>{
		if (isAuthenticated) {
			navigate('/'); 
		}
	},[isAuthenticated])

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your Username below to login to your account.
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="UserName">UserName</Label>
					<Input
						id="UserName"
						type="text"
						placeholder="john"
						required
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
			</CardContent>
			<CardFooter className="gap-1">
				<Button  className="w-1/2" onClick={handleLogin}>Sign in</Button>
				<Button className="w-1/2 "  variant="secondary" onClick={()=>{navigate("/")}}>Go to Home page</Button>

			</CardFooter>
		</Card>
	);
};

export default LoginForm;
