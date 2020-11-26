import styled from "styled-components";
import React, { useState, useEffect } from "react";
import photo from "../assets/Udemy.png";
import { FaWhatsapp } from "react-icons/fa";
import moment from "moment";
const Conainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -134px;
  @media (max-width: 720px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -79px;
  }
`;
const PhotoCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding-top: 6rem;
  padding-bottom: 6rem;
  margin: 6rem auto 0;
  box-shadow: 3 0 black;
  box-shadow: 0 0 1em #cecece;
  height: 112px;
  width: 309px;
  display: flex;
  text-align: center;

  @media (max-width: 720px) {
    height: 89px;
    width: 287px;
  }
`;
const Photo = styled.img.attrs({ src: photo })`
  height: 268px;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: -74px;
  @media (max-width: 720px) {
    height: 268px;
    border-radius: 10px;
    margin-top: -89px;
    margin-left: 9px;
  }
`;

const About = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin: 6rem auto 0;
  box-shadow: 3 0 black;
  box-shadow: 0 0 1em #cecece;
  width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: -54px;
  @media (max-width: 720px) {
    width: 344px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-right: -10px;
    margin-left: -10px;
  }
`;
const Title = styled.h1`
  font-size: 25px;
  display: flex;
  margin-top: -47px;
  margin-bottom: 1px;
  @media (max-width: 720px) {
    font-size: 15px;
    text-align: center;
    justify-content: center;
    margin: 11px;
  }
`;
const SubTitle = styled.h2`
  font-size: 25px;
  color: #64cdff;
  display: flex;
  margin: 0;
  @media (max-width: 720px) {
    font-size: 15px;
    margin: 0;
  }
`;
const Career = styled.p`
  font-size: 13px;
  color: #000000;
  text-align: justify;
  line-height: 1.9rem;
  width: 491px;
  margin: 0;
  font-weight: 700;
  @media (max-width: 720px) {
    font-size: 11px;
    margin-bottom: 10px;
    width: 309px;
    color: #000;
  }
`;
const DateCard = styled.div`
  display: flex;
  text-align: center;
`;
const Date = styled.p`
  font-size: 1.7rem;
  color: #000;
  margin: 0;
`;
const Phonecard = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0;
`;
const Phone = styled.a`
  color: rgb(255, 255, 255);
  background-color: rgb(0, 128, 0);
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: 700;
  transition: background-color 0.3s ease;
  padding: 7px;
  text-decoration: none;
  margin: 10px;
`;
const Card = () => {
  var years = moment().diff("1997-05-09", "years", false);
  return (
    <Conainer>
      <PhotoCard>
        <Photo />
      </PhotoCard>
      <About>
        <Title>Lucas Antonio Paiva da Silva</Title>
        <SubTitle>Front-End</SubTitle>
        <DateCard>
          <Date> 09 / Maio / 1997 - {years} anos</Date>
        </DateCard>
        <Phonecard>
          <Phone
            href="https://api.whatsapp.com/send?phone=5585998629122"
            target="_blank"
          >
            <FaWhatsapp />
            (85) 998629122
          </Phone>
          <Phone
            href="https://api.whatsapp.com/send?phone=558589338218"
            target="_blank"
          >
            <FaWhatsapp styled="margin:10px;" />
            (85) 998629122
          </Phone>
        </Phonecard>
        <Career>
          {" "}
          Busco uma vaga no mercado no âmbito Front-end para colocar meus
          conhecimentos na área da programação, colaborando o máximo possível
          com as equipes de trabalho e assim proporcionando um crescimento tanto
          da empresa como pessoal.
        </Career>
      </About>
    </Conainer>
  );
};

export default Card;
