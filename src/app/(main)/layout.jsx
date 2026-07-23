
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
            <Footer></Footer>
            <WhatsAppButton />
        </div>
    );
};

export default layout;