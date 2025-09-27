import { create } from 'zustand';

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