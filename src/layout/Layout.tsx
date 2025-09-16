import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
    return (
        <div className={`min-h-screen`}>
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}