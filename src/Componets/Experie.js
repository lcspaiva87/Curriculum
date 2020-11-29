import styled from "styled-components";

const Job = styled.div`
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

const JobExperince = styled.div`
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
    margin: 11px;
    width: 343px;
  }
`;
const JobTitle = styled.h1`
  font-size: 20px;
  color: #7dc8d0;
  margin-left: 20px;
  font-family: monospace;
`;
const JobContainer = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
`;
const JobName = styled.h1`
  margin: 0;
  font-size: 19px;
  margin-left: 20px;
  @media (max-width: 720px) {
    margin: 0;
    font-size: 17px;
    margin-left: 20px;
  }
`;
const JobDate = styled.h6`
  font-size: 13px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #000000;
`;
const JobService = styled.h6`
  font-size: 12px;
  margin-top: 0;
  margin-left: 20px;
  color: #000000;
`;

const Education = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin: 6rem;
  box-shadow: 3 0 black;
  box-shadow: 0 0 1em #cecece;
  width: 356px;
  margin-bottom: 0px;
  /* width: 1000px; */
  margin-top: 15px;
  /* height: 480px; */
  padding: 10px;
  @media (max-width: 720px) {
    width: 316px;
    align-items: center;
    margin-top: 10px;
    margin-right: 3px;
    margin-left: 13px;
  }
`;
const EducationTitle = styled.h1`
  font-size: 20px;
  color: #7dc8d0;
  margin-left: 20px;
  font-family: monospace;
`;
const EducationSchool = styled.p`
  font-size: 15px;
  padding: 10px;
  margin: 0;
  font-weight: 900;
`;
const EducationContainer = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
  display: flex;
`;

const LineVertical = styled.div`
  height: ${(props) => props.height};
  border-left: 6px solid #7fe3ef; /* Adiciona borda esquerda na div como ser fosse uma linha.*/
`;

const Complete = styled.h1`
  font-size: 20px;
  color: #7dc8d0;
  margin-left: 20px;
  font-family: monospace;
`;
const CouserComplete = styled.p`
  font-size: 10px;
  font-weight: bold;
  /* margin: 8px; */
  /* margin-right: -23px; */
  display: flex;
  margin-left: 10px;
`;
const Experie = () => {
  return (
    <Job>
      <JobExperince>
        <JobTitle>Experience</JobTitle>
        <JobContainer>
          <JobName>Empresa:Cabral Empreendimentos</JobName>
          <JobDate>Data:05/2020 a 11/2020</JobDate>
          <JobService>Serviços Prestados: Estagiario de WebDesgner</JobService>
        </JobContainer>

        <JobContainer>
          <JobName>Empresa:Instituto Federal Do Ceará</JobName>
          <JobDate>Data: 05/2019 a 07/2019</JobDate>
          <JobService>Serviços Prestados:Suporte Técnico</JobService>
        </JobContainer>

        <JobContainer>
          <JobName>Empresa:Copral-Comercio e Navegação</JobName>
          <JobDate>Data:14/2019 a 03/2020</JobDate>
          <JobService>Serviços Prestados: Aprendiz administrativo</JobService>
        </JobContainer>

        <JobContainer>
          <JobName>Empresa:Auto Peças Padre Cicero</JobName>
          <JobDate>Data:03/2020 a 05/2020</JobDate>
          <JobService>Serviços Prestados: Aprendiz administrativo</JobService>
        </JobContainer>
      </JobExperince>

      <Education>
        <EducationTitle>Education</EducationTitle>
        <EducationContainer>
          <LineVertical >
            <EducationSchool>
              {" "}
              Técnico em Informática - (Concluído) –IFCE (Maracanaú/CE) - 2018.
            </EducationSchool>
            <EducationSchool>
              {" "}
              Sistemas de informação - (3-Semestre ) - Lourenço Filho
            </EducationSchool>
          </LineVertical>
        </EducationContainer>
        <completeEducation>
          <Complete>complementary course</Complete>
          <LineVertical>
            <CouserComplete>Lógica de Programação essencial </CouserComplete>
            <CouserComplete>Adobe XD Definitivo </CouserComplete>
            <CouserComplete>HTML Básico </CouserComplete>
            <CouserComplete>Iniciando com Javascript </CouserComplete>
            <CouserComplete>Bootstrap 4 </CouserComplete>
            <CouserComplete>Git e GitHub</CouserComplete>
            <CouserComplete>Iniciando com React.js</CouserComplete>
            <CouserComplete>Reat – Introdução </CouserComplete>
            <CouserComplete>Woocommerce </CouserComplete>
            <CouserComplete>Cisco Networking Academy </CouserComplete>
          </LineVertical>
        </completeEducation>
      </Education>
    </Job>
  );
};
export default Experie;
