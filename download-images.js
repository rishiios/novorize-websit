const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCgLS8YI5q6J5Tvv39_K7U9YfcGkiyNGmN20xehNXWHaZ_VtRODWqiz0S6hRWAH5eFqNBcinCsZxum3aTpKbqyh-0VAOuiUEpPtexNbOK9vFqB-lbinaqBwD6jV5xmRXYx_vHHS_gLfhdWG6zBUh_gWGwFO8hQLGJncGqeDx7maq2XgcbW7H8xs936ieeb5Z04BVuSKWt25lDVrDrHIhfgy8xUYjsfJxm1reInFwZ8G_1mdqZ6jywFtUjuXUqTXwKmSuFTdvzJHHA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAzgQAzPG6jPW1Uj5dIZ5pRV2z5R756bvgNklQOWQ9Og-7_MloDGmTHSxfsjrLLwWSrQG-yrbqRv_XnTIqLwGYIgN8eVwM0fINqpMcctDCfBJIyx7UP40rh70OLuRTtOb0ngQrLe6eBA2kjo1ZTlvtw7ZHtbasIFLx3E-NZ8NsCj6CeB3nZGdCqzPTgFXrGoJy14Hbuz66Js1Onrau2NuJ1Q_319VvVWqTvHxvvj7ptBN6QAurNqhnKYXjNrhBSI_-Fqw7yZtY3Ng',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3xEI6eiytXwgu4PsLe57C7p3lE4kdsUa_dkjRB5VsN9LSoiD8SrmWfHwWYp2GS5x-ccYB4VRpmsf5HvjFY7wcakfXYiZaynfdKoFLvahwwCo9n20ofZSW2jsksa4hdaEu7w-rJ9MHMEIEvXJDIUxyqVITcbGQQA7tV8V7-G1za_N2PdQp0f0qp9rmeM_kM2amlZVU8WTIouNxk92-_ticW9GR3V89r6IVD5Gf3RP8S3vZoBYU2L8VClLtiBrGEsbRCO4iu8IilA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAO3wIjaWFYdP-Nwl-TZaW2UfhJ4neUDoecgUNAiGMxGHXOQOpD_3ChwOmRMb_16r_5R4--waglaB6GWhq69dxesAO_MtAY7F9Sho7SmRtmbgtiMq7sredBmuTB_koxqkBfljQb19j0WlGg-JmgK4wc7_WrK3ftB4UdgJ_MYm5aeosWr_Sp67JAjKco2cjMYJiHcQ70a6Av6jaSSZwtCHX9JMGPNipMNF2OgYEbtaK79_Ocm8LaACznqyGmtcwe4HfyRAORpNy-kQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKJOAAhfvBbBFKRhJrtB-0BSTpxHeoxNLo2_yNTkLo6EMGtZXkfS6VnLsmCbUvEBs81-crYx3oBUbikwSvn6eHQ9jMbusp7klJnHcYEm9r3F5qqeId8PHXw5rjohhFCcK5a6ejf0hVsyNDiIlID9sOClc0DTVmQ_S0b9mtbNIZIefkUxxu0QNlpXatPoUIFVUZ7AVS6FjoiwURV8jpgQdMLUdDPtlq4MTJpSKMctVcH_1Mz8o7PGWAewHuQHU2LA9Hva2CRwiJMw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAnl023v-zK67CeG8UFmO9D2VXn5IddXYawRNfY_DG68uZxpYot17qpeOyhRBFoXhMHP6RmuXSToFtK8avVUWXrBP24Kbl-sljQL_qyyOR1Okw-yjF-RvEZNXpU6iZ0PeOidH4nzLwHdqLuOQA7BpjwcOsukKAXpt9R_q3eYu5dn8xLABKZ0OHNM9MutL7oakD9jZl4AF_dfTqo0Fi5IFR9x0mosdxEV0M9EfB6SGCZcYpcO_4OqEguUvedDrG-ORpTr6AvAo_Qgg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBxDBhrn6o-gEo04jxyFYwItYDENuc1wPqe1ShW559Qk5f5bkg0FLAI9IYqo4dCPUof5iOxN4BJattumAwkVBnKUjzQyimmqqrZvTBr-nmy34CWyDzZxkLIkG2WEWjV7W2XGyS5EohpKfxTtNYEzNth10KyvW7LIrFW3e35UAArBAo-jmBLFBo6GV0wDONeA0lDD3uRcY7E-u5SwxyRuu6QC99bQEx31KZUZPkNYua79mcCwVBh9-S2WDEX6TUDybadKeV7mqB-dw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVMB3A2t3MvTbRr-RTOrb9Pu8zs78S50C3GXuf9a0vtfOpmA7GNnp48WTtNtvnDCLYEG0hZk8bkgKOApvj3vppc2gUHxePxBTunztaAW4uDIMO75CNWbx4D8r7rvX7u55bZbBqJBFn-XVOfs4H-8d9RQM74m40GH4x7aPQTVs0-3gZ3zzgi5SEBzgE8iFUwDpLN-EXlzXet26_KjHd9aHnOQuNA9jn3K6rQkEizAA8ohv961f7FAichGGy84L_IadAY99CklbGNQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuArWoKh07s7RN-lQzrngK12RDrhCroE3RGF2M82YnpLRxi-xP-h8Pw3uRiWqI91mOztM0QIqeSala00AqK4PbFpqSiG4f90QXz27B4Z9XjMWHat0EF5shGs8rv2YxoktKghxDQS6DbwTHpTqshqeVB1GoQXj32y9Yvi99EwutONpesMixbuDRx7yNm1ge9jZ-BJHLStUcOYgfI1OkSkGFxE0Bn8uadKw7q7r0xlwl3X3tWCV8vH9vTxAK2SAg4xs6mkS0EFnM8r_A'
];

const filenames = [
  'brand1.png', 'brand2.png', 'brand3.png', 'brand4.png', 'brand5.png',
  'portfolio1.jpg', 'portfolio2.jpg', 'portfolio3.jpg', 'portfolio4.jpg'
];

const dir = path.join(__dirname, 'public', 'images', 'home');
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
