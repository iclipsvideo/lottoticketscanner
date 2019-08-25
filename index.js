console.log('starting lottoticketscanner...');

import { TesseractWorker } from 'tesseract.js';
const worker = new TesseractWorker();

console.log('lottoticketscanner is deployed');

worker.recognize('https://iclips.co.za/images/lotto-ticket.jpg')
  .progress(progress => {
    console.log('progress', progress);
  }).then(result => {
    console.log('result', result);
  });