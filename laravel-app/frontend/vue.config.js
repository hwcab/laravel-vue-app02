module.exports = {
    // アセットはLaravelの `public` の `app` ディレクトリ配下に作成されるようにする.
    outputDir: '../public/app',


    // app配下にjs, cssなどが置かれるので、publicPathを調整する
    publicPath: '/app',

    // blade出力
    pages: {
        // appのエントリポイント、テンプレート、出力先を調整
        // app: {
        //     entry: 'src/app/main.js',
        //     template: 'templates/base.html',
        //     // blade出力
        //     filename: '../../resources/views/spa/app.blade.php',
        // },
        index: {
            entry: 'src/app/main.js',
            template: 'templates/base.html',
            // blade出力
            filename: '../../resources/views/spa/index.blade.php',
        }
    },
};