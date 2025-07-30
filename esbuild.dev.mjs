import esbuild from 'esbuild';

const ctx = await esbuild.context({
  entryPoints: ['./src/index.js'],
  bundle: true,
  platform: 'node',
  target: ['node18'],
  external: ['express'],
  sourcemap: true,
  minify: false,
  define: { 'process.env.NODE_ENV': '"development"' },
  outdir: 'dist1',
});

await ctx.watch();
