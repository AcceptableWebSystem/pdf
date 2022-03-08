const { build } = require('esbuild');
const glob = require('glob');
const entryPoints = glob.sync('./src/**/index.ts'); // srcフォルダ配下のindex.tsを対象とする
const isWatch = process.argv[2] === 'watch'; // コマンドライン引数で起動モードを切り替える

build({
  platform: 'node', // 'node' 'browser' 'neutral'
  entryPoints,
  outbase: './src', // 指定したディレクトリ構造を出力先に反映する
  outdir: './build', // ビルドファイルの出力先
  bundle: true, // バンドル有効化
  external: [], // バンドルから除外するパッケージを指定する
  minify: false, // ソースの最小化
  watch: isWatch, // trueならwatchモードで起動する
});
