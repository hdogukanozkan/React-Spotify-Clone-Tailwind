import Sidebar from "Component/Sidebar";
import Content from "Component/Content";
import Footer from "Component/Footer";

function App() {
  return (
    <>
      <div className="wrapper flex flex-row">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
