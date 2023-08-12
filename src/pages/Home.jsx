import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner, SearchExercises, Exercises } from "../components";
const Home = () => {
  const [exercises, setexercises] = useState([]);
  const [bodyPart, setbodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyParts={bodyPart}
        setbodyParts={setbodyPart}
        setexercises={setexercises}
      />
      <Exercises
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
        setexercises={setexercises}
      />
    </Box>
  );
};

export default Home;
