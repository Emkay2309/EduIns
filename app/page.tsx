import React from 'react';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Educators from '@/components/Educators';
import Testimonials from '@/components/Testimonials';
import EnquiryForm from '@/components/EnquiryForm';
import ExamAssistance from '@/components/ExamAssistance';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Hero />
      <Courses />
      <Educators />
      <Testimonials />
      <ExamAssistance />
      <EnquiryForm />
    </div>
  );
}

export default Home;