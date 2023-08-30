'use client';
// pages/contact.tsx
import React from 'react';
import Head from 'next/head';
import ContactForm from '@/components/contact/ContactForm';
import ContactFormData from '@/components/contact/ContactFormData';
import Cover from '@/components/Cover';

const ContactPage: React.FC = () => {
    const handleSubmit = (data: ContactFormData) => {
        console.log('Form data:', data);
    };
    return (  
        <>
            <Cover />
            <div className='mt-10'>
                <h1 className={"contact-us"}>Contact Us</h1>
                <p className={"contact-desc"}>Feel free to reach out to us using the form below:</p>
                <ContactForm onSubmit={handleSubmit} />
            </div>

        </>
    );
};

export default ContactPage;