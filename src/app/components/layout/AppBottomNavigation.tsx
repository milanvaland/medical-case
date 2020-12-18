import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import AddRounded from "@material-ui/icons/AddRounded";
import Person from "@material-ui/icons/Person";
import CalendarToday from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default function AppBottomNavigation(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        switch (newValue) {
          case 0:
            props.goTo("/today");
            break;
          case 1:
            props.goTo("/new");
            break;
          case 2:
            props.goTo("/records");
            break;
          case 3:
            props.goTo("/account");
            break;
          default:
            props.goTo("/");
        }
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Today" icon={<CalendarToday />} />
      <BottomNavigationAction label="New" icon={<AddRounded />} />
      <BottomNavigationAction label="Records" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Account" icon={<Person />} />
    </BottomNavigation>
  );
}
