const replace = require("replace");
const folders = ['./dist/']

replace({
    regex: `/assets/`,
    replacement: 'assets/',
    paths: folders,
    recursive: true,
    silent: false,
});

replace({
    regex: `(href|src|"href"|"src")="/`,
    replacement: '$1="',
    paths: folders,
    recursive: true,
    silent: false,
});
