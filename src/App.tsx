import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Bot, 
  MessageCircle,
  Palette,
  Target,
  Zap,
  Star,
  Play,
  X,
  Send,
  Mic,
  Share,
  ChevronLeft,
  ChevronRight,
  FileText,
  Users,
  CheckCircle,
  Sparkles,
  Brain,
  Clock,
  Award
} from 'lucide-react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const questions = [
    "Do you want to include a portfolio or GitHub link?",
    "What is your LinkedIn profile URL?",
    "What are your primary programming languages?",
    "What technologies, frameworks, or libraries are you proficient in?",
    "What DevOps tools and cloud platforms do you use?"
  ];

  const templates = [
    { id: 'T1', color: 'bg-blue-500', name: 'Professional' },
    { id: 'T2', color: 'bg-green-500', name: 'Creative' },
    { id: 'T3', color: 'bg-purple-500', name: 'Modern' },
    { id: 'T4', color: 'bg-red-500', name: 'Minimal' }
  ];

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      title: "Smart questioning",
      description: "Zorvyn asks targeted questions to understand exactly what your resume needs for maximum impact."
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI-powered insights",
      description: "Advanced AI analyzes your responses and suggests improvements to make your resume stand out."
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-400" />,
      title: "Personal style",
      description: "Choose from multiple professional templates that match your personality and career goals."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Student-focused",
      description: "Built specifically for students, understanding your unique career journey and challenges."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Real-time creation",
      description: "Watch your resume come to life as you answer questions - no waiting around for results."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Professional quality",
      description: "Generate resumes that meet industry standards and impress hiring managers instantly."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      content: "Zorvyn helped me create a professional resume in minutes. The questions were so relevant!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Business Student", 
      content: "Finally, a resume builder that understands what students actually need. Love the interactive approach!",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Emily Rodriguez",
      role: "Engineering Student",
      content: "The AI asked questions I never thought about. My resume is now way more compelling.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setEmailSubmitted(true);
    
    // After 2 seconds, close email modal and open demo
    setTimeout(() => {
      setShowEmailCapture(false);
      setShowDemo(true);
      setEmailSubmitted(false);
      setEmail('');
    }, 2000);
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Zorvyn</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">How it Works</a>
              <a href="#live-demo" className="text-gray-300 hover:text-blue-400 transition-colors">Live Demo</a>
              <button 
                onClick={() => setShowEmailCapture(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Demo
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Minimal Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Light Corner Gradients */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-radial from-purple-500/10 via-blue-500/5 to-transparent blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Unmatched resume building
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Zorvyn is an AI resume builder that asks the right questions to understand your unique story. 
                No templates to struggle with - just intelligent conversation that creates compelling resumes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setShowEmailCapture(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold"
                >
                  <span>Start Building Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Modal */}
      {showEmailCapture && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl w-full max-w-md overflow-hidden border border-gray-700 relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            
            {/* Close Button */}
            <button 
              onClick={() => setShowEmailCapture(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative z-10 p-8">
              {!emailSubmitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Ready to Build Your Perfect Resume?
                    </h2>
                    <p className="text-gray-400">
                      Join thousands of students who've created outstanding resumes with Zorvyn
                    </p>
                  </div>
                  
                  {/* Email Form */}
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError('');
                          }}
                          placeholder="Enter your email address"
                          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                            emailError 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                          }`}
                          disabled={isSubmitting}
                        />
                        {emailError && (
                          <div className="absolute -bottom-6 left-0 text-red-400 text-sm flex items-center space-x-1">
                            <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">!</span>
                            <span>{emailError}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Creating Your Account...</span>
                        </>
                      ) : (
                        <>
                          <span>Start Building My Resume</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                  
                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>AI-powered resume building</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Professional templates included</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>No credit card required</span>
                    </div>
                  </div>
                  
                  {/* Privacy Note */}
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    We respect your privacy. Your email will only be used for your Zorvyn account.
                  </p>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Welcome to Zorvyn! 🎉
                  </h2>
                  <p className="text-gray-400 mb-4">
                    Your account has been created successfully.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <span className="ml-2 text-sm">Opening your resume builder...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl w-full max-w-6xl h-[80vh] flex overflow-hidden border border-gray-700">
            {/* Chat Interface */}
            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bot className="w-8 h-8 text-blue-400" />
                  <span className="font-semibold text-white">Zorvyn AI</span>
                </div>
                <button 
                  onClick={() => setShowDemo(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-2xl p-4 max-w-md">
                    <p className="text-white font-medium mb-2">
                      {questions[currentQuestion]}
                    </p>
                  </div>
                  
                  {currentQuestion === 0 && (
                    <div className="bg-blue-900/30 rounded-2xl p-4 border border-blue-500/30">
                      <p className="text-blue-100 text-sm leading-relaxed">
                        A results-driven DevSecOps Engineer & Software Developer with 3+ years of experience in cloud 
                        security, automation, and scalable infrastructure. Skilled in AWS, Kubernetes, Terraform, and CI/CD 
                        pipelines, with expertise in secure processes and ensuring system resilience.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-3 bg-gray-800 rounded-full px-4 py-3">
                  <input 
                    type="text" 
                    placeholder="Type your response..."
                    className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                  />
                  <button className="text-gray-400 hover:text-white">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="text-blue-400 hover:text-blue-300">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resume Preview */}
            <div className="w-96 bg-gray-800 border-l border-gray-700 flex flex-col">
              <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <span className="text-gray-300 font-medium">Resume preview</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center space-x-1">
                  <Share className="w-4 h-4" />
                  <span>SHARE</span>
                </button>
              </div>
              
              <div className="flex-1 p-4">
                <div className="bg-white rounded-lg h-full p-6 text-gray-900 overflow-y-auto">
                  <div className="animate-pulse space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="space-y-2 mt-6">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    <div className="mt-6">
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Template Selector */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-300 text-sm font-medium">Resume Templates</span>
                  <div className="flex space-x-1">
                    <button className="text-gray-400 hover:text-white">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {templates.map((template, index) => (
                    <button
                      key={template.id}
                      onClick={() => setCurrentTemplate(index)}
                      className={`w-12 h-8 rounded ${template.color} ${
                        currentTemplate === index ? 'ring-2 ring-white' : ''
                      } transition-all`}
                    >
                      <span className="text-white text-xs font-bold">{template.id}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Grid Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="animate-on-scroll opacity-0 group"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-700 transition-all duration-300">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Watch Zorvyn in Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how Zorvyn asks smart questions and builds your resume in real-time
            </p>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row h-[600px]">
              {/* Chat Interface */}
              <div className="flex-1 flex flex-col border-r border-gray-800">
                <div className="p-4 border-b border-gray-800 flex items-center space-x-3">
                  <Bot className="w-8 h-8 text-blue-400" />
                  <span className="font-semibold text-white">Zorvyn AI Assistant</span>
                  <div className="flex space-x-1 ml-auto">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                </div>
                
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  <div className="bg-gray-800 rounded-2xl p-4 max-w-md animate-fade-in">
                    <p className="text-white font-medium">
                      Hi! I'm Zorvyn, your AI resume assistant. Let's build your perfect resume together. What's your name?
                    </p>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-2xl p-4 border border-blue-500/30 ml-auto max-w-md animate-fade-in" style={{animationDelay: '1s'}}>
                    <p className="text-blue-100">Alex Johnson</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-2xl p-4 max-w-md animate-fade-in" style={{animationDelay: '2s'}}>
                    <p className="text-white font-medium">
                      Great! What's your current field of study or area of expertise?
                    </p>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-2xl p-4 border border-blue-500/30 ml-auto max-w-md animate-fade-in" style={{animationDelay: '3s'}}>
                    <p className="text-blue-100">Computer Science, focusing on AI and Machine Learning</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-2xl p-4 max-w-md animate-fade-in" style={{animationDelay: '4s'}}>
                    <p className="text-white font-medium">
                      {questions[currentQuestion]}
                    </p>
                  </div>
                  
                  {/* Typing indicator */}
                  <div className="flex items-center space-x-2 animate-fade-in" style={{animationDelay: '5s'}}>
                    <div className="bg-gray-800 rounded-2xl p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">Zorvyn is typing...</span>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-800">
                  <div className="flex items-center space-x-3 bg-gray-800 rounded-full px-4 py-3">
                    <input 
                      type="text" 
                      placeholder="Type your response..."
                      className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                    />
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Mic className="w-5 h-5" />
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Resume Preview */}
              <div className="w-full lg:w-96 bg-gray-800 flex flex-col">
                <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                  <span className="text-gray-300 font-medium">Live Resume Preview</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Building...</span>
                  </div>
                </div>
                
                <div className="flex-1 p-4">
                  <div className="bg-white rounded-lg h-full p-6 text-gray-900 overflow-y-auto">
                    {/* Resume Header - Builds First */}
                    <div className="animate-fade-in">
                      <h1 className="text-2xl font-bold text-gray-900 mb-1">Alex Johnson</h1>
                      <p className="text-gray-600 mb-4">Computer Science Student</p>
                    </div>
                    
                    {/* Contact Info - Builds Second */}
                    <div className="animate-fade-in border-b pb-4 mb-4" style={{animationDelay: '1s'}}>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>📧 alex.johnson@email.com</p>
                        <p>📱 (555) 123-4567</p>
                        <p>🔗 linkedin.com/in/alexjohnson</p>
                      </div>
                    </div>
                    
                    {/* Summary - Builds Third */}
                    <div className="animate-fade-in mb-6" style={{animationDelay: '2s'}}>
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">Professional Summary</h2>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Passionate Computer Science student specializing in AI and Machine Learning. 
                        Strong foundation in programming and data analysis with hands-on project experience.
                      </p>
                    </div>
                    
                    {/* Skills - Builds Fourth */}
                    <div className="animate-fade-in mb-6" style={{animationDelay: '3s'}}>
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">Technical Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'JavaScript', 'React', 'TensorFlow', 'SQL', 'Git'].map((skill, index) => (
                          <span 
                            key={skill} 
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs animate-fade-in"
                            style={{animationDelay: `${3.5 + index * 0.2}s`}}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Education - Builds Fifth */}
                    <div className="animate-fade-in mb-6" style={{animationDelay: '5s'}}>
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">Education</h2>
                      <div className="text-sm">
                        <p className="font-medium">Bachelor of Science in Computer Science</p>
                        <p className="text-gray-600">University Name • Expected 2025</p>
                        <p className="text-gray-600">GPA: 3.8/4.0</p>
                      </div>
                    </div>
                    
                    {/* Projects - Builds Last */}
                    <div className="animate-fade-in" style={{animationDelay: '6s'}}>
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">Projects</h2>
                      <div className="text-sm space-y-2">
                        <div>
                          <p className="font-medium">AI Chatbot Development</p>
                          <p className="text-gray-600">Built using Python and TensorFlow</p>
                        </div>
                        <div>
                          <p className="font-medium">Web Application Portfolio</p>
                          <p className="text-gray-600">React-based responsive design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Template Selector */}
                <div className="p-4 border-t border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300 text-sm font-medium">Templates</span>
                    <span className="text-xs text-gray-400">Auto-updating</span>
                  </div>
                  <div className="flex space-x-2">
                    {templates.map((template, index) => (
                      <button
                        key={template.id}
                        onClick={() => setCurrentTemplate(index)}
                        className={`w-12 h-8 rounded ${template.color} ${
                          currentTemplate === index ? 'ring-2 ring-white' : ''
                        } transition-all hover:scale-105`}
                      >
                        <span className="text-white text-xs font-bold">{template.id}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Zorvyn Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three simple steps to your perfect resume
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Answer Smart Questions",
                description: "Zorvyn asks targeted questions about your background, skills, and goals to understand your unique story.",
                icon: <MessageCircle className="w-8 h-8" />
              },
              {
                step: "2", 
                title: "Choose Your Style",
                description: "Pick from professionally designed templates that match your personality and career aspirations.",
                icon: <Palette className="w-8 h-8" />
              },
              {
                step: "3",
                title: "Watch It Build",
                description: "Your resume appears in real-time as you provide information, with instant feedback and suggestions.",
                icon: <Sparkles className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-on-scroll opacity-0">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Perfect Resume?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who've already created outstanding resumes with Zorvyn
          </p>
          <button 
            onClick={() => setShowEmailCapture(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 text-lg font-semibold"
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-white">Zorvyn</span>
              </div>
              <p className="text-gray-400">
                The AI resume builder that asks the right questions
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zorvyn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;