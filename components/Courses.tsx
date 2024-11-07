import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const courses = [
  {
    title: "IELTS Academic",
    description: "Prepare for university admissions and professional registration",
  },
  {
    title: "IELTS Professional",
    description: "Tailored for work and migration purposes",
  },
  {
    title: "PTE Academic",
    description: "Computer-based English test for study abroad and immigration",
  },
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;