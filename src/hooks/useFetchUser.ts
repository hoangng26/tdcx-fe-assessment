import { User } from "@/types";
import axios from "axios";
import { useState } from "react";
import { toast } from "./use-toast";

function useFetchUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await axios.get(BASE_URL);
    const data = await response.data;
    setUsers(data);
    setIsLoading(false);
  };

  const fetchUserDetail = async (id: number) => {
    setIsLoading(true);
    const response = await axios.get(`${BASE_URL}/${id}`);
    const data = (await response.data) as User;
    setUsers([data]);
    setIsLoading(false);
  };

  const fetchError = async () => {
    setIsLoading(true);
    return axios
      .get("https://jsonplaceholder.typicode.com/userss")
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Failed to fetch data",
          description: error.message,
        });
      });
  };

  return {
    isLoading,
    isError,
    users,
    fetchUsers,
    fetchUserDetail,
    fetchError,
  };
}

export default useFetchUser;
