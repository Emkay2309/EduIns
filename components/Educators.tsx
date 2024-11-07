import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const educators = [
  {
    name: "Dr. Emily Johnson",
    role: "IELTS Academic Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Prof. Michael Chen",
    role: "IELTS Professional Expert",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Sarah Thompson",
    role: "PTE Academic Instructor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Educators: React.FC = () => {
  return (
    <section id="educators" className="w-full py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Educators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educators.map((educator, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={educator.image} alt={educator.name} />
                  <AvatarFallback>{educator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle>{educator.name}</CardTitle>
                <CardDescription>{educator.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">Expert in language instruction with years of experience in preparing students for international exams.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educators;