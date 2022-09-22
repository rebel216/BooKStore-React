import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
// eslint-disable-next-line import/extensions
import Categories from './components/categories.js';
import Header from './components/Header';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', height: '100%' }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/*" element={<div>Dont exist</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
