import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Structure from './pages/Structure';
import Training from './pages/Training';
import Manual from './pages/Manual';
import Gallery from './pages/Gallery';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/training" element={<Training />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;