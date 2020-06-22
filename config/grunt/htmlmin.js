module.exports = {
    default: {
        files: [
            {
                cwd: 'build/angular-meetup-berlin-april-2019',
                dest: 'build/angular-meetup-berlin-april-2019',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
