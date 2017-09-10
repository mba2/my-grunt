module.exports = function (grunt) {

	// THIS VARIABLE DEFINES IF YOUR ASSETS WILL BE DEPLOYED AS MULTIPLE FILES OR IF THEY'RE GONNA BE DEPLOYED AS A SINGLE, UNIQUE ONE
	// POSSIBLE VALUES: string "multiple_files" || "single_file"
	var assets_mode = (grunt.option("assets_mode")) ? grunt.option("assets_mode") : "multiple_files";
	
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
		
		}
	});


	// LOAD TASKS
	grunt.loadNpmTasks("grunt-contrib-clean");
	// grunt.loadNpmTasks("grunt-contrib-copy");
	// grunt.loadNpmTasks("grunt-spritesmith");
	// grunt.loadNpmTasks("grunt-contrib-imagemin");
	// grunt.loadNpmTasks("grunt-responsive-images");
	// grunt.loadNpmTasks("grunt-contrib-sass");
	// grunt.loadNpmTasks("grunt-postcss");
	// grunt.loadNpmTasks("grunt-contrib-concat");
	// grunt.loadNpmTasks("grunt-contrib-uglify");
	// grunt.loadNpmTasks("grunt-contrib-watch");
	// grunt.loadNpmTasks("grunt-newer");



	/*
	** DEV TASK SETUP
	*/

	grunt.registerTask("dev", [
		"clean:target",
	]);


	/*
	** DEPLOY TASK SETUP
	*/
	var deployTask = [];
	
	// grunt.registerTask("deploy", deployTask); //REGISTER A DEPLOY TASK
	grunt.registerTask("default", "dev"); 	  //REGISTER A DEV TASK

};
