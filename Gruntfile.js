module.exports = function (grunt) {

	// THIS VARIABLE DEFINES IF YOUR ASSETS WILL BE DEPLOYED AS MULTIPLE FILES OR IF THEY'RE GONNA BE DEPLOYED AS A SINGLE, UNIQUE ONE
	// POSSIBLE VALUES: string "multiple_files" || "single_file"
	var assets_mode = grunt.option("assets_mode") || "multiple_files";
	
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		// FOLDERS PATHS, STORED IN VARIABLES
		dir: {
			source		: "src",
			dev	    	: "dev",
			deploy		: "deploy",
			public 		: "public", 
			resources	: "resources", 
			tests		: "tests", 
			styles		: "styles",
			temp_styles	: "temp-styles",
			js			: "js",
			temp_js		: "temp-js",
			fonts		: "fonts",
			images		: "img",
			currTask	: grunt.cli.tasks[0] || "dev",
			assets_mode	: grunt.option("assets_mode") || "multiple_files"
		},

		//COPY PROCESS
		copy: {
			
		},
		
		// SPRITE PROCESS
		sprite : {
			all: {
				src: '<%= dir.source %>/<%= dir.public %>/<%= dir.images %>/sprite/**/*.png',
				dest: '<%= dir.source %>/<%= dir.public %>/<%= dir.images %>/sprite.png',
				destCss: '<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>/config/_sprites.scss',
				imgPath: './<%= dir.images %>/sprite.png',
				algorithm : 'top-down',
				padding: 5,
			}
		},
		
		// STYLES PROCESS
		sass : {
			dev : {
				options : {
					lineNumbers : true
				},
				files : [{
					expand 	: true,
					flatten	: true,
					cwd: "src/public/styles",
					// cwd: "<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>,
					src: [
						"**/*.scss"
					],
					// src: [
					// 	"**/*.scss"
					// ],
					dest: "dev/public/styles",
					// dest: "<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>,
					ext : ".css"
				}]
			}
		},

		// WATCH PROCESS
		watch : {
			sprite : {
				files 	: ["<%= dir.source %>/<%= dir.public %>/<%= dir.images %>/sprite/*.png"],
				tasks 	: [
					"sprite"
				],
			},
			
			sass : {
				files 	: [
					"<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>/**/*.scss",
					"!<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>/**/_*.scss", 
				],
				tasks 	: [
					"sass:dev"
				],
			}
		}


	});

	
	// LOAD TASKS
	grunt.loadNpmTasks("grunt-spritesmith");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	// grunt.loadNpmTasks("grunt-contrib-clean");
	// grunt.loadNpmTasks("grunt-contrib-copy");
	// grunt.loadNpmTasks("grunt-contrib-imagemin");
	// grunt.loadNpmTasks("grunt-responsive-images");
	// grunt.loadNpmTasks("grunt-postcss");
	// grunt.loadNpmTasks("grunt-contrib-concat");
	// grunt.loadNpmTasks("grunt-contrib-uglify");
	// grunt.loadNpmTasks("grunt-newer");
	
	

	/*
	** DEV TASK SETUP
	*/

	grunt.registerTask("dev", [
		"sprite",
		"sass:dev",
		"watch"
	]);


	/*
	** DEPLOY TASK SETUP
	*/
	var deployTask = [];
	
	// grunt.registerTask("deploy", deployTask); //REGISTER A DEPLOY TASK
	grunt.registerTask("default", "dev"); 	  //REGISTER A DEV TASK

};
