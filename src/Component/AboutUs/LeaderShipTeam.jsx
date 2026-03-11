import { User } from "lucide-react";
import { motion } from "framer-motion";
import suvoimg from "../../assets/suvo.png";
import zahidimg from "../../assets/zahid.png";
import rafatulimg from "../../assets/rafatul.png";

const teamMembers = [
  { name: "Maruf Billah", role: "Consultant" },
  { name: "Morshedur Rahman", role: "SQA Engineer and Project Manager" },
  { name: "Saidur Rahman", role: "Full Stack Developer" },
  { name: "Yasir Arafat", role: "Mobile App Developer" },
  { name: "Munna Mia", role: "Frontend Developer, BUBT" },
  { name: "Khirul Islam", role: "Backend Developer (C)" },
  { name: "Kaniz Fatima", role: "Executive" },
  { name: "Towhida Akter", role: "Executive" },
  { name: "Mehedi Hasan Nayeem", role: "Full Stack Developer" },
  { name: "Mahir Sikder Shuvo", role: "Prototype Designer (Former)" },
  { name: "Fazle Rabbi Riyad", role: "Backend Developer Intern (Former)" },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-[#e9edf6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-500 mt-2">
            Experienced professionals driving innovation and excellence
          </p>
        </motion.div>

        {/* Top Leaders */}
        <div className="grid md:grid-cols-3 shadow-2xl gap-0.25 mb-14">

          {/* Leader 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src={suvoimg}
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700/80"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-semibold text-3xl">Mehdi Hasan Shuvo</h3>
              <p className="text-xl opacity-90">Cofounder</p>
            </div>
          </motion.div>

          {/* Leader 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src={zahidimg}
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700/80"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-semibold text-3xl">Md. Zahidul Hasan</h3>
              <p className="text-xl opacity-90">Cofounder</p>
            </div>
          </motion.div>

          {/* Leader 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src={rafatulimg}
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700/80"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-semibold text-3xl">Rafatul Islam</h3>
              <p className="text-xl opacity-90">Cofounder</p>
            </div>
          </motion.div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-y-8 gap-x-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <User className="text-blue-500" size={22} />
              </div>

              <div>
                <h4 className="text-gray-800 font-medium">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}