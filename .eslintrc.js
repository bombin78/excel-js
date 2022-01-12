module.exports = {
    parser: '@babel/eslint-parser',
    // parserOptions: {
    //     babelOptions: {
    //         configFile: './babel.config.json',
    //     },
    // },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        'indent': ['error', 4],
        'max-len': ['error', {code: 120}],
        'operator-linebreak': [2, 'after', {'overrides': {'?': 'before', ':': 'before'}}],
        'require-jsdoc': 'off',
    },
};
