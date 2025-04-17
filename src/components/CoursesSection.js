import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsStars } from 'react-icons/bs';
import { FaLaptopCode, FaMobile, FaNetworkWired, FaCloud, FaRobot, FaChartLine } from 'react-icons/fa';

export const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Development' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'data', label: 'Data Science' }
  ];
  
  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'web',
      level: 'Intermediate',
      duration: '12 weeks',
      description: 'Master MERN stack development with real-world client projects and industry mentorship.',
      icon: <FaLaptopCode className="text-3xl text-blue-500" />,
      featured: true,
      thinkCoins: 500,
      popular: true
    },
    {
      id: 2,
      title: 'Flutter Mobile App Development',
      category: 'mobile',
      level: 'Beginner to Intermediate',
      duration: '8 weeks',
      description: 'Build cross-platform mobile applications with Flutter and Dart from scratch.',
      icon: <FaMobile className="text-3xl text-green-500" />,
      featured: false,
      thinkCoins: 350
    },
    {
      id: 3,
      title: 'Ethical Hacking Masterclass',
      category: 'cybersecurity',
      level: 'Advanced',
      duration: '10 weeks',
      description: 'Learn penetration testing, vulnerability assessment, and security hardening techniques.',
      icon: <FaNetworkWired className="text-3xl text-red-500" />,
      featured: false,
      thinkCoins: 600,
      popular: true
    },
    {
      id: 4,
      title: 'AWS Cloud Architecture',
      category: 'cloud',
      level: 'Intermediate to Advanced',
      duration: '8 weeks',
      description: 'Design and implement scalable, secure cloud solutions using AWS services.',
      icon: <FaCloud className="text-3xl text-yellow-500" />,
      featured: true,
      thinkCoins: 450
    },
    {
      id: 5,
      title: 'Machine Learning with Python',
      category: 'ai',
      level: 'Intermediate',
      duration: '10 weeks',
      description: 'Build ML models for real-world problems using Python, TensorFlow, and PyTorch.',
      icon: <FaRobot className="text-3xl text-purple-500" />,
      featured: false,
      thinkCoins: 550,
      popular: true
    },
    {
      id: 6,
      title: 'Data Visualization & Analytics',
      category: 'data',
      level: 'Beginner to Intermediate',
      duration: '6 weeks',
      description: 'Transform raw data into meaningful insights using modern visualization tools.',
      icon: <FaChartLine className="text-3xl text-cyan-500" />,
      featured: false,
      thinkCoins: 300
    }
  ];
  
  // Filter courses based on active category
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section className="my-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
          Popular Courses
        </h2>
      </motion.div>
      
      {/* Categories Filter */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>
      
      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <motion.div 
            key={course.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            layout
            className="group"
          >
            <div className={`p-[2px] rounded-xl h-full ${
              course.featured 
                ? 'bg-gradient-to-r from-blue-500 to-green-500' 
                : 'bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-blue-500/50 group-hover:to-green-500/50'
            } transition-all duration-500`}>
              <div className="bg-gray-800 backdrop-blur-md rounded-xl p-8 h-full flex flex-col">
                {/* Course Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>{course.icon}</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">
                      <BsStars className="mr-1" /> {course.thinkCoins} Coins
                    </div>
                    {course.popular && (
                      <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                        Popular
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Course Title */}
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  {course.title}
                </h3>
                
                {/* Course Details */}
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span className="mr-3">{course.level}</span>
                  <span className="flex items-center before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-gray-400 before:rounded-full before:mr-3">
                    {course.duration}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 flex-grow">{course.description}</p>
                
                <Link href={`/course/${course.id}`} className="inline-flex items-center text-blue-400 group-hover:text-green-400 transition-colors">
                  <span className="mr-2">View Course</span>
                  <BsArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Empty state message when no courses match the filter */}
      {filteredCourses.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-xl text-gray-400">No courses available in this category yet.</p>
          <button 
            onClick={() => setActiveCategory('all')}
            className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all courses instead
          </button>
        </motion.div>
      )}
      
      {/* View All Courses */}
      <motion.div 
        className="text-center mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <Link href="/courses" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full text-lg font-bold inline-block transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
          View All Courses
        </Link>
      </motion.div>
    </section>
  );
};