module.exports = {
    404: {
        files: [
            {
                cwd: 'src/',
                dest: 'build/angular-meetup-berlin-april-2019/',
                expand: true,
                src: [ '404.html' ]
            }
        ]
    },
    html: {
        files: [
            {
                dest: 'build/angular-meetup-berlin-april-2019/start.html',
                src: 'build/angular-meetup-berlin-april-2019/index.html'
            }
        ]
    },
    scripts: {
        files: [
            {
                cwd: 'build/angular-meetup-berlin-april-2019/',
                dest: 'build/angular-meetup-berlin-april-2019/scripts/',
                expand: true,
                src: [ '**/!(ngsw-worker).js' ]
            }
        ]
    },
    styles: {
        files: [
            {
                cwd: 'build/angular-meetup-berlin-april-2019/',
                dest: 'build/angular-meetup-berlin-april-2019/styles/',
                expand: true,
                src: [ '**/*.css' ]
            }
        ]
    }
};
