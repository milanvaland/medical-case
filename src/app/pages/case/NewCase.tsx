import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

import { withRouter } from "react-router-dom";

import AppButton from "../../components/form/AppButton";
import AppTextFeild from "../../components/form/AppTextField";
import AppLayout from "../../components/layout/AppLayout";
import { addNewCase } from "../../services/Case/Case";

function NewCasePage(props: any) {
  return (
    <AppLayout
      title="New case"
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
        <AppTextFeild fullWidth id="name" label="Name" variant="outlined" />
        <AppTextFeild
          fullWidth
          id="location"
          label="Location"
          variant="outlined"
        />
        <AppTextFeild fullWidth id="age" label="Age" variant="outlined" />
        <AppTextFeild
          fullWidth
          id="problem"
          label="Problem(s)"
          variant="outlined"
        />

        <AppButton
          title="Add New"
          onClick={() => addNewCase({}, props.history.replace("/today"))}
        />
        <AppButton
          variant="text"
          title="Cancle"
          onClick={() => props.history.goBack && props.history.goBack()}
        />
      </form>
    </AppLayout>
  );
}

export default withRouter(NewCasePage);
