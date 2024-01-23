# pdftron-node-webpack-minimal ![image](https://img.shields.io/badge/node-blue?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](https://img.shields.io/badge/typescript-blue?style=for-the-badge&logo=typescript&logoColor=white) ![image](https://img.shields.io/badge/webpack-blue?style=for-the-badge&logo=webpack&logoColor=white)

A couple of minimal @pdftron/pdfnet-node to see about getting webpack to work with it.

## Setup
- `npm install`
- edit `./LicensKey/LicenseKey.js` and input a valid license key
- there are two examples in `src/index.ts`- uncomment the one you want to try and comment the other

THEN:

- `npm run non-webpack` will run the pdfnet-node application and create the `blank.pdf` as expected;

OR:

- `npm run build-webpack; npm run run-webpack` will attempt to build the webpack version which fails

FINALLY:

- `npm run clean` will remove `blank.pdf` and the `/dist` folder (use between runs)
