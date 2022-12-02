import { build } from 'esbuild';
import chokidar from 'chokidar';
import liveServer from 'live-server';
import getPort, { portNumbers } from 'get-port';

function tranformPath(path) {
  const isNotHTML = ['.css', '.js', '.mjs'].some((extension) => path.endsWith(extension));
  const isTemplate = path.startsWith("/templates");
  if(isNotHTML || isTemplate) return path;
  return "/";
}

const config = {
  logLevel: 'info',
  entryPoints: ['src/main.js'],
  outfile: 'public/main.js',
  bundle: true,
  minify: true,
  define: { "process.env.NODE_ENV": 'development' },
  sourceRoot: 'public',
};
await build(config);

chokidar
  .watch("src/**/*.{js,mjs,css}", {
    interval: 20,
  })
  .on('all', async () => {
    await build(config);
  });

liveServer.start({
  root: 'public',
  port: await getPort({ port: portNumbers(8000, 8100) }),
  host: '0.0.0.0',
  logLevel: 3,
  open: false,
  middleware: [(req, res, next) => {
    req.url = tranformPath(req.url);
    next();
  }],
});
