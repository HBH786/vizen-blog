import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

function zipDirectory(sourceDir, outPath) {
  const archive = archiver('zip', { zlib: { level: 9 }});
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', err => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

const sourceDir = path.resolve(process.cwd());
const outPath = path.resolve(process.cwd(), 'vizen-blog-project.zip');

zipDirectory(sourceDir, outPath)
  .then(() => console.log('Project zipped successfully!'))
  .catch(err => console.error('Error zipping project:', err));