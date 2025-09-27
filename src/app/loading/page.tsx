"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAiCorrectorStore, useAiCorrectorResultStore } from "@/stores/aiCorrectorStore";
import Image from "next/image";

export default function LoadingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const { title, maxLength, textValue } = useAiCorrectorStore();
  const { setTitle, setOriginalText, setCorrectedText } = useAiCorrectorResultStore();
  const router = useRouter();

  const [steps, setSteps] = useState([
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
  ]);

  useEffect(() => {
    console.log(title, maxLength, textValue);
    if (title === "" || maxLength === 0 || textValue === "") {
        window.alert("자기소개서 작성이 완료되지 않았습니다.");
        router.push("/selfpr");
    }

    const processSteps = async () => {
        for (let i = 0; i < steps.length; i++) {
            setSteps(prev => prev.map((step, index) => 
                index === i 
                  ? { ...step, status: "loading" }
                  : step
            ));

            setCurrentStep(i);

            // 2초 대기
            await new Promise(resolve => setTimeout(resolve, 2000));
        
            // 완료로 변경
            setSteps(prev => prev.map((step, index) => 
                index === i 
                ? { ...step, status: "completed", icon: "/success.png" }
                : step
            ));
        }

        // 모든 단계 완료 후 최종 결과 설정
        setTitle(title);
        setOriginalText(textValue);
        setCorrectedText("교정된 텍스트 예시입니다. 실제로는 AI가 교정한 결과가 여기에 표시됩니다.");

        // 모든 단계 완료 후 결과 페이지로 이동
        router.push("/selfpr/result");
    };

    processSteps();
  }, [textValue, title, maxLength]);

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