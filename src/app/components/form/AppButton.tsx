import React from "react";
import { Button, ButtonProps } from "@material-ui/core";

export default function AppButton(props: ButtonProps) {
  const buttonProps: any = props;
  return (
    <Button
      style={{ marginTop: 4, marginBottom: 4 }}
      fullWidth
      variant={props.variant ?? "contained"}
      color={props.color ?? "primary"}
      {...buttonProps}
    >
      {props.title}
    </Button>
  );
}
