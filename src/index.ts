
const { PDFNet } = require('@pdftron/pdfnet-node');
const PDFTronLicense = require('../LicenseKey/LicenseKey');

// -------------------------------------------------------------------------------------------------
//  EXAMPLE 1
// -------------------------------------------------------------------------------------------------

console.log("---=[ EXAMPLE 1 ]=---");

const main1 = async() => {
    const doc = await PDFNet.PDFDoc.create();
    const page = await doc.pageCreate();
    await doc.pagePushBack(page);
    await doc.save('blank.pdf', PDFNet.SDFDoc.SaveOptions.e_linearized);
};

const main = async() => {
    const doc = await PDFNet.PDFDoc.create();
    const page = await doc.pageCreate();
    await doc.pagePushBack(page);
    await doc.save('blank.pdf', PDFNet.SDFDoc.SaveOptions.e_linearized);
};

PDFNet.runWithCleanup(main, PDFTronLicense.Key)
.then(function(){
    return PDFNet.shutdown();
})
.catch(function(error: any) {
    console.log('Error: ' + JSON.stringify(error));
});


// -------------------------------------------------------------------------------------------------
//  EXAMPLE 2
// -------------------------------------------------------------------------------------------------

// console.log("---=[ EXAMPLE 2 ]=---");
//
// const main = async() => {
//     try {
//         const doc = await PDFNet.PDFDoc.create();
//         const page = await doc.pageCreate();
//         await doc.pagePushBack(page);
//         await doc.save('blank.pdf', PDFNet.SDFDoc.SaveOptions.e_linearized);
//     } catch (error) {
//         console.error('main() Error: ' + JSON.stringify(error));
//     }
// };
//
// async function initPDFNet() {
//     return new Promise((resolve, reject) => {
//         PDFNet.runWithCleanup(main, PDFTronLicense.Key)
//         .then(function() {
//             console.log('PDFNet.runWithCleanup() succeeded');
//             PDFNet.shutdown();
//             resolve('OK');
//         })
//         .catch(function(error: any) {
//             console.log('PDFNet.runWithCleanup() failed');
//             console.log(error);
//             reject(error);
//         });
//     });
// }
//
// (async () => {
//     await initPDFNet();
// })();
