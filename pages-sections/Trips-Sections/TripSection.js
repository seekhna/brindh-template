import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
// import { Card, CardBody } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function TripSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Card>
        <CardBody>
          <img src={image1} alt="Trip I" className="slick-image" width="100%" />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h2 align="left">The first trip!</h2>
          <h4 align="justify">
            Dictumst quisque sagittis purus sit amet volutpat consequat. Natoque penatibus et magnis dis parturient montes. Cursus metus aliquam eleifend mi in. Sollicitudin nibh sit amet commodo nulla facilisi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Venenatis cras sed felis eget velit. Massa eget egestas purus viverra. At ultrices mi tempus imperdiet. Fames ac turpis egestas integer eget. Consectetur lorem donec massa sapien faucibus et molestie. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Augue ut lectus arcu bibendum at varius vel pharetra vel. Duis ut diam quam nulla porttitor massa id neque aliquam. Sit amet nulla facilisi morbi tempus iaculis urna. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Rhoncus aenean vel elit scelerisque mauris pellentesque.
          </h4>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <img src={image2} alt="Trip II" className="slick-image" width="100%" />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h2 align="left">The second trip!</h2>
          <h4 align="justify">
            Blandit turpis cursus in hac. At elementum eu facilisis sed odio morbi quis commodo. Rutrum quisque non tellus orci ac auctor augue. Mattis vulputate enim nulla aliquet. Adipiscing vitae proin sagittis nisl rhoncus. Lectus urna duis convallis convallis tellus id interdum. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Velit egestas dui id ornare arcu odio ut. Semper eget duis at tellus. Amet justo donec enim diam vulputate ut. Quis eleifend quam adipiscing vitae proin. Turpis cursus in hac habitasse. Lacus vestibulum sed arcu non odio euismod. Volutpat diam ut venenatis tellus in metus vulputate eu. Imperdiet proin fermentum leo vel orci porta. Eget duis at tellus at urna. Amet tellus cras adipiscing enim. Id ornare arcu odio ut sem nulla pharetra diam. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
          </h4>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <img src={image3} alt="Trip III" className="slick-image" width="100%" />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h2 align="left">The third trip!</h2>
          <h4 align="justify">
            Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Massa tempor nec feugiat nisl pretium fusce id. Leo in vitae turpis massa sed. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Cras ornare arcu dui vivamus. Amet justo donec enim diam vulputate ut. Sed faucibus turpis in eu. Sed nisi lacus sed viverra tellus in hac. Odio pellentesque diam volutpat commodo. At auctor urna nunc id cursus metus aliquam eleifend. Neque ornare aenean euismod elementum nisi quis. Accumsan in nisl nisi scelerisque eu ultrices. Libero justo laoreet sit amet cursus sit amet. In ornare quam viverra orci. Congue quisque egestas diam in arcu cursus euismod quis viverra.
          </h4>
        </CardBody>
      </Card>
    </div>
  );
}
