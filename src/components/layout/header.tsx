"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
    title: string;
    description?: string;
    showDescription?: boolean;
    showBackButton?: boolean;
}

export default function Header({ 
    title, 
    description, 
    showDescription = true, 
    showBackButton = false 
  }: HeaderProps) {
    const router = useRouter();

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
            {/* 뒤로가기 버튼 - 조건부 렌더링 */}
            {showBackButton && (
                <button
                     onClick={() => router.back()}
                     className="flex items-center text-blue-400 hover:text-blue-300"
                >
                    <span className="mr-2">←</span>
                    뒤로 가기
                </button>
            )}
            <div className="text-center">
                {showDescription && (
                    <>
                        <h1 className="text-2xl font-bold text-black">{title}</h1>
                        <p className="text-center text-gray-600 mt-2">
                            {description}
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}