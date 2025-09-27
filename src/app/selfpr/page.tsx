import SelfprForm from "@/components/selfpr/SelfPrForm";
import Header from "@/components/layout/header";

export default function ResumePage() {
    return (
      <main className="flex justify-center p-8 bg-white min-h-screen">
        <div className="max-w-3xl w-full text-black">
          <Header />
          <SelfprForm />
        </div>
      </main>
    );
}
