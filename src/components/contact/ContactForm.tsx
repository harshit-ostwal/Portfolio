import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className='animate-fade-in flex justify-center items-center mt-10 mb-20'>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name" className='animate-fade-in-top'>Name</label>
        <input type="text" id="name" name="name" className='animate-fade-in-down' value={formData.name} onChange={handleChange} required />

        <label htmlFor="email" className='animate-fade-in-top'>Email</label>
        <input type="email" id="email" name="email" className='animate-fade-in-down' value={formData.email} onChange={handleChange} required />

        <label htmlFor="message" className='animate-fade-in-top'>Message</label>
        <textarea id="message" name="message" className='animate-fade-in-down' value={formData.message} onChange={handleChange} required />

        <button type="submit" className='animate-fade-in-top'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
