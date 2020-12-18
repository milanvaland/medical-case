import React from "react";
import { Box, Paper } from "@material-ui/core";
import AppButton from "../../components/form/AppButton";
import AppTextFeild from "../../components/form/AppTextField";
import AppLayout from "../../components/layout/AppLayout";
import { withRouter } from "react-router-dom";
import { doRegister } from "../../services/Auth/Register";

function RegisterPage(props: any) {
  return (
    <AppLayout title="Register" footer={null} leftIcon={null} rightIcon={null}>
      <Paper elevation={0}>
        <Box
          display="flex"
          p={1}
          bgcolor="background.paper"
          justifyContent="center"
          alignItems="center"
        >
          <img
            height={80}
            width={80}
            src="https://cdn.worldvectorlogo.com/logos/react.svg"
          ></img>
        </Box>
      </Paper>
      <form noValidate>
        <AppTextFeild
          fullWidth
          id="mobile-number"
          label="Name"
          variant="outlined"
        />
        <AppTextFeild
          fullWidth
          id="mobile-number"
          label="Location"
          variant="outlined"
        />
        <AppTextFeild
          fullWidth
          id="mobile-number"
          label="Contact Person"
          variant="outlined"
        />
        <AppTextFeild
          fullWidth
          id="mobile-number"
          label="Mobile number"
          variant="outlined"
        />
        <AppTextFeild
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
        />
        <AppButton
          title="Register"
          onClick={() => doRegister({}, props.history.replace("/"))}
        />
        <AppButton
          variant="text"
          title="Login"
          onClick={() => doRegister({}, props.history.replace("/"))}
        />
      </form>
    </AppLayout>
  );
}

export default withRouter(RegisterPage);
