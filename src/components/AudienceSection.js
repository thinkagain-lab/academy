import React from 'react';
import AnimatedButton from './AnimatedButton';

const AudienceSection = () => {
  const audiences = [
    {
      icon: "🎓",
      title: "Students",
      description: "Geography, GIS, Remote Sensing, Environmental Science, Computer Science, and Engineering students"
    },
    {
      icon: "👨‍💼",
      title: "Professionals",
      description: "GIS specialists, Remote sensing analysts, Urban planners, Environmental consultants"
    },
    {
      icon: "🔬",
      title: "Researchers",
      description: "Academic researchers in Earth sciences, Climate studies, and Environmental monitoring"
    },
    {
      icon: "💻",
      title: "Developers",
      description: "Software developers interested in geospatial applications and AI integration"
    },
    {
      icon: "🌱",
      title: "Beginners",
      description: "Anyone interested in starting a career in the growing field of GeoAI and Earth Observation"
    }
  ];

  return (
    <section className="bg-gray-800 rounded-xl py-16 px-6 my-16">
      <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
        Who Should Attend?
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {audiences.map((audience, index) => (
          <div key={index} className="group cursor-pointer transition-all duration-300 hover:-translate-y-2 h-full">
            <div className="p-[1.5px] rounded-xl h-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
              <div className="bg-gray-800 rounded-xl p-6 text-center h-full flex flex-col relative overflow-hidden">
                {/* Animation effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                     style={{background: "radial-gradient(circle at 50% 0%, rgba(52, 211, 153, 0.3), transparent 70%)"}}></div>
                
                <div className="text-5xl mb-4 text-green-500 relative z-10">{audience.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-500 relative z-10">{audience.title}</h3>
                <p className="text-gray-300 text-sm flex-grow relative z-10">{audience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-xl mb-6">See yourself in one of these categories? This masterclass is crafted for you!</p>
        <a href="#register">
          <AnimatedButton>
            Reserve Your Place Today
          </AnimatedButton>
        </a>
      </div>
    </section>
  );
};

export default AudienceSection;