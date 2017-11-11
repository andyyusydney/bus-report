// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
    config.set({
        frameworks: [
            // Reference: https://github.com/karma-runner/karma-jasmine
            // Set framework to jasmine
            'jasmine'
        ],
		files: [
            'node_modules/angular/angular.js', 
			'node_modules/angular-mocks/angular-mocks.js',
			'./src/**/*.test.js', 
        ],
        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            // Set reporter to print detailed results to console
            'spec'
        ],

        preprocessors: {
        },

        browsers: [
            'PhantomJS'
        ],

        singleRun: true
    });
};
