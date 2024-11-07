import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Wong",
    course: "IELTS Academic",
    quote: "Thanks to Global Education Institute, I achieved my target band score and secured admission to my dream university!",
  },
  {
    name: "Maria Garcia",
    course: "IELTS Professional",
    quote: "The personalized coaching helped me improve my English skills significantly, leading to a successful job application abroad.",
  },
  {
    name: "Raj Patel",
    course: "PTE Academic",
    quote: "The institute's comprehensive approach and practice materials were crucial in helping me ace the PTE Academic test.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.course}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;