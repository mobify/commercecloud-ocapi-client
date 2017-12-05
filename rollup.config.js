export default [{
    input: 'src/index.js',
    name: 'sfCommerceCloudClient',
    output: {
        file: 'dist/commercecloud-ocapi-client.umd.js',
        format: 'umd'
    },
    external: ['superagent', 'querystring'],
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
