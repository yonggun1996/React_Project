import SelfprForm from "@/components/selfpr/SelfPrForm";

export default function ResumePage() {
    return (
      <main className="flex justify-center p-8 bg-white min-h-screen">
        <div className="max-w-3xl w-full text-black">
          <h1 className="text-2xl font-bold text-center">자기소개서 작성</h1>
          <p className="text-center text-gray-600 mt-2">
            각 항목별로 자신을 효과적으로 표현해보고, AI의 도움을 받아 문장을 교정해보세요
          </p>
          <SelfprForm />
        </div>
      </main>
    );
}
