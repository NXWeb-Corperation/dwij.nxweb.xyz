const Path = require('path');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const init = async () => {

    const server = new Hapi.Server({
        port: 3000,
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    });

    await server.register(Inert);
	server.route({
		method: 'GET',
		path: '/{param*}',
		handler : {
			directory: {
					path: '.',
					redirectToSlash: true
				}
			}
          });
	await server.start();

    console.log('Server running at:', server.info.uri);
};

init();
