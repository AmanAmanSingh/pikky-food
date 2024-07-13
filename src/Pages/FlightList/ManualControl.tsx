import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Flight } from "../../interface/flight";
import { useNavigate } from "react-router-dom";

interface ManualControlProps {
    flight: Flight;
    onUpdateStatus: (flight: Flight, newStatus: string) => void;

}

const ManualControl: React.FC<ManualControlProps> = ({ flight , onUpdateStatus }) => {

    const [newStatus, setNewStatus] = useState(flight.status);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate();

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNewStatus(event.target.value);
    };

    const handleSave = () => {
        if (localStorage.getItem('isAuthenticated') !== 'true') {
            navigate('/login');
            return;
        }
        onUpdateStatus(flight, newStatus); 
        setIsDialogOpen(false);
    };

    return (
        <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <Button onClick={() => setIsDialogOpen(true)}>Update Status</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Update Flight Status</DialogTitle>
                    <DialogDescription>
                        Update the status of flight {flight.flightNumber}
                    </DialogDescription>
                    <select
                        value={newStatus}
                        onChange={handleStatusChange}
                        className="rounded-md p-2 bg-white dark:bg-card text-black dark:text-card-foreground"
                        style={{ zIndex: 9999 }}
                    >
                        <option value="Scheduled">Scheduled</option>
                        <option value="In-flight">In-flight</option>
                        <option value="Delayed">Delayed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                    <DialogFooter>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ManualControl;
