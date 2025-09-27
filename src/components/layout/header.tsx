"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

const pageConfig = {
    // 추후 페이지에 대한 header 정보 추가
    "/selfpr": {
        title: "자기소개서 작성",
        description: "각 항목별로 자신을 효과적으로 표현해보고, AI의 도움을 받아 문장을 교정해보세요",
        showDescription: true
    }
}

export default function Header() {
    const pathname = usePathname();
    const page = pageConfig[pathname as keyof typeof pageConfig];

    if (!page) {
        return null; // 설정되지 않은 페이지는 헤더를 표시하지 않음
    }

    return (
        <div className="mb-8">
            <div className="flex items-center mb-6">
                <Image 
                    src="/logo.png"
                    alt="메인로고"
                    width={100}
                    height={100}
                    className="mr-3"
                />
            </div>
            <div className="text-center">
                {page.showDescription && (
                    <>
                        <h1 className="text-2xl font-bold text-black">{page.title}</h1>
                        <p className="text-center text-gray-600 mt-2">
                            {page.description}
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}