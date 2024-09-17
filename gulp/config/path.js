import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        jsVendor: `${buildFolder}/js/vendor/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/script.js`,
        jsVendor: `${srcFolder}/js/vendor/*.js`,
        images: `${srcFolder}/img/**/*.*`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        pug: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        pug: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}