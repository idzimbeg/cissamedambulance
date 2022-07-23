import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'components/Layouts';
import { AboutPage } from 'modules/AboutPage';
import { HomePage } from 'modules/HomePage';
import { WorkPage } from 'modules/WorkPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<AboutPage />} />
        <Route path="work" element={<WorkPage />} />
      </Route>
    </Routes>
  );
}

export default App;
