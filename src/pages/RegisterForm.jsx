import { Avatar, Box, Button, InputAdornment, Typography } from "@mui/material";
import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TextFields from "./components/TextFields";
import SelectField from "./components/SelectField";
import CheckboxField from "./components/CheckboxField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { passwordRegExp, phoneRegExp } from "../utils/utils";


const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().required("email field is required").email(),
  mobile: yup.string().required("phone number is required").matches(phoneRegExp,'phone number is not valid'),
  country: yup.string().required("Select a country"),
  password: yup
    .string()
    .required("password is required")
    .matches(
      passwordRegExp,
      "Must contains 8 characters, One uppercase, one lowercase,one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match"),
  privacy: yup.bool().oneOf([true], "field must be checked"),
});
const RegisterForm = () => {
  const {
    handleSubmit,
    control,reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      country: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      privacy: false,
    },
  });
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    reset()
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4rem",
        alignItems: "center",
        
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <HowToRegIcon />
      </Avatar>
      <Typography component="h1">Sign Up</Typography>
      {/* {form} */}
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", mt: "2rem" }}
      >
        <TextFields
          label="Full Name"
          name="fullName"
          control={control}
          errors={errors}
        />
        <TextFields
          label="Email"
          name="email"
          control={control}
          errors={errors}
        />
        <TextFields
          errors={errors}
          type="number"
          name="mobile"
          label="Phone Number"
          control={control}
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        />
        <SelectField
          control={control}
          label="Country"
          name="country"
          errors={errors}
        />
        <TextFields
          control={control}
          label="Password"
          name="password"
          errors={errors}
        />
        <TextFields
          errors={errors}
          control={control}
          label="Confirm Password"
          name="confirmPassword"
        />
        <CheckboxField control={control} name="privacy" errors={errors} />
        <Button
          type="Submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
