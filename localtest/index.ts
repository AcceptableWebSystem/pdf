import * as fs from 'fs';

import * as pdf from 'pdf-parse';

main();

export async function main(): Promise<void> {
  const dataBuffer = fs.readFileSync('document.pdf');
  pdf(dataBuffer).then(function (data) {
    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata);
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log(data.text.replace(/\r?\n/g, ''));
  });
}
