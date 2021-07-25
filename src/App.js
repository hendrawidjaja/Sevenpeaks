import { MyContextProvider } from "./context/index";

import NavBar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["App"]}>
      <MyContextProvider>
        <NavBar />
        <Main />
        <Footer />
      </MyContextProvider>
    </div>
  );
}

export default App;
