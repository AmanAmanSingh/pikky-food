import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: { airline?: string; flightType?: string; status?: string }) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ airline: "", flightType: "", status: "" });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="mb-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Search by flight number, origin, or destination"
          value={query}
          onChange={handleSearchChange}
          className="flex-1"
        />
        <Button onClick={() => onSearch(query)}>Search</Button>
      </div>
      <div className="flex space-x-2 mt-2">
        <select
          name="airline"
          value={filters.airline}
          onChange={handleFilterChange}
          className="rounded-md	 p-2 bg-white dark:bg-card text-black dark:text-card-foreground"
        >
          <option value="">All Airlines</option>
          <option value="AA">American Airlines</option>
          <option value="BA">British Airways</option>
          <option value="CA">China Airlines</option>
        </select>
        <select
          name="flightType"
          value={filters.flightType}
          onChange={handleFilterChange}
          className="rounded-md	 p-2 bg-white dark:bg-card text-black dark:text-card-foreground"
        >
          <option value="">All Types</option>
          <option value="Commercial">Commercial</option>
          <option value="Military">Military</option>
          <option value="Private">Private</option>
        </select>
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="rounded-md	 p-2 bg-white dark:bg-card text-black dark:text-card-foreground"
        >
          <option value="">All Status</option>
          <option value="Scheduled">Scheduled</option>
          <option value="In-flight">In-flight</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <Button onClick={() => onFilter(filters)}>Filter</Button>
      </div>
    </div>
  );
};

export default SearchFilter;
