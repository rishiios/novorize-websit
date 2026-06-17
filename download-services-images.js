const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI3mI9IZMLT9ouwZarOQfaDE4yjvDoUtFDwzyrnSm7_Ie80oFF4VHBW8L7RF83m-d1JhDs30HVK_S6TPOlwNT3ZjxKKnNig4l2E2IQecVsCLxT0xAW7wjr4jW5Z8-mXdwGh3aICXwAUOs8h3MPSUHN9s7xha7w2_CxR-PrBTV7LcRf9LlTwBtd4GLjw9mzJTJyFVZYrmIoQBEpbRmjhkM0RlvftUBm36qsaFQHSR8MiQ35y--yZ2agwQYi-VSLnP00EEE-AnJSqQ';

const dir = path.join(__dirname, 'public', 'images', 'services');
fs.mkdirSync(dir, { recursive: true });

const dest = path.join(dir, 'dashboard.jpg');
https.get(url, (res) => {
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log(`Downloaded dashboard.jpg`);
  });
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
});
