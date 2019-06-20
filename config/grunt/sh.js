const { env } = require('process');
const documentConfig = require('../htmlhint/document');
const templateConfig = require('../htmlhint/template');

// eslint-disable-next-line padding-line-between-statements
const convertConfig = (config) => Object
    .entries(config)
    .map(([ key, value ]) => (typeof value === 'string') ? `${ key }=${ value }` : key)
    .join(',');

module.exports = {
    analyze: {
        cmd: 'ng build --prod --source-map --stats-json && webpack-bundle-analyzer build/angular-meetup-berlin-april-2019/stats.json'
    },
    build: {
        cmd: 'ng build --base-href /angular-meetup-berlin-april-2019/ --prod --subresource-integrity'
    },
    continuous: {
        cmd: 'ng test'
    },
    e2e: {
        cmd: (env.TRAVIS) ?
            'ng e2e' :
            'webdriver-manager update && ng e2e --no-webdriver-update'
    },
    lint: {
        cmd: `htmlhint --rules ${ convertConfig(documentConfig) } 'src/**/index.html' && htmlhint --rules ${ convertConfig(templateConfig) } 'src/app/**/*.component.html' && ng lint angular-meetup-berlin-april-2019 --type-check && ng lint angular-meetup-berlin-april-2019 --configuration test`
    },
    monitor: {
        cmd: 'ng serve --aot'
    },
    prerender: {
        cmd: 'ng run angular-meetup-berlin-april-2019:server && angular-prerender'
    },
    preview: {
        cmd: 'ng serve --aot --prod'
    },
    smoke: {
        cmd: (env.TRAVIS) ?
            "IS_SMOKE_TEST=true ng e2e --dev-server-target '' && hint --tracking=off https://chrisguttandin.github.io/angular-meetup-berlin-april-2019 && rm cdp.pid" :
            "webdriver-manager update && IS_SMOKE_TEST=true ng e2e --dev-server-target '' --no-webdriver-update && hint --tracking=off https://chrisguttandin.github.io/angular-meetup-berlin-april-2019 && rm cdp.pid"
    },
    test: {
        cmd: 'ng test --watch false'
    },
    verify: {
        cmd: "bundle-buddy build/angular-meetup-berlin-april-2019/*.js.map && grep -r build/**/*.map -e '/environments/environment.ts'; test $? -eq 1"
    }
};
