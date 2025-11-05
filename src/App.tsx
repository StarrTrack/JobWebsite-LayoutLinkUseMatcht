import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { VacancyList } from './components/VacancyList';
import { About } from './components/About';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<VacancyList />} />
        <Route path="vacancies" element={<VacancyList />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}