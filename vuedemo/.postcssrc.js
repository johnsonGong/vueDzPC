// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    'plugins': {
        'postcss-import': {},
        'postcss-url': {},
        // to edit target browsers: use "browserslist" field in package.json
        'autoprefixer': {}
        // 手机H5设计稿: width: 750; {remUnit: 75}
        // PC设计稿: min-width: 1440; {remUnit: 144}; pc端暂不使用 rem;
        // 'postcss-px2rem': {remUnit: 144}
    }
}
