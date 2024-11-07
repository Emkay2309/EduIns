import { Button } from "@/components/ui/button";

const ExamAssistance = () => {
  return (
    <section id="exam-assistance" className="w-full py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Exam Application Assistance</h2>
        <p className="text-center mb-8">
          We provide comprehensive support in applying for IELTS and PTE exams. Our expert team will guide you through the entire process, ensuring a smooth application experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">IELTS Application Support</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Assistance in choosing the right IELTS test date</li>
              <li>Guidance on filling out the application form</li>
              <li>Document verification and submission</li>
              <li>Payment processing support</li>
            </ul>
            <Button>Learn More</Button>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">PTE Academic Application Support</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Help with creating a PTE Academic account</li>
              <li>Assistance in scheduling your test</li>
              <li>Guidance on required documents and ID proofs</li>
              <li>Support with accommodation requests</li>
            </ul>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamAssistance;