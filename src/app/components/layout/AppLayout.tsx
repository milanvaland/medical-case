import React from "react";
import AppHeader from "./AppHeader";
import { AppLayoutProps } from "./props/LayoutProps";

function AppLayout(props: AppLayoutProps) {
  return (
    <>
      <AppHeader
        title={props.title}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
      />
      <div className="main">{props.children}</div>
      <div className="footer-sticky">{props.footer}</div>
    </>
  );
}

export default AppLayout;
