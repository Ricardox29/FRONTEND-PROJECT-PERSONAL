import Button from "./components/Button";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import "./styles/style.css";

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Button  >
        Hello  
      </Button>
      <Button >
        Hola mundo
      </Button> 
      <TextArea background={"#fff"} padding={20} />
      <Input />
    </>
  );
};

export default App;
