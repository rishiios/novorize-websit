const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC25M6eVtvNuNcnSxGxS7roFGY5xP2mmOCAkUj0KlbKfAjBdayLIFA4XgI4z9JUVWtp-allfV54kPQLT8mWI1lgn3RX1tpGStxGJ_7OuzjioVmaf6SUOosaSHA8grQPPi1XIlp9TFz3vC1yu23bXlgIMP0f1Es29_UP_xXeEQAGUbwyH865DLscLVckpzjGEGsFJkqEoLR13VkkgD2SXVLT4tnMvH15r1fd20vdLFKe_BQjeXf6U7reulrIvqvOud20mbay-poXTg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBN3TQZlSwYjJjLXaAF4VIfN4DS8wPHLdXdOl4lvMkjeEu2Ua_K8OCKSSh2GVLtJvfNURlv8_qg7xIMDgcD87qo4eq3MzKcqMUrc31lrdBqWvp39vJP9H3Fz79Hhw9tUufLMcaIVj_zbFHvhPP6fjnFTBrAGWbGfUiYncvHN2NYdnoJ0elfvrsSeUkqJnoeej5T6yG8ludoxRVWwoZcFeP5GCZXDeQdnsPeBTArXbG1WJpqfYiyk968AdQdbsjvpu4LY59FZMzLAA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCBq9WleRiUAupwtB-u_0MtIeHPz4F1gBn91dCe514d4eL--yw7qxe5w58ILKI_om5Ll-L0mcYs6kq4tfnZ9-phlD8HDlmnZAuG3Sdbvv6OE6bzu3UgFtpJkz1ZA8IsNkV7x0gTk6yA3CENz52nFD4kDs-kStfRs_gH_Q21S9Gj-JmLM7ZQ0WZdK-xirtnFtAs9fymnce1ek5I2nWbywOA1pcANOFBrkUhzEgm9ee3cfiVC_scnKbs_PaVopd2F9Vvz9wjyuoY1SQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDyKN4MUWMfASdbGz0eehe6ElzsPGs-_l49jD7dvvFrSxr048MC-igxRIcoK9Wf7qRl350MMMoPFzkRcL0HXaepX2UQwA--l1turqtiRoZpfC4ADaUpDOXwgrTl7KdMLSHUM0aYe3uBB0Wsp6w3GuQDgNNFPhB23uXk7EWDNnmgGPb1IfcrLmzi2_hOmsAni_gmRRVe4nXWXwhtQdGZymPMzHX8XwlgtduHzcgvwsqz_f4mYhiQ55y9750MvyVTzgx9D-wLDdjrcg'
];

const filenames = [
  'hero.jpg', 'founder.jpg', 'office.jpg', 'tablet.jpg'
];

const dir = path.join(__dirname, 'public', 'images', 'about');
fs.mkdirSync(dir, { recursive: true });

let completed = 0;

urls.forEach((url, i) => {
  const dest = path.join(dir, filenames[i]);
  https.get(url, (res) => {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      completed++;
      console.log(`Downloaded ${filenames[i]}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${url}: ${err.message}`);
  });
});
