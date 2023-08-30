import './globals.css';
import type { Metadata } from 'next';
import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { MenuProvider } from '@/components/Provider';
import BottomToTop from '@/components/BottomToTop';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: 'Harshit Jain',
    description: 'Create New Space To Your Work',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <MenuProvider>
                    <Toaster />
                    <div className="flex">
                        <SideBar />
                        <main className="flex-1 pl-0 lg:pl-[300px]">
                            <Navbar />
                            {children}
                        </main>
                    </div>
                </MenuProvider>
                <BottomToTop />
            </body>
        </html>
    );
}
