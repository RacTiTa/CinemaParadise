import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import MovieCardModal from "./MovieCardModal";
import "./MovieCard.css";
import { Image } from "@chakra-ui/image";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
const badMovie = "red";
const averageMovie = "yellow";
const goodMovie = "green";
const MovieCard = ({ title, img, description, rating }) => {
  const [showInfo, setShowInfo] = useState(false);

  const getColor = (rating) => {
    if (rating < 5) return badMovie;
    if (rating < 7) return averageMovie;
    if (rating <= 10) return goodMovie;
  };
  return (
    <Box className="movie-container">
      <Box className="inside-movie-container">
        <Text className="title-box" fontSize="lg" isTruncated>
          {title}
        </Text>

        <Image
          onClick={() => setShowInfo(!showInfo)}
          className="movie-image"
          src={
            img
              ? `https://image.tmdb.org/t/p/w300${img}`
              : `https://via.placeholder.com/200x300`
          }
        />
        <Box className="container-circular-progress">
          <CircularProgress
            value={rating * 10}
            className="circular-progress"
            color={getColor(rating)}
          >
            <CircularProgressLabel>{rating * 10}%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>

      {showInfo && (
        <MovieCardModal
          open={showInfo}
          title={title}
          img={img}
          closeModal={() => setShowInfo(false)}
          description={description}
        />
      )}
    </Box>
  );
};

export default MovieCard;
