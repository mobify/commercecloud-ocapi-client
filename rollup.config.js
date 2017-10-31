import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/ocapi-client.js',
        format: 'cjs'
    },
    external: ['superagent', 'querystring'],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
}
