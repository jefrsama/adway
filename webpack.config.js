module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader', // Этот загрузчик нужен для Vue компонентов
                    'css-loader', // Этот загрузчик интерпретирует @import и url() как import/require()
                    'sass-loader' // Компилирует SCSS в CSS
                ]
            }
        ]
    }
};