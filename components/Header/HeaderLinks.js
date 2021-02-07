/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import { Help } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import profileImage from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>home</Icon> Home
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/trips"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>travel_explore</Icon> Trips
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/games"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>games</Icon> Games
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/puzzles"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>apps</Icon> Puzzles
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/gossips-and-campus"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>record_voice_over</Icon> Gossips and Campus
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Profile"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={PersonIcon}
          dropdownList={[
            <Link href="/profile/me">
              <a className={classes.dropdownLink}>Me</a>
            </Link>,
            <a
              href="/settings"
              target="_blank"
              className={classes.dropdownLink}
            >
              Settings
            </a>,
            <a
              href="/logout"
              target="_blank"
              className={classes.dropdownLink}
            >
              Logout
            </a>
          ]}
        />
      </ListItem>
    </List>
  );
}
