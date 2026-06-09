// Optimize the 3 d2creates art-brand images from the image cache into public/photos/art.
import sharp from 'sharp';
const CACHE = 'C:/Users/devan/.claude/image-cache/1403d588-7d22-4d00-983b-b5e921b93695';
const jobs = [
  ['1.png', 'd2-logo.webp'],
  ['2.png', 'workshop-frame.webp'],
  ['3.png', 'workshop-learned.webp'],
];
for (const [src, out] of jobs) {
  await sharp(`${CACHE}/${src}`).resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 88 }).toFile(`public/photos/art/${out}`);
  console.log('art ->', out);
}
