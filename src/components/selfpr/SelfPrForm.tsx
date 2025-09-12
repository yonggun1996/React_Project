"use client";

import { useState } from "react";
import FormField from "./FormField";

const initialQuestions = [
  {
    id: 1,
    title: "1. 지원 동기",
    guide: "회사의 비전과 자신의 가치를 연결하여 지원 동기를 작성해 주세요.",
    maxLength: 1000,
  },
  {
    id: 2,
    title: "2. 성장 과정 및 역량",
    guide: "자신의 성장 과정과 직무 관련 역량을 보여줄 수 있는 경험을 작성해 주세요.",
    maxLength: 1500,
  },
  {
    id: 3,
    title: "3. 성격의 장단점",
    guide: "자신의 장점과 단점, 그리고 단점을 극복하기 위한 노력을 작성해 주세요.",
    maxLength: 1000,
  },
  {
    id: 4,
    title: "4. 입사 후 포부",
    guide: "입사 후 회사에 기여할 방법과 자신의 성장 계획을 작성해 주세요.",
    maxLength: 1500,
  }
];

export default function ResumeForm() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [nextId, setNextId] = useState(5);

  const addNewTemplate = () => {
    const newQuestion = {
        id: nextId,
        title: `${questions.length + 1}. 추가 질문`,
        guide: "새로운 질문을 작성해 주세요.",
        maxLength: 1000,
    }

    setQuestions([...questions, newQuestion]);
    setNextId(nextId + 1);
  };

  const handleTitleChange = (id: number, newTitle: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, title: newTitle } : q
    ));
  };

  const handleMaxLengthChange = (id: number, newMaxLength: number) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, maxLength: newMaxLength } : q
    ));
  };

  return (
    <div className="mt-8">
      <form className="space-y-6">
        {questions.map((q) => (
          <FormField
            key={q.id}
            title={q.title}
            guide={q.guide}
            maxLength={q.maxLength}
            isEditable={q.id > 4} // 기본 4개 질문은 편집 불가, 추가된 질문만 편집 가능
            onTitleChange={(newTitle) => handleTitleChange(q.id, newTitle)}
            onMaxLengthChange={(newMaxLength) => handleMaxLengthChange(q.id, newMaxLength)}
          />
        ))}
      </form>
      
      {/* 추가 템플릿 버튼 */}
      {questions.length < 10 && (
        <button 
          onClick={addNewTemplate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-6"
        >
          + 추가 템플릿 만들기
        </button>
      )}
    </div>
  );
}