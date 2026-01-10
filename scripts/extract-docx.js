import mammoth from 'mammoth';
import path from 'path';

async function main() {
  try {
    const docxPath = path.resolve(__dirname, '..', '..', 'Website.docx');
    const result = await mammoth.extractRawText({ path: docxPath });
    console.log(result.value);
  } catch (err) {
    console.error('Failed to extract docx content:', err.message);
    process.exit(1);
  }
}

main();