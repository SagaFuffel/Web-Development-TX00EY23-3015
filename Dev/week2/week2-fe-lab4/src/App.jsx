
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

//optional!
//Extend the lab by adding new components 
// (e.g., Sidebar, Article).
//Pass data between components using props.
//Style the components for a more visually 
// appealing webpage.