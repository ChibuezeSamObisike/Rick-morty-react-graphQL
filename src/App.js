import { useQuery } from "@apollo/client";
import Card from "./Card";
import "./App.css";
import { GET_ALL_CHARACTERS } from "./queries";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 4 },
  });
  if (loading) return <p>This Page is loading</p>;
  if (error) return <h1>There was an error {error.message}</h1>;
  return (
    <>
      <header className="text-center m-5">
        <h1>Rick and morty GraphQL App</h1>
      </header>
      <div className="row p-0 container mx-auto .divWidth">
        {data &&
          data.characters.results.map((character) => (
            <Card key={character.id} character={character} />
          ))}
      </div>
    </>
  );
};

export default App;
