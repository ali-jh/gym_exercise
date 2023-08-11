import React, { useEffect, useState } from "react";
import { Box, Button, Typography, TextField, Stack } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setsearch] = useState("");
  const [exercises, setexercises] = useState([]);
  const handelSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setsearch('')
      setexercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awseome Exercises you
        <br />
        Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          type="text"
          placeholder="Search Exercises"
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          height="76px"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handelSearch}
        >
          search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
