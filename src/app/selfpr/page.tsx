import SelfprForm from "@/components/selfpr/SelfPrForm";
import Header from "@/components/layout/header";

export default function ResumePage() {
    return (
      <main className="flex justify-center p-8 bg-white min-h-screen">
        <div className="max-w-3xl w-full text-black">
          <Header 
            title="자기소개서 작성"
            description="각 항목별로 자신을 효과적으로 표현해보고, AI의 도움을 받아 문장을 교정해보세요"
            showDescription={true}
            showBackButton={false}
          />
          <SelfprForm />
        </div>
      </main>
    );
}
