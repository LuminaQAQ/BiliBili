module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        parser: "babel-eslint",
        // parserOptions: {
        //     sourceType: 'module',
        // },
    },
    parser: "vue-eslint-parser",
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        'vue/multi-word-component-names': 0,
        'no-console': 'off',
    },
}