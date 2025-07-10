import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  LockIcon,
  MicIcon,
  PaperclipIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

export const HomePageDark = (): JSX.Element => {
  const [showResumeTemplates, setShowResumeTemplates] = useState(false);
  const [showFullResume, setShowFullResume] = useState(false);
  const [isTemplatesExpanded, setIsTemplatesExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() && !showResumeTemplates) {
      setShowResumeTemplates(true);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setShowResumeTemplates(true);
      setShowFullResume(true);
    }
  };

  const handlePrevTemplate = () => {
    setCurrentTemplateIndex((prev) => 
      prev === 0 ? Math.max(0, resumeTemplates.length - 4) : prev - 1
    );
  };

  const handleNextTemplate = () => {
    setCurrentTemplateIndex((prev) => 
      prev >= resumeTemplates.length - 4 ? 0 : prev + 1
    );
  };

  // Resume template thumbnails
  const resumeTemplates = [
    { color: "bg-blue-500", alt: "Resume template 1" },
    { color: "bg-green-500", alt: "Resume template 2" },
    { color: "bg-purple-500", alt: "Resume template 3" },
    { color: "bg-red-500", alt: "Resume template 4" },
    { color: "bg-yellow-500", alt: "Resume template 5" },
    { color: "bg-pink-500", alt: "Resume template 6" },
    { color: "bg-indigo-500", alt: "Resume template 7" },
    { color: "bg-orange-500", alt: "Resume template 8" },
  ];

  return (
    <div className="bg-[#0f141a] flex flex-row justify-center w-full">
      <div className="bg-[#0f141a] w-[1440px] h-screen relative overflow-hidden">
        <div className="absolute w-[1433px] h-[797px] top-[1116px] left-[1469px]">
          <img
            className="w-[1022px] h-px left-0 absolute top-0"
            alt="Line"
            src="/line-2.svg"
          />
          <img
            className="absolute w-[1433px] h-[797px] top-0 left-0 object-cover"
            alt="Whatsapp image"
            src="/whatsapp-image-2025-02-08-at-08-38-16-1.png"
          />
        </div>

        <div className="absolute w-[1388px] h-full top-0 left-[38px]">
          {/* Left side - Chat interface */}
          <div className={`absolute top-0 h-full ${showResumeTemplates ? 'left-0 w-[706px]' : 'left-1/2 transform -translate-x-1/2 w-[800px]'}`}>
            <ScrollArea className={`absolute top-0 ${showResumeTemplates ? 'w-[650px] left-10' : 'w-[700px] left-1/2 transform -translate-x-1/2'}`} style={{ height: 'calc(100vh - 90px)' }}>
              <div className="pr-6">
                {/* Chat messages */}
                <div className={`mt-[115px] mb-6 ${showResumeTemplates ? 'ml-[191px]' : 'ml-[152px]'}`}>
                  <Card className="w-[396px] bg-[#232f3e] rounded-2xl border-0">
                    <CardContent className="p-4">
                      <p className="font-normal text-[#f9f9f9] text-[15px]">
                        Built a microservices-based architecture for a fintech
                        app, improving scalability by 50%.
                        <br />
                        Developed a role-based access control (RBAC) system,
                        enhancing authentication security.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-[40px] mb-4">
                  <p className={`font-normal text-[#f9f9f9] text-[15px] ${showResumeTemplates ? 'ml-[42px]' : 'ml-[3px]'}`}>
                    <span className="font-bold">
                      To tailor your Software Engineer resume effectively,{" "}
                      <br />
                    </span>
                    <span>I need to ask a few key questions:</span>
                  </p>
                </div>

                <div className="mt-4 mb-4">
                  <p className={`font-normal text-[#f9f9f9] text-[15px] w-[399px] ${showResumeTemplates ? 'ml-0' : 'ml-[-39px]'}`}>
                    What is your full name and preferred job title?
                    <br />
                    Do you want to include a portfolio or GitHub link?
                    <br />
                    What is your LinkedIn profile URL?
                  </p>
                </div>

                <div className={`mt-[80px] mb-6 ${showResumeTemplates ? 'ml-[194px]' : 'ml-[155px]'}`}>
                  <Card className="w-[396px] bg-[#232f3e] rounded-2xl border-0">
                    <CardContent className="p-4">
                      <p className="font-normal text-[#f9f9f9] text-[15px]">
                        A results-driven DevSecOps Engineer & Software
                        Developer with 3+ years of experience in cloud security,
                        automation, and scalable infrastructure. Skilled in AWS,
                        Kubernetes, Terraform, and CI/CD pipelines, with
                        expertise in secure Passionate about processes and
                        ensuring system resilience.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-[50px] mb-4">
                  <p className={`font-normal text-[#f9f9f9] text-[15px] w-[490px] ${showResumeTemplates ? 'ml-0' : 'ml-[-39px]'}`}>
                    What are your primary programming languages?
                    <br />
                    <br />
                    What technologies, frameworks, or libraries are you
                    proficient in?
                    <br />
                    <br />
                    What <span className="font-bold">DevOps </span>
                    tools and cloud platforms{" "}
                    <span className="font-bold">(AWS, Azure, GCP</span>) do you
                    use?
                    <br />
                  </p>
                </div>
                
                {/* Add some bottom padding to ensure last message is visible */}
                <div className="h-[120px]"></div>
              </div>
              <ScrollBar orientation="vertical" className="w-1 bg-gray-700/30" />
            </ScrollArea>

            {/* Chat input - Fixed at bottom */}
            <div className={`fixed h-[60px] bottom-[10px] bg-[#232f3e] rounded-2xl border-2 border-solid border-[#42b4ff] flex items-center px-4 z-50 ${showResumeTemplates ? 'left-[56px] w-[588px]' : 'left-1/2 transform -translate-x-1/2 w-[700px]'}`}>
              <Button variant="ghost" size="icon" className="mr-2">
                <PaperclipIcon className="w-6 h-6 text-white" />
              </Button>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ask Zorvyn ..."
                className="flex-grow bg-transparent text-white text-[13px] outline-none placeholder-gray-400"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <div className="flex-grow"></div>
              <Button variant="ghost" size="icon" className="mr-2">
                <MicIcon className="w-6 h-6 text-white" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleSendMessage}>
                <ArrowUpCircleIcon className="w-[30px] h-[30px] text-white" />
              </Button>
            </div>

            {/* User avatar */}
            {showResumeTemplates && (
              <img
                className="w-[47px] h-[47px] top-[35px] left-0 absolute object-cover"
                alt="User avatar"
                src="/image-1.png"
              />
            )}

          </div>

          {/* Right side - Resume section */}
          {showResumeTemplates && (
            <div className="absolute w-[686px] left-[702px] h-full">
              <div className="relative h-full">
                {/* Large resume display */}
                <div className="absolute top-[70px] left-[20px] w-[560px] h-[480px] bg-white rounded-lg shadow-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Resume preview"
                    src="/image.png"
                  />
                </div>

                {/* Share button */}
                <div className="absolute top-[20px] right-[60px]">
                  <Button className="w-[85px] h-[38px] bg-[#006ce0] rounded-2xl flex items-center justify-center gap-1">
                    <LockIcon className="w-4 h-4 text-white" />
                    <span className="text-white text-[10px]">SHARE</span>
                  </Button>
                </div>

                {/* Close button for resume section */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-[20px] left-[20px] bg-black/20 hover:bg-black/40 rounded-full z-10"
                  onClick={() => {
                    setShowFullResume(false);
                    setShowResumeTemplates(false);
                  }}
                >
                  <XIcon className="w-6 h-6 text-white" />
                </Button>

                {/* Template selector at bottom */}
                <div className="absolute bottom-[20px] left-[20px] right-[20px] top-[580px]">
                  <div className={`w-full bg-[#232f3e] rounded-lg transition-all duration-300 border border-gray-600 ${isTemplatesExpanded ? 'h-[400px]' : 'h-[180px]'}`}>
                    {/* Header with expand/collapse */}
                    <div className="flex items-center justify-between p-3 border-b border-gray-600">
                      <h3 className="text-white text-sm font-medium">Resume Templates</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-6 h-6"
                        onClick={() => setIsTemplatesExpanded(!isTemplatesExpanded)}
                      >
                        {isTemplatesExpanded ? (
                          <ChevronDownIcon className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronUpIcon className="w-4 h-4 text-white" />
                        )}
                      </Button>
                    </div>

                    {/* Templates content */}
                    <div className="p-6 overflow-hidden">
                      {!isTemplatesExpanded ? (
                        /* Collapsed view - horizontal scroll */
                        <div className="relative">
                          <Button
                            onClick={handlePrevTemplate}
                            variant="ghost"
                            size="icon"
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full"
                          >
                            <ArrowLeftIcon className="w-4 h-4 text-white" />
                          </Button>

                          <div className="flex gap-5 justify-center mx-12">
                            {resumeTemplates.slice(currentTemplateIndex, currentTemplateIndex + 5).map((template, index) => (
                              <div key={`collapsed-${index}`} className="flex-shrink-0">
                                <div
                                  className={`w-[95px] h-[80px] ${template.color} cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-200 rounded-md border border-gray-400 shadow-md`}
                                  onClick={() => setShowFullResume(true)}
                                />
                              </div>
                            ))}
                          </div>

                          <Button
                            onClick={handleNextTemplate}
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full"
                          >
                            <ArrowRightIcon className="w-4 h-4 text-white" />
                          </Button>
                        </div>
                      ) : (
                        /* Expanded view - grid */
                        <ScrollArea className="max-h-[320px]">
                          <div className="grid grid-cols-5 gap-5 pr-4">
                          {resumeTemplates.map((template, index) => (
                            <div
                              key={`expanded-${index}`}
                                className={`w-[95px] h-[120px] ${template.color} cursor-pointer hover:opacity-80 hover:scale-105 transition-all duration-200 rounded-md border border-gray-400 shadow-md`}
                              onClick={() => setShowFullResume(true)}
                            />
                          ))}
                          </div>
                          <ScrollBar orientation="vertical" className="w-1 bg-gray-700/30" />
                        </ScrollArea>
                      )}
                    </div>
                  </div>
                </div>

                {/* Full screen overlay when showFullResume is true */}
                {showFullResume && (
                  <div className="absolute inset-0 bg-[#232f3e] z-50">
                    {/* Close button for full screen */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-[20px] left-[13px]"
                      onClick={() => setShowFullResume(false)}
                    >
                      <XIcon className="w-8 h-8 text-white" />
                    </Button>

                    {/* Full screen template grid */}
                    <div className="grid grid-cols-4 gap-6 px-[58px] pt-[54px]">
                      {resumeTemplates.slice(0, 4).map((template, index) => (
                        <div
                          key={`template-${index}`}
                          className={`w-[140px] h-[180px] ${template.color} cursor-pointer hover:opacity-80 transition-opacity rounded-lg border border-gray-400`}
                          onClick={() => setShowFullResume(false)}
                        />
                      ))}

                      {resumeTemplates.slice(4, 6).map((template, index) => (
                        <div
                          key={`template-second-${index}`}
                          className={`w-[140px] h-[180px] mt-6 ${template.color} cursor-pointer hover:opacity-80 transition-opacity rounded-lg border border-gray-400`}
                          onClick={() => setShowFullResume(false)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};