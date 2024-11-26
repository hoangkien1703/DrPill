import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Consultation = lazy(() => import('./pages/Consultation'));
const Profile = lazy(() => import('./pages/Profile'));
const Pharmacy = lazy(() => import('./pages/Pharmacy'));
const Blog = lazy(() => import('./pages/Blog'));
const Auth = lazy(() => import('./pages/Auth'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;