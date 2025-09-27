"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAiCorrectorResultStore } from "@/stores/aiCorrectorStore";
import Header from "@/components/layout/header";
import Result from "@/components/result/result";

export default function ResultPage() {
  const router = useRouter();
  const { title, originalText, correctedText } = useAiCorrectorResultStore();

  // 복사 기능
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(correctedText);
      alert('교정된 텍스트가 복사되었습니다.');
    } catch (error) {
      console.error('복사 실패:', error);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black p-8">
      {/* 헤더 */}
      <Header
        title={`${title} 교정 결과`}
        description="AI가 교정한 텍스트를 확인하고 저장하세요"
        showDescription={true}
        showBackButton={true}
      />

      {/* 비교 패널 */}
      <Result
        originalText={originalText}
        correctedText={correctedText}
        onCopy={handleCopy}
      />
    </main>
  );
}