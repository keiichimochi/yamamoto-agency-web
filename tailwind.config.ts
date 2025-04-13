import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // フォントファミリーを追加
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'], // デフォルトの sans-serif フォントを Noto Sans JP に
        mplus: ['var(--font-mplus-rounded-1c)', 'sans-serif'], // アクセントフォント用
      },
      // ここに後でカスタムテーマ設定を追加していくナリ
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config; 