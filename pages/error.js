import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";

import image from "assets/img/bg7.jpg";
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function Error(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader>
                  <h1 className={classes.title}>oh oh ...</h1>
                </CardHeader>
                <CardBody>
                  <h4>
                    You are where you are not supposed to be. Please go <Link href="/">home</Link>.
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
