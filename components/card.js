import { useColorModeValue } from "@chakra-ui/react";
import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";
import { css } from "@nextui-org/react";
import { Badge, Avatar } from "@nextui-org/react";

export default function WCard() {
    return (
        <Card css={{ p: "$10", mw: "500px", mh: "500", background: "$gray900" }} variant="bordered">
          <Card.Header>
          <Badge enableShadow disableOutline color="success">
            <Avatar
              squared
              size="lg"
              src="https://i.imgur.com/RuuEpPG.png"
            />
            </Badge>
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h3 css={{ lineHeight: "$xs", fontSize: "$2xl", textGradient: "45deg, $blue100 -20%, $blue200 50%" }}>
                  Orban Robert
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>Software Developer</Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2", color:"GhostWhite" }}>
            <Text css={{ py: "$2", color:"GhostWhite" }}>
              Make beautiful websites regardless of your design experience.
            </Text>
          </Card.Body>
          <Card.Footer>
            <Link
              icon
              color="primary"
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </Card.Footer>
        </Card>
      );
}
