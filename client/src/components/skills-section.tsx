import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "blue",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "green",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "Express.js", level: 75 }
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "purple",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 65 },
      { name: "Firebase", level: 70 }
    ]
  },
  {
    title: "Tools & Others",
    icon: Settings,
    color: "orange",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 55 }
    ]
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      category.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                      category.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
                      category.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900' :
                      'bg-orange-100 dark:bg-orange-900'
                    }`}>
                      <category.icon className={`text-2xl ${
                        category.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        category.color === 'green' ? 'text-green-600 dark:text-green-400' :
                        category.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                        'text-orange-600 dark:text-orange-400'
                      }`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: '100%' } : {}}
                          transition={{ duration: 1, delay: (index * 0.2) + (skillIndex * 0.1) }}
                          className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2"
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              category.color === 'blue' ? 'bg-blue-600 dark:bg-blue-400' :
                              category.color === 'green' ? 'bg-green-600 dark:bg-green-400' :
                              category.color === 'purple' ? 'bg-purple-600 dark:bg-purple-400' :
                              'bg-orange-600 dark:bg-orange-400'
                            }`}
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
