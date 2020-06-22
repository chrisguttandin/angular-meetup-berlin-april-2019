const { env } = require('process');
const pkg = require('../../package.json');

module.exports = {
    deploy: {
        options: {
            base: 'build/angular-meetup-berlin-april-2019',
            message: `build page for version ${env.TRAVIS_TAG}`,
            repo: pkg.repository.url.replace(/:\/\//, `://${env.GIT_HUB_ACCESS_TOKEN}@`),
            silent: true,
            user: {
                email: env.GIT_HUB_USER_EMAIL,
                name: env.GIT_HUB_USER_NAME
            }
        },
        src: ['**']
    }
};
