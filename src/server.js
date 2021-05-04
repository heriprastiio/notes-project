const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost': '172.31.47.247',
        routes: {
            cors:{
                origin: ['*'],
            },
        },
    });
    await server.start();
    server.route(routes);
}
init();