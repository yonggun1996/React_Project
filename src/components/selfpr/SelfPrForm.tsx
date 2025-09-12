import FormField from "./FormField";

const questions = [
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
  },
  {
    id: 5,
    title: "5. 기타 사항",
    guide: "추가 질문이나 자유로운 내용을 작성해 주세요.",
    maxLength: 2000,
  },
];

export default function ResumeForm() {
  return (
    <form className="mt-8 space-y-6">
      {questions.map((q) => (
        <FormField
          key={q.id}
          title={q.title}
          guide={q.guide}
          maxLength={q.maxLength}
        />
      ))}
    </form>
  );
}