import React from 'react';
import { skills } from '../../constants/skills';
import { motion } from 'motion/react'; // ✅ Use correct import

const SkillSection = () => {
  return (
    <section className="w-full my-10 p-10 md:p-24">
      
      {/* Section Header */}
      <motion.div
      initial={{ x: -150, opacity: 0 }}
                whileInView={
                    {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1}
                    }
                }
      viewport={{ once: true }} 
      className="flex items-center gap-2 mb-8">
        <h1 className="text-3xl font-bold">
          <span className="text-[#c470db]">#</span>Skills
        </h1>
        <div className="h-[1px] w-[30vw] bg-[#9602bf] dark:bg-[#c470db]" />
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.2 }}
            className="border overflow-hidden"
          >
            {/* Skill Card Header */}
            <div className="border-b p-4 flex items-center">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <skill.logo className="text-2xl text-[#c470db]" />
                {skill.title}
              </h2>
            </div>

            {/* Technologies List */}
            <div className="flex flex-wrap p-4">
              {skill.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-2 border mx-2 my-2  hover:bg-[#c470db] hover:bg-opacity-10 "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
