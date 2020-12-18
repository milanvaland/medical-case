import React from "react";
import { Box, Paper } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import AppButton from "../../components/form/AppButton";
import AppTextFeild from "../../components/form/AppTextField";
import AppLayout from "../../components/layout/AppLayout";
import { doLogin } from "../../services/Auth/Login";

function LoginPage(props: any) {
  return (
    <AppLayout title="Login" footer={null} leftIcon={null} rightIcon={null}>
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
          title="Login"
          onClick={() => doLogin({}, props.history.replace("/today"))}
        />
        <AppButton
          variant="text"
          title="Register"
          onClick={() => props.history.replace("/register")}
        />
      </form>
    </AppLayout>
  );
}

export default withRouter(LoginPage);
