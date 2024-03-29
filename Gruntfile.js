module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    files: {
      cwd: 'src',
      dest: 'dist',
      css: ['css/*.css'],
      fontawsomeFonts: 'src/css/font-awesome/fonts',
      miconsFonts: 'src/css/micons/fonts',
      js:  ['js/main.js'],
      images: ['images/**/*.{png,jpg,gif}'],
      copy: ['css/**', '!css/*.css', 'js/**', '!js/main.js', 'fonts/**', 'inc/**', 'favicon.png', 'sitemap.xml'],
      html: ['home.html']
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        cwd: '<%= files.cwd %>',
        src: '<%= files.js %>',
        dest: '<%= files.dest %>',
        //ext: '.min.js'
      }
    },

    cssmin: {
      options: {
        'processImport': false
      },
      build: {
        expand: true,
        cwd: '<%= files.cwd %>',
        src: '<%= files.css %>',
        dest: '<%= files.dest %>',
        //ext: '.min.css'
      }
    },

    htmlmin: {
     build: {
        options: {
           removeComments: true,
           collapseWhitespace: true
        },
        files: [{
           expand: true,
           cwd: '<%= files.cwd %>',
           src: '<%= files.html %>',
           dest: '<%= files.dest %>'
        }]
     }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= files.cwd %>',
          src: '<%= files.images %>',
          dest: '<%= files.dest %>'
        }]
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: '<%= files.cwd %>',
        src: '<%= files.copy %>',
        dest: '<%= files.dest %>'
      },
      fontawesomeFonts: {
        expand: true,
        cwd: '<%= files.fontawsomeFonts %>',
        src: ['**'],
        dest: '<%= files.dest %>/fonts'
      },
      miconsFonts: {
        expand: true,
        cwd: '<%= files.miconsFonts %>',
        src: ['**'],
        dest: '<%= files.dest %>/fonts'
      },
    },

    jshint: {
      files: {
        src: ['Gruntfile.js', '<%= files.cwd %>/<%= files.js %>'],
      },
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    watch: {
      dist: {
        files: ['<%= files.js %>', '<%= files.css %>', '<%= files.html %>'],
        tasks: ['build'],
        options: {
          interrupt: true,
          cwd: '<%= files.cwd %>'
        }
      },
      jscheck: {
        files: ['<%= jshint.files.src %>'],
        tasks: ['jshint']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default and custom task(s).
  grunt.registerTask('build', ['uglify', 'cssmin', 'htmlmin', 'newer:copy', 'newer:imagemin:dynamic']);
  grunt.registerTask('default', ['watch:jscheck']);

};
