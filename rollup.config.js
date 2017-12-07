import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [{
    input: 'src/index.js',
    name: 'ocapi-client',
    output: {
        file: 'dist/commercecloud-ocapi-client.js',
        format: 'umd'
    },
    plugins: [
        commonjs({
            namedExports: {
                './node_modules/superagent/superagent.js': ['superagent'],
            },
        }),
        resolve({
            preferBuiltins: false,
            querystring: true,
            browser: true,
        }),
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
