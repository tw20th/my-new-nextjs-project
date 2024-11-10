// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/my-new-nextjs-project",  // GitHubリポジトリ名に合わせたbasePathを設定
  trailingSlash: true,                 // URLの末尾にスラッシュを追加（静的ファイルへのパスの一貫性を保つ）
  output: "export",                    // 静的エクスポートの有効化
  distDir: "docs",                     // GitHub Pagesの公開ディレクトリに合わせて、出力先を"docs"に指定
  images: {
    unoptimized: true,                 // 画像の最適化を無効化（静的サイトでの対応）
  },
};

export default nextConfig;
