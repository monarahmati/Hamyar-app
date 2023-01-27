import { Route, Routes } from 'react-router-dom';
import Books from './components/Bookspage/Books';
import HomePage from './components/Home/HomePage';
import Plan from './components/PlanPage/Plan';
import Profile from './components/Profilepage/Profile';
import Layout from './layout/index';



function App() {
  return (
    
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/books/" element={<Books/>} />
          <Route path="/plan/" element={<Plan/>} />
          <Route path="/profile/" element={<Profile/>} />
        </Routes>
      </Layout>
    
  );
}

export default App;
