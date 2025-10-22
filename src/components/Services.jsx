import { Globe, Smartphone, Brain, Briefcase, Palette, Bot, Blocks, Code } from "lucide-react";
import serviceImg from "../assets/service.jpg"

const services = [
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: "Website Design & Development",
    desc: "We create fast, secure, and scalable websites that combine design with seamless user experiences, helping your business stand out and succeed online."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    title: "App Design & Development",
    desc: "We build high-performance mobile apps with sleek design, seamless usability, and strong security, helping your business grow on iOS, Android, and beyond."
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    title: "Gen AI Product Development",
    desc: "From AI chatbots to intelligent automation, we craft innovative Gen AI products that enhance efficiency, improve customer experience, and drive business growth."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    title: "Business Tech Consulting",
    desc: "We drive digital transformation with tailored solutions in IT, automation, and business intelligence to innovate, adapt, and achieve sustainable growth."
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-400" />,
    title: "UI/UX Research & Design",
    desc: "We craft intuitive UI/UX designs that combine research, creativity, and usability, delivering engaging digital experiences."
  },
  {
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    title: "AI & ML Solutions",
    desc: "We deliver AI and ML solutions that optimize processes, fuel innovation, and transform data into insights tailored to your business needs."
  },
  {
    icon: <Blocks className="w-8 h-8 text-blue-400" />,
    title: "Blockchain Development",
    desc: "We build secure and scalable blockchain solutions—ensuring transparency, efficiency, and long-term value."
  },
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    title: "Custom Software Development",
    desc: "We develop tailored software solutions designed to streamline operations, improve efficiency, and ensure long-term growth."
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-transparent text-white py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <p className="text-blue-400 uppercase tracking-wide text-sm font-medium">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">We Are Digital Agency</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-[35px] h-96 overflow-hidden p-6 border border-blue-500/20 backdrop-blur-md hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
          >
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#194EFF] to-[#00041F]"></div>
            <img
              src={serviceImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
