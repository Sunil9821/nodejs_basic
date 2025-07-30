import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  platform: 'node',
  target: ['node18'],
  external: ['express'],
  sourcemap: true,
  minify: true,
  define: { 'process.env.NODE_ENV': '"production"' },
  outfile: 'dist/index.js',
}).catch(() => process.exit(1));
