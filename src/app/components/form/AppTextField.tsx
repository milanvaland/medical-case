import React from "react";
import { OutlinedTextFieldProps, TextField } from "@material-ui/core";
import { TextFieldProps } from "material-ui";

export default function AppTextFeild(props: OutlinedTextFieldProps) {
  const inputProps: any = props;
  return <TextField margin="normal" fullWidth {...inputProps} />;
}
