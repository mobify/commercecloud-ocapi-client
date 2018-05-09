import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [{
    input: 'src/index.js',
    name: 'ocapi-client',
    output: {
        file: 'dist/commercecloud-ocapi-client.umd.js',
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
        babel({
            exclude: ['node_modules/**']
        })
    ]
},
{
    input: 'src/index.js',
    output: [{
        file: pkg.main,
        format: 'cjs'
    }, {
        file: pkg.module,
        format: 'es'
    }],
    external: ['superagent', 'querystring'],
    plugins: [
        babel({
            exclude: ['node_modules/**']
        })
    ]
}]
