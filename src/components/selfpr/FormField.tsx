"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAiCorrectorStore } from "@/stores/aiCorrectorStore";

interface Props {
  title: string;
  guide: string;
  maxLength: number;
  isEditable?: boolean;
  onTitleChange?: (newTitle: string) => void;
  onMaxLengthChange?: (newMaxLength: number) => void;
}

export default function FormField({ title, guide, maxLength, isEditable = false, onTitleChange, onMaxLengthChange }: Props) {
  const [value, setValue] = useState(""); // 텍스트 영역의 내용을 관리하는 상태
  const [isEditingTitle, setIsEditingTitle] = useState(false); // 제목 편집 모드 상태 (편집 중인지 여부)
  const [editedTitle, setEditedTitle] = useState(title); // 편집 중인 제목의 임시 값
  const [inputValue, setInputValue] = useState(maxLength.toString()); // 최대 글자 수 input의 실제 표시 값 (앞자리 0 제거를 위해 별도 관리)
  const { setTitle, setMaxLength, setTextValue } = useAiCorrectorStore();
  const router = useRouter();

  const handleTitleSave = () => { // 제목 편집 완료 시 실행되는 함수
    if (onTitleChange) {
      onTitleChange(editedTitle);
    }
    setIsEditingTitle(false);
  };

  // AI 교정 버튼 클릭 핸들러
  const handleAICorrection = () => {
    setTitle(editedTitle);
    setMaxLength(maxLength);
    setTextValue(value);
    
    // loading 페이지로 이동
    router.push('/loading');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6 border border-[#323743FF]">
      {/* 제목과 AI 버튼 영역 */}
      <div className="flex items-center justify-between mb-2">
        {isEditingTitle ? (
          // 제목 편집 모드일 때 입력 필드
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleTitleSave}
            onKeyPress={(e) => e.key === 'Enter' && handleTitleSave()}
            className="text-lg font-semibold text-[#323743FF] bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
            autoFocus
          />
        ) : (
          // 제목 표시 모드: 클릭 시 편집 모드로 전환
          <h2 
            className="text-lg font-semibold text-black bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
            onClick={() => isEditable && setIsEditingTitle(true)}
          >
            {title}
          </h2>
        )}
        {/* AI 지원 버튼 */}
        <button 
            type="button" // 폼 제출 방지
            onClick={handleAICorrection}
            className="w-5 h-5 flex items-center justify-center bg-black border border-gray-600 rounded-md hover:bg-gray-900">
          <img src="/aisupport.svg" alt="AI교정버튼" className="w-4 h-4" />
        </button>
      </div>
      
      {/* 가이드 텍스트 */}
      <p className="text-sm text-[#323743FF mb-3">{guide}</p>
      
      {/* 메인 텍스트 입력 영역 */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className="w-full h-40 p-3 rounded-md bg-white border border-[#323743FF] text-[#323743FF] resize-none focus:outline-none focus:border-blue-500"
        placeholder="여기에 작성해주세요..."
      />
      
      {/* 하단 영역: 최대 글자 수 설정과 현재 글자 수 표시 */}
      <div className="flex items-center justify-between mt-2">
        <div className="text-sm text-[#323743FF] flex items-center gap-2">
          <span>최대</span>
          {/* 최대 글자 수 입력 필드 */}
          <input
            type="number"
            value={inputValue}
            onChange={(e) => {
              const newInputValue = e.target.value;
              setInputValue(newInputValue); // 입력 값을 상태에 저장
              
              // 빈 문자열이면 0으로 설정
              if (newInputValue === '') {
                if (onMaxLengthChange) {
                  onMaxLengthChange(0);
                }
                return;
              }
              
              // parseInt로 앞자리 0 제거 (예: "02000" → 2000)
              const newValue = parseInt(newInputValue, 10);
              
              // 유효한 숫자이면 부모 컴포넌트에 전달
              if (!isNaN(newValue)) {
                if (onMaxLengthChange) {
                  onMaxLengthChange(newValue);
                }
              }
            }}
            onBlur={(e) => {
              const inputValue = e.target.value;
              
              // 포커스를 잃을 때 빈 값이면 0으로 설정
              if (inputValue === '') {
                if (onMaxLengthChange) {
                  onMaxLengthChange(0);
                }
                setInputValue('0');
              } else {
                // 앞자리 0 제거 후 부모 컴포넌트에 전달
                const newValue = parseInt(inputValue, 10);
                if (!isNaN(newValue)) {
                  if (onMaxLengthChange) {
                    onMaxLengthChange(newValue);
                  }
                  setInputValue(newValue.toString());
                }
              }
            }}
            className="bg-transparent border-b border-gray-500 text-[#323743FF] focus:outline-none focus:border-blue-500 w-20 text-center"
            min="0"
            placeholder="1000"
          />
          <span>자</span>
        </div>
        <div className="text-sm text-[#323743FF]">
          ({value.length}/{maxLength}자)
        </div>
      </div>
    </div>
  );
}