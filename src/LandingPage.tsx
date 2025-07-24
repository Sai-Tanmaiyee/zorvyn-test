import { useRef, useState } from "react";
import { Bot, Clock, Target, Palette, MessageCircle, Brain, Award } from "lucide-react";
import EmailCaptureModal from "../components/EmailCapture";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  // Smooth scroll helper (optional, if you want programmatic scrolling)
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
 const featuresRef = useRef<HTMLElement>(null);
   const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

 const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email.trim()) return;

    // Simulate saving the email (e.g. API call)
    console.log("Email submitted:", email);
    setShowSuccess(true);

    // Simulate delay before redirect or navigation
    setTimeout(() => {
      setShowModal(false);
      setShowSuccess(false);
      setEmail("");
          navigate("/chat");

      // Navigate to chat page or builder
      // e.g., router.push("/chat");
    }, 3000);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <h1 className="text-white text-xl font-bold cursor-pointer" onClick={() => scrollToSection("hero")}>
            Zorvyn
          </h1>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </a>
            <a href="#live-demo" className="text-gray-300 hover:text-white transition">
              Live Demo
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition">
              How It Works
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg"
            onClick={() => scrollToSection("email-capture")}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-4xl">
          Build Your Perfect Resume with <span className="text-blue-500">Zorvyn AI</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Your AI-powered resume builder that asks smart questions, personalizes content, and generates professional resumes in real-time.
        </p>
        <button
          onClick={() => setShowModal(true)}      
          className="mt-10 bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-lg font-semibold text-lg"
        >
          Get Started for Free
        </button>
      </section>
      <EmailCaptureModal
        visible={showModal}
        showSuccess={showSuccess}
        email={email}
        setEmail={setEmail}
        onClose={() => {
          setShowModal(false);
          setShowSuccess(false);
          setEmail("");
        }}
        onSubmit={handleSubmit}
      />
        {/* Features Section (6 Cards) */}
        <section
          ref={featuresRef}
          className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-xl p-8 space-y-4">
            <MessageCircle className="w-7 h-7 text-blue-500" />
            <h3 className="text-white text-xl font-semibold">Smart questioning</h3>
            <p className="text-gray-400 leading-relaxed">
              Zorvyn asks targeted questions to understand exactly what your
              resume needs for maximum impact.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 rounded-xl p-8 space-y-4">
            <Brain className="w-7 h-7 text-blue-500" />
            <h3 className="text-white text-xl font-semibold">AI-powered insights</h3>
            <p className="text-gray-400 leading-relaxed">
              Advanced AI analyzes your responses and suggests improvements to
              make your resume stand out.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-800 rounded-xl p-8 space-y-4">
            <Palette className="w-7 h-7 text-blue-500" />
            <h3 className="text-white text-xl font-semibold">Personal style</h3>
            <p className="text-gray-400 leading-relaxed">
              Choose from multiple professional templates that match your
              personality and career goals.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-gray-800 rounded-xl p-8 space-y-4">
            <Target className="w-7 h-7 text-blue-500" />
            <h3 className="text-white text-xl font-semibold">Student-focused</h3>
            <p className="text-gray-400 leading-relaxed">
              Built specifically for students, understanding your unique career
              journey and challenges.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-gray-800 rounded-xl p-8 space-y-4">
            <Clock className="w-7 h-7 text-blue-500" />
            <h3 className="text-white text-xl font-semibold">Real-time creation</h3>
            <p className="text-gray-400 leading-relaxed">
              Watch your resume come to life as you answer questions – no
              waiting around for results.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-gray-800 rounded-xl p-8 space-y-4">
            <Award className="w-7 h-7 text-blue-500" />
            <h3 className="text-white text-xl font-semibold">Professional quality</h3>
            <p className="text-gray-400 leading-relaxed">
              Generate resumes that meet industry standards and impress hiring
              managers instantly.
            </p>
          </div>
        </section>

      {/* Live Demo / Chat Preview Section */}
      <section
        id="live-demo"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
      >
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
                  {/* Example chat bubbles */}
                  <div className="bg-gray-800 rounded-2xl p-4 max-w-md animate-fade-in">
                    <p className="text-white font-medium">
                      Hi! I'm Zorvyn, your AI resume assistant. Let's build your perfect resume together. What's your name?
                    </p>
                  </div>

                  <div
                    className="bg-blue-900/30 rounded-2xl p-4 border border-blue-500/30 ml-auto max-w-md animate-fade-in"
                    style={{ animationDelay: "1s" }}
                  >
                    <p className="text-blue-100">Alex Johnson</p>
                  </div>

                  <div
                    className="bg-gray-800 rounded-2xl p-4 max-w-md animate-fade-in"
                    style={{ animationDelay: "2s" }}
                  >
                    <p className="text-white font-medium">
                      Great! What's your current field of study or area of expertise?
                    </p>
                  </div>

                  <div
                    className="bg-blue-900/30 rounded-2xl p-4 border border-blue-500/30 ml-auto max-w-md animate-fade-in"
                    style={{ animationDelay: "3s" }}
                  >
                    <p className="text-blue-100">
                      Computer Science, focusing on AI and Machine Learning
                    </p>
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
                      {/* Mic icon placeholder */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 1v11m0 0a3 3 0 003-3v-1a3 3 0 00-6 0v1a3 3 0 003 3zm0 0v3m4 0a4 4 0 01-8 0"
                        />
                      </svg>
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      {/* Send icon placeholder */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
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
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Alex Johnson</h1>
                    <p className="text-gray-600 mb-4">Computer Science Student</p>

                    {/* Add more resume content here... */}
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Passionate Computer Science student specializing in AI and Machine Learning.
                        Strong foundation in programming and data analysis with hands-on project experience.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-2">Technical Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'JavaScript', 'React', 'TensorFlow', 'SQL', 'Git'].map(skill => (
                          <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-2">Education</h2>
                      <p>Bachelor of Science in Computer Science</p>
                      <p>University Name • Expected 2025</p>
                      <p>GPA: 3.8/4.0</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold mb-2">Projects</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>AI Chatbot Development - Built using Python and TensorFlow</li>
                        <li>Web Application Portfolio - React-based responsive design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Zorvyn Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step-by-step process to get your resume ready in minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-gray-300">
          <div>
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-xl">1</div>
            <h3 className="text-white text-2xl font-semibold mb-2">Answer Smart Questions</h3>
            <p>Our AI asks personalized questions to capture your skills and experiences.</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-xl">2</div>
            <h3 className="text-white text-2xl font-semibold mb-2">Preview Live Resume</h3>
            <p>Watch your resume build itself in real-time with formatting and styling.</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-xl">3</div>
            <h3 className="text-white text-2xl font-semibold mb-2">Download & Apply</h3>
            <p>Export your resume in multiple formats and get ready to land your dream job.</p>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
       <section className="bg-gray-800 text-gray-400 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Perfect Resume?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of students who've already created outstanding resumes with Zorvyn
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
            Get Started Free
          </button>
        </section>

      {/* Contact Section */}
      <footer className="bg-gray-800 text-gray-400 py-20 ">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-6 h-6 text-blue-500" />
                <span className="font-semibold text-white text-lg cursor-default select-none">Zorvyn</span>
              </div>
              <p className="text-sm">The AI resume builder that asks the right questions</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Product</h4>
              <ul className="text-sm space-y-1">
                <li>Features</li>
                <li>Templates</li>
                <li>Pricing</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Help Center</h4>
              <ul className="text-sm space-y-1">
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul className="text-sm space-y-1">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-10">© 2024 Zorvyn. All rights reserved.</p>
        </footer>
    </>
  );
};

export default LandingPage;
