module.exports = function configuration(gruntConfig) {
  gruntConfig.initConfig({


    clean:['build/'],


    copy:{
      allHTML:{
        files:[
          {
            cwd:'src',
            src:['*.html'],
            dest:'build/',
            expand:true
          }
        ]
      },
      allJavaScript:{
        files:[
          {
            cwd:'src/js',
            src:['**/*.js'],
            dest:'build/js/',
            expand:true
          }
        ]
      },
      allJQuery:{
        files:[
          {
            cwd:'node_modules/jquery/dist',
            src:['jquery.js'],
            dest:'build/js/vendor/',
            expand:true
          }
        ]
      }
    },


    sass: {
      allSASS:{
        files:{
          'build/style.css' : 'src/sass/main.scss'
        }
      }
    },


    jshint:{
      source:{
        options:{
          jshintrc:'.jshintrc'
        },
        files:{
          src:['src/**/*.js']
        }
      }
    },


    karma:{
      testUNITS:{
        options:{
          frameworks:[ 'mocha', 'chai'],
          browsers: ['Chrome'],
          singleRun: true,
          files: [
            'src/**/*.js',
            'node_modules/sinon/pkg/sinon-2.0.0.js',
            'test/specs/**/*.js'
          ]
        }
      }
    }


  });

  require('load-grunt-tasks')(gruntConfig);

  gruntConfig.registerTask('build', ['jshint','karma', 'clean', 'copy', 'sass']);
};
