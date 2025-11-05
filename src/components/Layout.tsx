import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F8FA' }}>
      <Header />
      <Outlet />
    </div>
  );
}