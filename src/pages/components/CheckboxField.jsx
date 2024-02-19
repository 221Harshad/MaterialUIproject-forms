import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { addErrorField } from "../../utils/utils";
import ErrorMessage from "./ErrorMessage";

const CheckboxField = ({ name, control,errors }) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field}) => (
          <FormControlLabel {...field} required {...addErrorField(errors[name])}
            control={<Checkbox  />}
            label="I Agree to the Terms and Privacy"
          />
          
        )}

      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null }
    </>
  );
};

export default CheckboxField;
