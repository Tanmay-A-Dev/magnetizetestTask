import { Box, Flex, Image, Text } from "@mantine/core";
import React from "react";
import "./CreditCard.css";
import elips from "./assets/Ellipse.png";
const CreditCard = () => {
  return (
    <Flex className="craditCard__container--main">
      <Box className="circle__group--svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="40"
          viewBox="0 0 52 40"
          fill="none"
        >
          <circle
            opacity="0.5"
            cx="34.0976"
            cy="22.1522"
            r="14"
            transform="rotate(15 34.0976 22.1522)"
            fill="white"
          />
          <circle
            opacity="0.5"
            cx="18.0312"
            cy="17.8472"
            r="14"
            transform="rotate(15 18.0312 17.8472)"
            fill="white"
          />
        </svg>
      </Box>
      <Box className="circle__top__right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="126"
          viewBox="0 0 67 126"
          fill="none"
        >
          <circle
            cx="79.922"
            cy="46.9469"
            r="79"
            transform="rotate(15 79.922 46.9469)"
            fill="#232937"
          />
        </svg>
      </Box>
      <Text className="card__type">Creadit Crad</Text>
      <Flex className="card__number--container" align={"center"}>
        <Flex className="dot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
          >
            <circle
              cx="2.14358"
              cy="2.80032"
              r="2"
              transform="rotate(15 2.14358 2.80032)"
              fill="#D9D9D9"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
          >
            <circle
              cx="2.14358"
              cy="2.80032"
              r="2"
              transform="rotate(15 2.14358 2.80032)"
              fill="#D9D9D9"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
          >
            <circle
              cx="2.14358"
              cy="2.80032"
              r="2"
              transform="rotate(15 2.14358 2.80032)"
              fill="#D9D9D9"
            />
          </svg>
        </Flex>
        <Text className="card__number">1234</Text>
      </Flex>
      <Box className="circle__bottom__left">
        <Image src={elips} />
      </Box>
      <Text className="valid__date">09/25</Text>
    </Flex>
  );
};

export default CreditCard;
