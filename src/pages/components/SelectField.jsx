import { FormControl, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { addErrorField } from "../../utils/utils";
import ErrorMessage from "./ErrorMessage";


const SelectField = ({ label, type, name, control, errors }) => {
    const[listCountries, setListCountries] = useState([]);

    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all').then(res=>res.json().then(data=>setListCountries(data)))
    },[])
    // console.log(listCountries);

    const countries = listCountries.map((country)=>country.name.common).sort()
    // console.log(countries)
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
      
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...addErrorField(errors[name])}
            {...field}
            required
            select
            type={type}
            variant="filled"
            label={label}
          >
            <MenuItem value=""><em>None</em></MenuItem>
             {countries.map(item=>(
                <MenuItem key={item} value={item}>{item}</MenuItem>
             ))}
          </TextField>
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message}/> : null}
    </FormControl>
  );
};

export default SelectField;
