import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Can you develop a custom solution for my business?",
    answer:
      "Yes! We tailor software solutions to fit your specific needs, ensuring scalability, security, and high performance.",
  },
  {
    question: "How long does it take to develop a project?",
    answer:
      "Project timelines depend on complexity, features, and requirements. Typically, it can take anywhere from a few weeks to several months.",
  },
  {
    question: "Do you offer support after project completion?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and technical support after delivery.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with startups, e-commerce businesses, SaaS companies, and many other industries.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact us with your project idea, and we will schedule a consultation to discuss your requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl bg-[#DFe8FF] shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 bg-white text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}