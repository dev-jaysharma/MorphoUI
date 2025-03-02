import Button from "./components/Button";

function App() {
  return <div
  className="flex justify-center items-center h-screen bg-stone-950"
  >
    <Button onClick={() => {
      console.log("hello");
    }} children="hello" darkMode={true} classname="" />
  </div>;
}

export default App;
