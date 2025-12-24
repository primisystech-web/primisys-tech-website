import { motion } from "framer-motion";
import { 
  Search, 
  Lightbulb, 
  Code2, 
  TestTube, 
  Rocket, 
  HeadphonesIcon,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: Search,
    phase: "01",
    title: "Discovery",
    description: "Deep dive into your business needs, goals, and challenges through stakeholder interviews and market analysis.",
  },
  {
    icon: Lightbulb,
    phase: "02",
    title: "Strategy & Design",
    description: "Craft tailored solutions with detailed architecture, wireframes, and a clear roadmap for success.",
  },
  {
    icon: Code2,
    phase: "03",
    title: "Development",
    description: "Agile development with iterative sprints, regular demos, and continuous feedback integration.",
  },
  {
    icon: TestTube,
    phase: "04",
    title: "Testing & QA",
    description: "Rigorous quality assurance with automated testing, security audits, and performance optimization.",
  },
  {
    icon: Rocket,
    phase: "05",
    title: "Deployment",
    description: "Seamless launch with zero-downtime deployment, monitoring setup, and knowledge transfer.",
  },
  {
    icon: HeadphonesIcon,
    phase: "06",
    title: "Support & Evolve",
    description: "Ongoing maintenance, 24/7 support, and continuous improvement based on analytics and feedback.",
  },
];

const MethodologyWorkflow = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Our Methodology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4"
          >
            How We Deliver <span className="text-primary">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A proven, systematic approach that transforms your vision into reality 
            with precision, transparency, and measurable results.
          </motion.p>
        </div>

        {/* Workflow Chain - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-4 relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Node */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="w-32 h-32 rounded-2xl bg-card border border-border/50 flex flex-col items-center justify-center mb-4 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shadow-lg">
                    <span className="text-primary/60 text-xs font-bold tracking-widest mb-2">
                      {step.phase}
                    </span>
                    <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-foreground font-semibold text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs text-center leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-16 -right-2 z-20 text-primary/40">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow Chain - Tablet */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary/60 text-xs font-bold tracking-widest">
                        {step.phase}
                      </span>
                      <h3 className="text-foreground font-semibold">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Flow indicator */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-primary/30 md:hidden">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow Chain - Mobile */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40" />
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Node dot */}
                  <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <div className="bg-card border border-border/50 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-primary/60 text-xs font-bold tracking-widest">
                          {step.phase}
                        </span>
                        <h3 className="text-foreground font-semibold text-sm">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyWorkflow;
