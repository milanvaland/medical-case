import React from "react";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

import AppButton from "../../components/form/AppButton";
import AppTextFeild from "../../components/form/AppTextField";
import AppLayout from "../../components/layout/AppLayout";

function ProfilePage(props: any) {
  return (
    <AppLayout
      title="Profile"
      footer={null}
      leftIcon={
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => props.history.goBack && props.history.goBack()}
        >
          <ArrowBackIos />
        </IconButton>
      }
      rightIcon={null}
    >
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
          title="Edit"
          onClick={() => props.history.replace("/today")}
        />
        <AppButton
          variant="text"
          title="Cancel"
          onClick={() => props.history.replace("/today")}
        />
      </form>
    </AppLayout>
  );
}

export default withRouter(ProfilePage);
