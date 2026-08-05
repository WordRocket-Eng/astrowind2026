import { copyFile, readdir, stat } from 'node:fs/promises';

const assetDirectory = 'dist/_astro';
const files = (await readdir(assetDirectory)).filter((file) => file.endsWith('.css'));

if (files.length === 0) {
  throw new Error('No generated stylesheet found in dist/_astro');
}

let largest = { file: null, size: 0 };
for (const file of files) {
  const { size } = await stat(`${assetDirectory}/${file}`);
  if (size > largest.size) {
    largest = { file, size };
  }
}

const source = `${assetDirectory}/${largest.file}`;
await copyFile(source, 'dist/styles.css');
await copyFile(source, 'public/styles.css');
