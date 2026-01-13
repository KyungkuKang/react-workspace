import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import IndexPage from './pages/IndexPage';
function App() {
  return (<>
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/list" element={<ListPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegPage />} />
  </Routes>
    {/*<ReduxCon />*/}
  </>);
}

export default App;