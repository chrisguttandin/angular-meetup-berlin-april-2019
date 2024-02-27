module.exports = {
    default: {
        files: [
            {
                cwd: 'build/angular-meetup-berlin-april-2019/browser',
                dest: 'build/angular-meetup-berlin-april-2019/browser',
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
