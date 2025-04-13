import React from 'react';

// 動的ルートパラメータ (例: /insurance/life) を受け取るための Props 型定義
type Props = {
  params: { type: string };
};

export default function InsuranceTypePage({ params }: Props) {
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