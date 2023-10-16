import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getFormLabelUtilityClasses } from "@mui/material";

const SearchForm = ({ handleQuery }) => {
  // validate the object in the intialvalue
  const initialValues = {
    query: "",
  };
  const validationSchema = Yup.object({
    query: Yup.string().required("Please enter a valid Product"),
  });

  const onSubmit = ({ query }) => {
    console.log(query);
    handleQuery(query);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={{ my: 3 }} component="form" onSubmit={formik.handleSubmit}>
      <TextField
        name="query"
        placeholder="Search amazon marketplace..."
        fullWidth
        value={formik.values.query}
        onChange={formik.handleChange}
        error={formik.errors.query}
        helperText={formik.errors.query}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchForm;
