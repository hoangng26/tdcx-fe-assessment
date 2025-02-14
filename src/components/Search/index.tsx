import useDebounce from "@/hooks/useDebounce";
import { User } from "@/types";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import UserCard from "../UserCard";

interface SearchFilterProps {
  items: User[];
}

const SearchFilterComponent: React.FC<SearchFilterProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useDebounce(items);

  useEffect(() => {
    const filtered = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredItems(filtered);
  }, [items, searchTerm, setFilteredItems]);

  return (
    <div>
      <Input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <ul className="mt-8 flex flex-wrap gap-4">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <UserCard user={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilterComponent;
