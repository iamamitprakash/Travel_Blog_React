import './App.css';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { data } from './data.js';

function App() {
  const mappedData = data.map((item) => {
    return(
      <Cards key = {item.id} item = {item} />
    );
  });
  return(
    <div className='App'>
      <Header />
      {mappedData}
      <Footer />
    </div>
  );
};

export default App;
