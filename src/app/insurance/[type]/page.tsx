import React from 'react';

// カスタム型定義を削除し、Next.js の型推論に任せる
export default async function InsuranceTypePage({ params }: { params: { type: string } }) {
  // type に応じて表示内容を変える（将来的に実装）
  const insuranceType = params.type;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">保険種類別ページ: {insuranceType}</h1>
      <p>{insuranceType} 保険の詳細情報を表示するページです。</p>
      <p>現在、鋭意制作中です！</p>
    </main>
  );
}
