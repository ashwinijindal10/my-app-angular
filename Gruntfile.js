module.exports=function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint:{
            files :['lib/**/*.js','models/**/*.js']
        },
        watch:{
            files :['lib/**/*.js','models/**/*.js'],
            tasks:['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-jshint");
 
   // grunt.registerTask('default', ['jshint']);
}