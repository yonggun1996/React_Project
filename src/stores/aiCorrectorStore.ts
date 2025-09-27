import { create } from 'zustand';

/**
 * 자기소개서 작성 -> 교정 요청 페이지
 * selfpr/page -> loading/page
 */
interface MyPrData {
  title: string; // 자소서 항목
  maxLength: number; // 최대 글자수
  textValue: string; // 자소서 내용
  setTitle: (title: string) => void;
  setMaxLength: (maxLength: number) => void;
  setTextValue: (textValue: string) => void;
}

export const useAiCorrectorStore = create<MyPrData>((set) => ({
  title: '',
  maxLength: 0,
  textValue: '',

  setTitle: (title: string) => set({ title }),
  setMaxLength: (maxLength: number) => set({ maxLength }),
  setTextValue: (textValue: string) => set({ textValue }),
}));

/**
 * 교정 요청 페이지 -> 교정 결과 페이지
 * loading/page -> selfpr/result/page
 */
interface MyPrResultData {
  title: string;
  originalText: string;
  correctedText: string;
  setTitle: (title: string) => void;
  setOriginalText: (originalText: string) => void;
  setCorrectedText: (correctedText: string) => void;
}

export const useAiCorrectorResultStore = create<MyPrResultData>((set) => ({
  title: '', // 자소서 항목
  originalText: '', // 교정 이젠 텍스트
  correctedText: '', // 교정 결과 텍스트

  setTitle: (title: string) => set({ title }),
  setOriginalText: (originalText: string) => set({ originalText }),
  setCorrectedText: (correctedText: string) => set({ correctedText }),
}));