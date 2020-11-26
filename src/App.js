import Page from "./Componets/Page.js";
import Card from "./Componets/Card.js";
import Experie from "./Componets/Experie.js";
import Skill from "./Componets/Skill";
import SideBar from "./Componets/SideBar";
import "./global/styles.css";
const App = () => {
  return (
    <Page>
      <Card></Card>
       <Experie></Experie>
       <Skill></Skill> 
       <SideBar></SideBar>
    </Page>
  );
};

export default App;
