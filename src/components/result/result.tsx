"use client";

interface ResultProps {
    originalText: string;
    correctedText: string;
    onCopy: () => void;
}

export default function Result({ originalText, correctedText, onCopy }: ResultProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* 원본 텍스트 */}
        <div className="bg-gray-100 rounded-lg p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4 text-black">원본 텍스트</h2>
          <div className="bg-white rounded p-4 min-h-[300px] mb-4 border border-gray-300">
            <p className="whitespace-pre-wrap text-black">{originalText}</p>
          </div>
          <p className="text-sm text-gray-600">{originalText.length} 자</p>
        </div>
  
        {/* AI 교정 텍스트 */}
        <div className="bg-gray-100 rounded-lg p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4 text-black">AI 교정 텍스트</h2>
          <div className="bg-white rounded p-4 min-h-[300px] mb-4 border border-gray-300">
            <p className="whitespace-pre-wrap text-black">{correctedText}</p>
          </div>
          <p className="text-sm text-gray-600 mb-4">{correctedText.length} 자</p>
          
          {/* 액션 버튼들 */}
          <div className="flex gap-3">
            <button
              onClick={onCopy}
              className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
            >
              <span className="mr-2">📄</span>
              복사
            </button>
          </div>
        </div>
      </div>
    );
  }