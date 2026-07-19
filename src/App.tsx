import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchedulePage from './pages/SchedulePage';
import VibesPage from './pages/VibesPage';
import MusicPage from './pages/MusicPage';
import ConnectPage from './pages/ConnectPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="vibes" element={<VibesPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="connect" element={<ConnectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
