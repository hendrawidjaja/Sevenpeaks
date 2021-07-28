import Footer from "./components/footer";
import Main from "./components/main";
import NavBar from "./components/navbar";
import { BookProvider } from "./store/context";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["App"]}>
      <BookProvider>
        <NavBar />
        <Main />
        <Footer />
      </BookProvider>
    </div>
  );
}

export default App;
