import SearchFilterComponent from "@/components/Search";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/loading";
import useFetchUser from "@/hooks/useFetchUser";
import React from "react";

const SearchFilterPage: React.FC = () => {
  const { users, fetchUsers, isLoading, isError, fetchError } = useFetchUser();

  return (
    <div>
      {!users.length && (
        <div className="flex items-center justify-center gap-4">
          <Button onClick={fetchUsers}>Fetch Data</Button>

          <Button variant="destructive" onClick={fetchError}>
            Fetch Error
          </Button>
        </div>
      )}
      {users.length > 0 && <SearchFilterComponent items={users} />}
      {isError && <p className="text-red-500">Failed to fetch data</p>}
      <Loading show={isLoading} />
    </div>
  );
};

export default SearchFilterPage;
