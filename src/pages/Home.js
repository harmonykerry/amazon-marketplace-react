import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../mocks/productSearch.json";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState();

  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          // const { data } = await axios.get(
          //   "https://amazon23.p.rapidapi.com/product-search",
          //   {
          //     params: { query: searchTerm, country: "GB" },
          //     headers: {
          //       "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          //       "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
          //     },
          //   }
          // );

          setError(false);
          setResults(data?.result || []);
        } catch (error) {
          console.log(`Error failed in to fetch data: ${error.message}`);
          setError(true);
          setResults();
        }
        setIsLoading(false);
      };
      fetchData();
    }
  }, [searchTerm]);

  const handleQuery = (query) => {
    setSearchTerm(query);
  };
  return (
    <Container maxWidth="lg">
      <Stack>
        <Box>
          <SearchForm handleQuery={handleQuery} />
        </Box>
        <Box>
          {isLoading && (
            <Backdrop sx={{ color: "#fff", zIndex: 4 }} open={isLoading}>
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          {error && (
            <Alert severity="error">
              Failed fetch results for {searchTerm}
            </Alert>
          )}
          {results && <SearchResults results={results} />}
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
