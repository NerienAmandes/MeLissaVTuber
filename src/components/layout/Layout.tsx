import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CloudBackground from '../ui/CloudBackground';

export default function Layout() {
  return (
    <div className="grain relative min-h-screen text-ink-brown">
      <CloudBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
