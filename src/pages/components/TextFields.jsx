import { FormControl, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { addErrorField } from "../../utils/utils";
import ErrorMessage from "./ErrorMessage";

const TextFields = ({ label, inputProps, type, control, name ,errors}) => {
  return (
    <div>
      <FormControl fullWidth sx={{ mb: "1rem" }}>
        <Controller
          name={name}
          
          control={control}
          render={({ field }) => (
            <TextField
            {...field}
            {...addErrorField(errors[name])}
              required
              
              type={type}
              variant="filled"
              label={label}
              InputProps={inputProps}
            />
          )}
        />
        {errors[name] ? <ErrorMessage message={errors[name].message}/> : null}
      </FormControl>
    </div>
  );
};

export default TextFields;
