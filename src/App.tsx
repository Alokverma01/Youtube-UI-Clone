import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div className="max-w-[96vw] mx-auto bg-primary h-auto">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default App;
