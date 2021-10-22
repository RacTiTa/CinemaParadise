import "./App.css";
import React, { useEffect, useState } from "react";
import useMovies from "./hooks/useMovies";
import MovieCard from "./components/MovieCard";
import { Rating } from "react-simple-star-rating";
import { Input } from "@chakra-ui/react";
import { Button, Box, Flex } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Container, Text } from "@chakra-ui/react";

const App = () => {
  const { suggestedMovies, searchMovie, setVoteAverageFilter } = useMovies();
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState();

  const handleRating = (rate) => {
    rate === rating ? setRating(0) : setRating(rate);
  };
  useEffect(() => setVoteAverageFilter(rating), [rating]);
  useEffect(() => setMovieTitle(), [suggestedMovies]);

  const setMovieTitle = () => {
    if (input === "") {
      setTitle("SUGERENCIA PARA VOS!");
    } else {
      if (!suggestedMovies?.length) {
        setTitle("no hay resultados para " + input);
      } else {
        setTitle("PELICULAS QUE CONTIENEN " + input + ":");
      }
    }
  };

  return (
    <ChakraProvider>
      <Box>
        <Flex className="SearchFlex">
          <Flex className="SearchBox">
            <Input
              className="SearchInput"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              className="search-bottom"
              onClick={() => searchMovie(input)}
            >
              Buscar
            </Button>
          </Flex>
          <Rating
            className="Rating"
            onClick={handleRating}
            ratingValue={rating}
            size={30}
          />
        </Flex>
        <Text className="movies-title"> {title} </Text>

        <Container className="MovieContainer">
          <SimpleGrid spacing={10} minChildWidth={300} className="grid-movies">
            {suggestedMovies?.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                img={movie.poster_path}
                description={movie.overview}
                rating={movie.vote_average}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
