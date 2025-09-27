"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    /**
     * loading : ai가 교정중인 상황
     * completed : ai가 확인을 마친 상황
     * pending : ai가 교정 대기중인 상황
     * falied : ai가 교정에 실패한 상황
     */
    {
      icon: "/pending.png",
      text: "자기소개에 맞는 주제를 작성했는지",
      status: "pending"
    },
    {
      icon: "/pending.png",
      text: "맞춤법 교정",
      status: "pending"
    },
    {
      icon: "/pending.png",
      text: "문장의 흐름 교정",
      status: "pending"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(1);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
      {/* 메인 메시지 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI가 교정 중입니다</h1>
      </div>

      {/* 교정 단계들 */}
      <div className="bg-gray-100 rounded-lg p-8 w-full max-w-md border border-gray-300">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-4 last:mb-0">
            <div className="flex-shrink-0 mr-4">
              {step.status === "loading" && index === currentStep ? (
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Image
                  src={step.icon}
                  alt="icon"
                  width={24}
                  height={24}
                />
              )}
            </div>
            <span className="text-gray-700">{step.text}</span>
          </div>
        ))}
      </div>
    </main>
  );
}