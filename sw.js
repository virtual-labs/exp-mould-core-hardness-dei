importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"4ca85fd5d84301d950ac725fedd36f9e","url":"contributors.html"},{"revision":"558980641408b844c0d07f49be1c2734","url":"feedback.html"},{"revision":"e4389a7e9d1e823562e3643c20b41076","url":"images/core.jpg"},{"revision":"1dd20f0d7289cd2678f6692f3d483aaa","url":"images/mould.jpg"},{"revision":"0e8d3632f8f66f01d389d91584ebc984","url":"index.html"},{"revision":"b7b7a2babda9082c08dcc5272809b8d7","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a98ed514c332e123d5da19d9ebdd701a","url":"posttest.html"},{"revision":"fe4927551f2f1cb87bdaef6df5983523","url":"posttest.json"},{"revision":"aef666f46af95450627f1c55700e5d02","url":"pretest.html"},{"revision":"d0058e216390da4d9e7d02a59ce84e7d","url":"pretest.json"},{"revision":"f934841b691fcb1fbcf09de8c2c7c2ec","url":"procedure.html"},{"revision":"f7f95bdbdd73e2ee36fa81271c67644d","url":"references.html"},{"revision":"598b433582b5ae04774cb169e1242d4d","url":"simulation.html"},{"revision":"a5de45bd048b21ee703e80cd83a3972c","url":"simulation/coreHardness/css/style.css"},{"revision":"2597e65670688ac498d6e9f2278ceed2","url":"simulation/coreHardness/drySandCore.html"},{"revision":"3c4479567b4480a835ac3e877d4c1e42","url":"simulation/coreHardness/greenSandCore.html"},{"revision":"454bf1ba41ddf4e013838ffbf72bb26d","url":"simulation/coreHardness/images/CoreHardnessTester.jpg"},{"revision":"2f5369e183241f52140ec8dbfaa2b174","url":"simulation/coreHardness/images/drySandCore.jpg"},{"revision":"8768015d6710762b74ef616ae6d5190b","url":"simulation/coreHardness/images/drySandTester.jpg"},{"revision":"1c3012cfccd9e983fc637b72d6bb844b","url":"simulation/coreHardness/images/GreenSandCore.jpg"},{"revision":"8776f235006db384340e1a3c58afc8f5","url":"simulation/coreHardness/images/greenSandTester.jpg"},{"revision":"06f3cf1ad4c2f5e7faa4bb188c422c5c","url":"simulation/coreHardness/images/HardnessTester.jpg"},{"revision":"53630e6d7aa12600379b784f46864eee","url":"simulation/coreHardness/images/next.jpg"},{"revision":"c8405d5f26638d8d30934568f37fc8eb","url":"simulation/coreHardness/images/ok.png"},{"revision":"9cf2c5faaafe987973c0d1e322f6b31b","url":"simulation/coreHardness/images/reset.jpg"},{"revision":"d62efec2aa82e936d4e74e38c2a655c3","url":"simulation/coreHardness/images/result.jpg"},{"revision":"f35ca8362ed0ae10dc853ff08d237358","url":"simulation/coreHardness/index.html"},{"revision":"6b4f0fee01bcb8b836ba9302ad1ba311","url":"simulation/coreHardness/js/main.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"a5de45bd048b21ee703e80cd83a3972c","url":"simulation/css/style.css"},{"revision":"21c16eeabb750926d8c180acffd85b4b","url":"simulation/index.html"},{"revision":"1d4800549d721dd40a18d92733306ec8","url":"simulation/index1.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"a5de45bd048b21ee703e80cd83a3972c","url":"simulation/mouldHardness/css/style.css"},{"revision":"a3d4604e22e00f49a91ca4817b7a8b82","url":"simulation/mouldHardness/images/flaskWithSand.jpg"},{"revision":"f7892e4f4a2cbb7278e8c552d2690a25","url":"simulation/mouldHardness/images/mouldHardnessTester.jpg"},{"revision":"31a9f8132e97e4e8a4977ad598de6f40","url":"simulation/mouldHardness/images/mouldingFlask.jpg"},{"revision":"53630e6d7aa12600379b784f46864eee","url":"simulation/mouldHardness/images/next.jpg"},{"revision":"c8405d5f26638d8d30934568f37fc8eb","url":"simulation/mouldHardness/images/ok.png"},{"revision":"afc414fa6a260c62c8ef355e3b175a50","url":"simulation/mouldHardness/images/rammer.jpg"},{"revision":"9cf2c5faaafe987973c0d1e322f6b31b","url":"simulation/mouldHardness/images/reset.jpg"},{"revision":"d62efec2aa82e936d4e74e38c2a655c3","url":"simulation/mouldHardness/images/result.jpg"},{"revision":"0d545db3f5c541adca66b2a1c88d23aa","url":"simulation/mouldHardness/images/sand.jpg"},{"revision":"45d97cb81ac72aaad263d934f936d9b4","url":"simulation/mouldHardness/images/shovel.jpg"},{"revision":"21ae89450ad5b41ee96b8742414d46bd","url":"simulation/mouldHardness/images/shovelToSand.jpg"},{"revision":"bb8537d6bc83cd053f8120277106dfe0","url":"simulation/mouldHardness/index.html"},{"revision":"b12656fde5d9ad1c3dc091c47e1cdb5e","url":"simulation/mouldHardness/js/main.js"},{"revision":"4b0c46aa0cf1a2af07d8a1bcbcd43367","url":"theory.html"},{"revision":"3ee40adcc5fd396c7dad1e10a2a61f96","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );