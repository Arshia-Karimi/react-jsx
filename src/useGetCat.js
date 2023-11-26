import Axios from "axios";

export const useGetCat = () => {
  const { date, isLoading, refetch } = useQuery(["Cat"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.date);
  });
  const refetchDate = () => {
    alert("date refetched");
    refetch();
  };
  return { date, isLoading };
};
