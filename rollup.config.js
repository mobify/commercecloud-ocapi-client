
import builtins from 'rollup-plugin-node-builtins'
import replace from 'rollup-plugin-re'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default [{
    input: 'src/index.js',
    name: 'ocapi-client',
    output: {
        file: 'dist/commercecloud-ocapi-client.js',
        format: 'umd'
    },
    plugins: [
        json(),
        /*
         * NOTE: Do replace before commonjs
         * This is a hack for rollup
         * In current rollupJS version, it does not handle reassigned require function
         * in certain packages that uses commonjs helper
         * We need to manually remove the hijacked require function
         * For more info: https://github.com/rollup/rollup-plugin-commonjs/issues/166#issuecomment-328853157
         */
        replace({
            patterns: [{
                match: /formidable(\/|\\)lib/,
                test: 'if (global.GENTLY) require = GENTLY.hijack(require);',
                replace: '',
            }]
        }),
        commonjs({
            namedExports: {
                superagent: ['superagent'],
            },
        }),
        resolve({
            preferBuiltins: false,
            querystring: true,
        }),
        builtins(),
    ]
},
{
    input: 'src/index.js',
    output: {
        file: 'lib/index.js',
        format: 'cjs'
    },
    external: ['superagent', 'querystring'],
},
{
    input: 'src/index.js',
    output: {
        file: 'es/index.js',
        format: 'es'
    },
    external: ['superagent', 'querystring'],
}]
