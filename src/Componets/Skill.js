import styled from "styled-components";
import GitHub from "../assets/github.svg";
import Linke from "../assets/linkedin.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Cv from "../assets/curriculum-vitae.svg";
import PdfCurriculum from "../assets/CV Lucas.pdf";
const Card = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Skillcard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin: 1rem auto 0;
  box-shadow: 3 0 black;
  box-shadow: 0 0 1em #cecece;
  width: 490px;
  display: flex;
  flex-direction: column;
  margin-right: -6px;
  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    margin: 11px;
    width: 338px;
  }
`;
const SkillTitle = styled.h1`
  font-size: 20px;
  color: #7dc8d0;
  margin-left: 20px;
  font-family: monospace;
`;
const SkillName = styled.p`
  font-size: 15px;
  padding: 10px;
  margin: 0;
  font-weight: 900;
  display: flex;
`;
const SkillContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 3px;
  display: flex;
  text-align: center;
  justify-content: center;
`;
const SKillCaixa = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.backgroundcolor};
  margin-right: 3px;
  border-radius: 2px;
`;
const SkillAline = styled.div``;

const Social = styled.div`
  /* background-color: #ffffff;
  border-radius: 10px;
  margin: 6rem;
  box-shadow: 3 0 black;
  box-shadow: 0 0 1em #cecece;
  width: 356px;
  margin-bottom: 0px;
  /* width: 1000px; */
  /* margin-top: 15px;
  /* height: 480px; */
  /* padding: 10px;
  display: flex;  */
  ckground-color: #ffffff;
    border-radius: 10px;
    margin: 1rem auto 0;
    box-shadow: 3 0 black;
    box-shadow: 0 0 1em #cecece;
     width: 356px; 
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    /* margin-right: -6px; */
}
  @media (max-width: 720px) {
    width: 316px;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 0px;
    display: block;
    padding: 10px;
  }
`;
const SocialTitle = styled.h1`
  font-size: 20px;
  color: #7dc8d0;
  margin-left: 20px;
  font-family: monospace;
`;
const SocialContainer = styled.div``;
const SocialName = styled.a`
  text-decoration: none;
  text-align: center;
  margin: 25px;
`;

const SocialLine = styled.div`
  display: flex;

  position: relative;
  justify-content: center;
  padding: 11px;
`;
const SocialGit = styled.img.attrs({ src: GitHub })`
  width: 54px;
`;
const SocialLikedin = styled.img.attrs({ src: Linke })`
  width: 54px;
`;
const SocialWhatsapp = styled.img.attrs({ src: Whatsapp })`
  width: 54px;
`;
const SocialCV = styled.img.attrs({ src: Cv })`
  width: 54px;
`;
const SocialNames = styled.span`
  font-size: 15px;
  color: #c7c3c3;
  display:flex;
`;
const SocialDiv = styled.div``;
const Skill = () => {
  return (
    <Card>
      <Skillcard>
        <SkillTitle>Programming Skill</SkillTitle>
        <SkillContainer>
          <SkillAline>
            <SkillName>
              <SKillCaixa backgroundcolor="#E54D26" /> HTML 5
            </SkillName>
            <SkillName>
              <SKillCaixa backgroundcolor=" rgb(56 255 209);" /> CSS
            </SkillName>
            <SkillName>
              <SKillCaixa backgroundcolor="#F0DB4F" /> JS
            </SkillName>
            <SkillName>
              <SKillCaixa backgroundcolor="#61DAFB" /> React
            </SkillName>
            <SkillName>
              <SKillCaixa backgroundcolor="#000" /> Git
            </SkillName>
          </SkillAline>
          <SkillAline>
            <SkillName>
              <SKillCaixa backgroundcolor="#04d63b" />
              NodeJs
            </SkillName>
            <SkillName>
              <SKillCaixa backgroundcolor="#0099ff" /> Mysql
            </SkillName>
            <SkillName>
              <SKillCaixa backgroundcolor="#9d00ff" />
              Bootstrap
            </SkillName>
            <SkillName>
              <SKillCaixa backgroundcolor="#ff5e00" />
              GitHub
            </SkillName>
          </SkillAline>
        </SkillContainer>
      </Skillcard>
      <Social>
        <SocialDiv>
          <SocialTitle>Social</SocialTitle>
        </SocialDiv>
        <SocialContainer>
          <SocialLine>
            <SocialName href="https://github.com/lcspaiva87" target="_blank">
              <SocialGit />
              <SocialNames>GitHub</SocialNames>
            </SocialName>
            <SocialName
              href="https://www.linkedin.com/in/lucas-antonio-11a196114/"
              target="_blank"
            >
              <SocialLikedin />
              <SocialNames>Linkedin</SocialNames>
            </SocialName>
          </SocialLine>
          <SocialLine>
            <SocialName
              href="https://api.whatsapp.com/send?phone=5585998629122"
              target="_blank"
            >
              <SocialWhatsapp />
              <SocialNames>Whatsapp</SocialNames>
            </SocialName>
            <SocialName
              href={PdfCurriculum}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialCV />
              <SocialNames>Curriculum</SocialNames>
            </SocialName>
          </SocialLine>
        </SocialContainer>
      </Social>
    </Card>
  );
};

export default Skill;
