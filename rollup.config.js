export default {
    input: 'src/index.js',
    output: {
        file: 'lib/index.js',
        format: 'es'
    },
    external: ['superagent', 'querystring'],
}
