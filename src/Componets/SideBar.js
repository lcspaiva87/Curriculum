import styled from "styled-components";

const StylesMainContainer = styled.section`
  display: flex;
  margin: auto 6rem;

  @media (max-width: 650px) {
    margin: auto 3rem;
  }

  .information {
    display: flex;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    @media (max-width: 1043px) {
      flex-direction: column;
      align-items: center;
      padding: 3rem 3rem;
    }

    @media (min-width: 991px) {
      padding: 3rem 7rem;
    }
  }

  .information figure img {
    margin-right: 5rem;
    margin-bottom: 3rem;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

    @media (max-width: 1043px) {
      margin-right: 0;
      margin-bottom: 2rem;
    }

    @media (max-width: 367px) {
      width: calc(0.9 * 247px);
      height: calc(0.9 * 247px);
    }

    @media (max-width: 344px) {
      width: calc(0.8 * 247px);
      height: calc(0.8 * 247px);
    }

    @media (max-width: 320px) {
      width: calc(0.7 * 247px);
      height: calc(0.7 * 247px);
    }
  }

  .information .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .information .text h1 {
    text-align: justify;
    font-weight: 700;
    text-align: center;

    @media (max-width: 2560px) {
      font-size: 2.6rem;
    }

    @media (max-width: 367px) {
      width: 90%;
    }
  }

  .information .text h2 {
    color: #4c7ceb;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
  }

  .information .text .age {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }

  .information .text .age i {
    font-size: 2.2rem;
    margin-right: 9px;
    color: #f7941b;
  }

  .information .text .age span {
    font-size: 1.7rem;
    text-align: center;
  }

  .information .text .phone {
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    @media (max-width: 560px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .information .text .address {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .information .text .address i {
    color: #d31919;
    font-size: 2.2rem;
    margin-right: 9px;
  }

  .information .text .address p {
    color: black;
    text-align: justify;
    line-height: 1.9rem;
  }

  .information .text > p {
    text-align: justify;
    line-height: 1.8rem;
    font-weight: 700;

    @media (max-width: 397px) {
      text-align: center;
    }
  }
`;

const SideBar = () => {
  return (
    <StylesMainContainer>
      

      <span className="github" title="Código Fonte do Projeto">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zehguilherme/personal-curriculum"
        >
          <i className="fab fa-github" />
        </a>
      </span>
    </StylesMainContainer>
  );
};
export default SideBar;