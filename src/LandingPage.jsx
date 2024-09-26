import React from "react";
import {
  Container,
  Button,
  Text,
  Stack,
  Flex,
  Image,
  List,
  Box,
  Grid,
  Title,
  ButtonGroup,
  TextInput,
  Center,
  Group,
  Card,
  ThemeIcon,
  Rating,
} from "@mantine/core";
import "./LandingPage.css";
import charlie from "./assets/charlie.png";
import CreditCard from "./CreditCard";
import activity from "./assets/activity.svg";
import pieChart from "./assets/pie-chart.svg";
import command from "./assets/command.svg";
import frame1 from "./assets/Frame1.svg";
import frame2 from "./assets/Frame2.svg";
import frame3 from "./assets/Frame3.svg";
import topLeft from "./assets/top-left.png";
import topRight from "./assets/top-right.png";
import bottomRight from "./assets/bottom-right.png";
import {
  DescriptSvg,
  GrammarlySvg,
  GreenDivider,
  IntercomSvg,
  MessageIcon,
  RightTick,
  StorageIcon,
  UnsplashSvg,
  ViewDemo,
} from "./svgIcons";

const LandingPage = () => {
  const features = [
    {
      image: frame1,
      title: "Collaboration Teams",
      description:
        "Here you can handle projects together with your team virtually.",
    },
    {
      image: frame2,
      title: "Cloud Storage",
      description:
        "No need to worry about storage because we provide storage up to 2 TB.",
    },
    {
      image: frame3,
      title: "Daily Analytics",
      description:
        "We always provide useful information to make it easier for you every day.",
    },
  ];
  return (
    <Box>
      <Box px={"120px"} pos={"relative"}>
        <Image className="top__left--gradient" src={topLeft} />
        <Image className="top__right--gradient" src={topRight} />
        <Box className="bottom__right--container"></Box>
        <Flex justify={"space-between"} align="center" mb={"40px"} pt={"40px"}>
          <Text c="colorPrimary.0" size="50px" fw={600}>
            Biccas
          </Text>
          <Flex align="center">
            <Flex>
              <List listStyleType="none" display={"flex"} size="16px">
                <List.Item
                  className="list__item"
                  c="#000"
                  p={"10px 20px"}
                  fw={600}
                >
                  Home
                </List.Item>
                <List.Item className="list__item" c="#A6A6A6" p={"10px 20px"}>
                  Product
                </List.Item>
                <List.Item className="list__item" c="#A6A6A6" p={"10px 20px"}>
                  FaQ
                </List.Item>
                <List.Item className="list__item" c="#A6A6A6" p={"10px 20px"}>
                  Blog
                </List.Item>
                <List.Item className="list__item" c="#A6A6A6" p={"10px 20px"}>
                  About Us
                </List.Item>
              </List>
            </Flex>
            <Flex ml={"50px"}>
              <Button variant="white" c={"#A6A6A6"} fs="16px">
                Login
              </Button>
              <Button bg="colorPrimary.0" fs="16px">
                Sign Up
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Grid>
          <Grid.Col span={5}>
            <Box>
              <Title size={"80px"} lh={"90px"}>
                We’re here to Increase your Productivity
              </Title>
              <Box my={"50px"}>
                <GreenDivider />
              </Box>
              <Title size={"18px"} mb="50px" lh={"30px"}>
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.
              </Title>
            </Box>
          </Grid.Col>
          <Grid.Col span={7} pos={"relative"}>
            <Flex h={"100%"} justify={"right"}>
              <Flex
                className="user__image--container"
                bg={"#30946D"}
                h={"526px"}
                w={"410px"}
                align={"end"}
              >
                <Image src={charlie} />
                <Box className="image__background--svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="387"
                    height="265"
                    viewBox="0 0 387 265"
                    fill="none"
                  >
                    <path
                      d="M27 0.5L4 121.5L80.5 55L105 148L186 55L205 148L253.5 96.5L268.5 222L349 96.5L354.5 228.5L386.5 262.5"
                      stroke="rgb(17 56 41 / 43%)"
                      stroke-width="5"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="267"
                    height="300"
                    viewBox="0 0 267 337"
                    fill="none"
                  >
                    <path
                      d="M-16 17.3034C9.82648 17.5597 64.2411 25.6081 75.2877 55.7513C86.3342 85.8945 198.027 34.4768 252.493 5L264 284.901C219.507 303.1 131.748 346.726 136.658 375.638C142.795 411.78 120.548 420.238 81.4247 420.238C42.3014 420.238 48.4384 432.541 29.2603 441"
                      stroke="rgb(17 56 41 / 43%)"
                      stroke-width="5"
                    />
                  </svg>
                </Box>
                <Flex className="send__amount--container">
                  <Flex align={"center"} justify={"space-between"}>
                    <Box className="enter__amount--container">
                      <Text c={"#A9A7B6"} size={"12px"}>
                        Enter amount
                      </Text>
                      <Text>$450..00</Text>
                    </Box>
                    <Button bg="colorPrimary.0">Send</Button>
                  </Flex>
                </Flex>
                <Flex className="total__amount--container">
                  <Flex align={"center"} justify={"space-between"} w={"100%"}>
                    <Box className="enter__amount--container">
                      <Text c={"#A9A7B6"} size={"12px"}>
                        Total Income
                      </Text>
                      <Text>$245.00</Text>
                    </Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15 16.6665V8.33313"
                      stroke="#52BD94"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 16.6665V3.33313"
                      stroke="#52BD94"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 16.6664V11.6664"
                      stroke="#52BD94"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  </Flex>
                </Flex>
                <Box className="right__tick--svg">
                  <RightTick />
                </Box>
                <Box className="storage__icon">
                  <StorageIcon />
                </Box>
                <Box className="message_icon">
                  <MessageIcon />
                </Box>
                <Box className="cradit_card--container">
                  <CreditCard />
                </Box>
              </Flex>
            </Flex>
          </Grid.Col>
          <Flex gap={"xl"}>
            <Button size="xl" radius={"30px"} bg="colorPrimary.0">
              Try free trial
            </Button>
            <Button size="xl" radius={"30px"} variant="white" color="#191A15">
              <ViewDemo />
              View Demo
            </Button>
          </Flex>
        </Grid>
        <Title size={"40px"} lh={"90px"} ta={"center"} mt={"90px"} mb={"40px"}>
          We’re here to Increase your Productivity
        </Title>
        <Flex mb={"100px"} justify={"center"}>
          <List listStyleType="none" display={"flex"} size="30px">
            <List.Item
              className="list__item--tools"
              c="#A6A6A6"
              p={"10px 20px"}
              display={"flex"}
            >
              <UnsplashSvg />
              Unsplash
            </List.Item>
            <List.Item
              className="list__item--tools"
              c="#A6A6A6"
              p={"10px 20px"}
            >
              <UnsplashSvg />
              Notion
            </List.Item>
            <List.Item
              className="list__item--tools"
              c="#A6A6A6"
              p={"10px 20px"}
            >
              <IntercomSvg />
              INTERCOM
            </List.Item>
            <List.Item
              className="list__item--tools"
              c="#A6A6A6"
              p={"10px 20px"}
            >
              <DescriptSvg />
              descript
            </List.Item>
            <List.Item
              className="list__item--tools"
              c="#A6A6A6"
              p={"10px 20px"}
            >
              <Box
                className="gramerly__icon"
                display={"inline-block"}
                w="30px"
                h={"30px"}
                mr={"5px"}
              >
                <GrammarlySvg />
              </Box>
              grammarly
            </List.Item>
          </List>
        </Flex>
      </Box>
      <Box px={"100px"} bg="#F9F8FE">
        <Grid>
          <Box>
            <Grid>
              <Grid.Col span={6}>
                <Box shadow="sm" p="lg">
                  <Title size={"30px"}>
                    How we support our pratner all over the world
                  </Title>
                  <Text c={"#A6A6A6"} mt={"lg"} size="16px">
                    SaaS become a common delivery model for many business
                    application, including office software, messaging software,
                    payroll processing software, DBMS software, management
                    software
                  </Text>
                  <Grid justify="left" mt="70px">
                    <Group position="apart" gap="50px" spacing="xl">
                      <Group align="center">
                        <Flex direction={{ base: "column" }}>
                          <Rating value={4.9} readOnly mb={"10px"} />
                          <Text mb={"10px"} size="18px">
                            <Text display={"inline"} fw={600}>
                              4.8
                            </Text>{" "}
                            / 5 rating
                          </Text>
                          <Text c="#A6A6A6" size="18px" fw={700}>
                            databricks
                          </Text>
                        </Flex>
                      </Group>

                      <Group align="center">
                        <Flex direction={{ base: "column" }}>
                          <Rating value={3.8} readOnly mb={"10px"} />
                          <Text mb={"10px"} size="18px">
                            <Text display={"inline"} fw={600}>
                              4.8
                            </Text>{" "}
                            / 5 rating
                          </Text>
                          <Text c="#A6A6A6" size="18px" fw={700}>
                            Chainalysis
                          </Text>
                        </Flex>
                      </Group>
                    </Group>
                  </Grid>
                </Box>
              </Grid.Col>
              <Grid.Col span={6}>
                <Box shadow="sm" p="lg">
                  <Flex position="center" align="start">
                    <ThemeIcon
                      className="box__shadow"
                      color="#FFFFFF"
                      size="xl"
                      mr={"20px"}
                    >
                      <Image src={activity} />
                    </ThemeIcon>
                    <Flex direction={"column"}>
                      <Title order={4} mb={"5px"}>
                        Publishing
                      </Title>
                      <Text c={"#A6A6A6"}>
                        Plan, collaborate, and publish your content that drives
                        meaningful engagement and growth for your brand.
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
                <Box shadow="sm" p="lg">
                  <Flex position="center" align="start">
                    <ThemeIcon
                      className="box__shadow"
                      color="#FFFFFF"
                      size="xl"
                      mr={"20px"}
                    >
                      <Image src={pieChart} />
                    </ThemeIcon>
                    <Flex direction={"column"}>
                      <Title order={4} mb={"5px"}>
                        Analytics
                      </Title>
                      <Text c={"#A6A6A6"}>
                        Analyze your performance and create goegeous report
                      </Text>
                    </Flex>
                  </Flex>
                </Box>{" "}
                <Box shadow="sm" p="lg">
                  <Flex position="center" align="start">
                    <ThemeIcon
                      className="box__shadow"
                      color="#FFFFFF"
                      size="xl"
                      mr={"20px"}
                    >
                      <Image src={command} />
                    </ThemeIcon>
                    <Flex direction={"column"}>
                      <Title order={4} mb={"5px"}>
                        Engagement
                      </Title>
                      <Text c={"#A6A6A6"}>
                        Quiuckly navigate you anda engage with your adience
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Box px={"100px"}>
        <Box mt={"90px"}>
          <Grid justify="space-between" align="center" mb="100px">
            <Grid.Col span={4}>
              <Title order={2}>Our Features You Can Get</Title>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text c="#A6A6A6" fs={"18px"} lh={"30px"}>
                We offer a variety of interesting features that can help
                increase your productivity at work and manage your projects
                easily.
              </Text>
            </Grid.Col>
            <Grid.Col span={4} style={{ textAlign: "right" }}>
              <Button size="lg" radius="xl" color="teal">
                Get Started
              </Button>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
      <Grid px={"30px"} mb={"50px"}>
        {features.map((feature, index) => (
          <Grid.Col span={4}>
            <Card
              key={index}
              padding="0"
              component="a"
              radius="md"
              style={{
                flex: "1 1 300px",
                margin: "10px",
                border: "none",
                boxShadow: "none",
                // maxWidth: "calc(33% - 20px)",
                overflow: "hidden",
                paddingBottom: "100px",
              }}
            >
              <Card.Section>
                <Image
                  src={feature.image}
                  height={400}
                  fit="contain"
                  alt={feature.title}
                  style={{ borderRadius: "8px" }}
                />
              </Card.Section>
              <Box pos={"absolute"} bottom={0} left={"70px"}>
                <Text fw={700} size="lg" mt="md">
                  {feature.title}
                </Text>
                <Text mt="xs" c="dimmed" size="sm">
                  {feature.description}
                </Text>
              </Box>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default LandingPage;
