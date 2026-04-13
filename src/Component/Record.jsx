import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Briefcase, Globe, HeartHandshake, TrendingUp } from 'lucide-react';

const stats = [
  {
    id: 1,
    end: 10,
    suffix: '+',
    label: 'Projects',
    sublabel: 'Delivered',
    icon: Briefcase,
    duration: 1.5,
  },
  {
    id: 2,
    end: 100,
    suffix: '+',
    label: 'Clients',
    sublabel: 'Worldwide',
    icon: Globe,
    duration: 1.5,
  },
  {
    id: 3,
    end: 100,
    suffix: '%',
    label: 'Client',
    sublabel: 'Satisfaction',
    icon: HeartHandshake,
    duration: 2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Record = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-800" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-100">Our Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Delivering excellence with every project, building lasting relationships
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Counter */}
                <div className="text-center mb-3">
                  <h3 className="text-5xl font-bold text-white mb-1">
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.end}
                        duration={stat.duration}
                        separator=","
                      />
                    )}
                    <span className="text-blue-300">{stat.suffix}</span>
                  </h3>
                </div>

                {/* Labels */}
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">
                    {stat.label}
                  </p>
                  <p className="text-sm text-blue-200">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Record;