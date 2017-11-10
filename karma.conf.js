// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
    config.set({
        frameworks: [
            // Reference: https://github.com/karma-runner/karma-jasmine
            // Set framework to jasmine
            'jasmine'
        ],
        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            // Set reporter to print detailed results to console
            'spec'
        ],
        files: [
            // Grab all files in the app folder that contain .test.
			'./src/**/*.test.js',
        ],

        preprocessors: {
        },

        browsers: [
            'PhantomJS'
        ],

        singleRun: true
    });
};
