import InfiniteScroll from "react-infinite-scroller";
import { Species } from "./Species";
import { useInfiniteQuery } from "react-query";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  // TODO: get data for InfiniteScroll via React Query
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } = useInfiniteQuery(
    "sw-species",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  if (isLoading) {
    return <div >Loading...</div>
  }

  if (isError) {
    return <div> {error.toString()}</div>
  }
  return (
    <InfiniteScroll
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
    >
      {
        data.pages.map((pageData) => (
          pageData.results.map((person) => {
            console.log({ person })
            return (
              <Species
                key={person.name}
                name={person.name}
                language={person.language}
                averageLifespan={person.average_lifespan}
              />
            )
          })
        ))
      }
    </InfiniteScroll>
  )
}