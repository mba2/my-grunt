module.exports = function (grunt) {

	// THIS VARIABLE DEFINES IF YOUR ASSETS WILL BE DEPLOYED AS MULTIPLE FILES OR IF THEY'RE GONNA BE DEPLOYED AS A SINGLE, UNIQUE ONE
	// POSSIBLE VALUES: string "multiple_files" || "single_file"
	var outputStructure = "multiple_files";
	
	grunt.initConfig({
		// FOLDERS PATHS, STORED IN VARIABLES
		dir: {
			source		: "src",
			dev	    	: "dev",
			deploy		: "deploy",
			public 		: "public", 
			resources	: "resources", 
			tests		: "tests", 
			styles		: "styles",
			js			: "js",
			fonts		: "fonts",
			images		: "img",
			currTask	: grunt.cli.tasks[0] || "dewwwwv"
		},


		//CLEAN PROCESS
		clean: {
			target 				: { "src" : "<%= dir.currTask %>/" },
			backEnd 			: { "src" : "<%= dir.dev %>/*(<%= dir.resources %>|<%= dir.tests %>)"},	
			public_PHP_HTML 	: { "src" : "<%= dir.dev %>/<%= dir.public %>/*.{php,html}"},
			sass 				: { "src" : "<%= dir.dev %>/<%= dir.public %>/<%= dir.styles %>/**/*.css"},	
			js 					: { "src" : "<%= dir.dev %>/<%= dir.public %>/<%= dir.js %>/**/*.js"},	
		},
		//COPY PROCESS
		copy: {
			// THIS TARGET AIMS TO ALL PROJECT'S ASSETS
			// "dev": {
			// 	"files": [{
			// 		"expand": true,
			// 		"cwd": "<%= dir.source %>",
			// 		"src": ["?(resources||tests)/**/*", 
			// 				"public/*.{html,php}"	
			// 			   ],
			// 		// "src": ["?(public||resources||tests)/**/*", ],
			// 		"dest": "<%= dir.dev %>"
			// 	}]
			// },
			// THIS TARGET AIMS TO ALL PROJECT'S FILES AND FOLDERS PREPARING THE RESULT TO BE DEPLOYED
			// "deploy" : {
			//   "files" : [
			//     {
			//       "expand" : true,
			//       "cwd": "<%= dir.source %>",
			//       "src" : ["*(public||resources||tests)/**/*",
			//               ],
			//       "dest" : "<%= dir.deploy %>"
			//     }
			//   ]
			// },

			// THIS TARGET TRANSFERS ONLY ALTERED BACKEND ASSETS
			backEnd: {
				files: [{
					expand	: true,
					cwd		: "<%= dir.source %>",
					src		: ["*(<%= dir.resources %>||<%= dir.tests %>)/**/*", ],
					dest	: "<%= dir.dev %>/"
				}]
			},

			// THIS TARGET TRANSFERS ONLY ALTERED 'PUBLIC' FILES (.php files or .html files)
			public_PHP_HTML: {
				files: [{
					expand	: true,
					cwd		: "<%= dir.source %>",
					src		: "<%= dir.public %>/*.{php,html}",
					dest	: "<%= dir.dev %>/"
				}]
			},

			// // THIS TARGET TRANSFERS ONLY ALTERED FILES CONTAINING CSS
			pureCSS: {
				files: [{
					expand: true,
					flatten: true,
					cwd: "<%= dir.source %>",
					src: ["<%= dir.public %>/**/*.css"],
					dest: "<%= dir.currTask %>/<%= dir.public %>/<%= dir.styles %>",
				}]
			},
		},
		//RESPONSIVE IMAGES TASK
		responsive_images: {
			myTask: {
				options: {
					engine: "im",
					sizes: [{
						name: 'large',
						width: 640
					}, {
						name: "large2",
						width: 1024,
						suffix: "_x2",
						quality: 60
					}]
				},
				files: [{
					expand: true,
					cwd: '<%= dir.dev %>/',
					src: ['**/<%= dir.images %>/**.{jpg,gif,png}'],
					dest: '<%= dir.dev %>/'
				}]
			}
		},

		//SASS PROCESS
		sass : {
			dev : {
				options : {
					trace 		: true,
					lineNumbers	: true,
					update		: true,
				},
				files : [{
					expand 	: true,
					cwd    	: "<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>",
					src	 	: "*.scss",
					dest	: "<%= dir.dev %>/<%= dir.public %>/<%= dir.styles %>"
				}]
			},
			
			deploy : {
				options : {
					style : "compressed"
				}
			}
		},

		//JS PROCESS
		uglify : {
			dev : {
				// options : {

				// },
				files : [{
					expand 	: true,
					cwd	   	: "<%= dir.source %>/<%= dir.public %>/<%= dir.js %>",
					src	   	: "**/*.js",
					dest	: "<%= dir.dev %>/<%= dir.public %>/<%= dir.js %>",
				}]
			}
		},

		// WATCH PROCESS
		watch: {
			// WATCH - ADITION AND MOFIICATION PROCESS
			backEnd: {
			  files		: ["<%= dir.source %>/?(<%= dir.resources %>|<%= dir.tests %>)/**/*"],
			  tasks		: ["copy:backEnd"],
			  options	: {event: ["added","changed"]}
			},

			public_PHP_HTML: {
				files	: ["<%= dir.source %>/<%= dir.public %>/*.{php,html}"],
				tasks	: ["copy:public_PHP_HTML"],
				options	: { event: ["added", "changed"] }
			},

			sass : {
				files 	: ["<%= dir.source %>/<%= dir.public %>/**/*.scss"],
				tasks 	: ["sass:dev"],
				options	: {event: ["added","changed"]}
			},
			
			pureCSS: {
			  files: ["<%= dir.source %>/public/**/*.css"],
			  tasks: ["copy:pureCSS"],
			  options: {
			    event: ["added", "changed"]
			  }
			},

			js : {
				files 	: ["<%= dir.source %>/<%= dir.public %>/**/*.js"],
				tasks 	: ["uglify:dev"],
				options	: {
					event : ['added','changed']
				}
			},


			// WATCH - DELETE PROCESS
			deleted_backEnd : {
				files : ["<%= dir.source %>/?(<%= dir.resources %>|<%= dir.tests %>)/**/*"],
				tasks : [
					"clean:backEnd",
					"copy:backEnd"
				],
				options : { event : "deleted"}
			},

			deleted_public_PHP_and_HTML: {
				files: ["<%= dir.source %>/<%= dir.public %>/*.{html,php}"],
				tasks: [
					"clean:public_PHP_HTML",
					"copy:public_PHP_HTML"
				],
				options: {event : ["deleted"]}
			},

			deleted_sass_and_css : {
				files 	: ["<%= dir.source %>/<%= dir.public %>/<%= dir.styles %>/*.{scss,css}"],
				tasks 	: [
					"clean:sass",
					"sass:dev"
				],
				options : {event : ["deleted"]}
			},

			deleted_javascript : {
				files 	: ["<%= dir.source %>/<%= dir.public %>/**/*.js"],
				tasks 	: [
					"clean:js",
					"uglify:dev",
				],
				options	: {
					event : ['deleted']
				}
			},
		}
	});


	// LOAD TASKS
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-responsive-images");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");


	grunt.registerTask("dev", [
		"clean:target",
		"copy",
		// "responsive_images",
		"sass:dev",
		"uglify",
		"watch"
	]);

	grunt.registerTask("deploy",[
		"clean:target",
		"copy:pureCSS",			 			// TRANSFER ALL CSS FILES. SOON, THEY'LL BE PROCESSED BY A 'POSTCSS' TASK'
		"sass:deploy_" + outputStructure,	// SETS THE BEHAVIOR OF ASSETS OUTPUT (DEPLOYED AS MULTIPLE FILES OR AS A SINGLE FILE)
		// "sass:deploy",
	//   "copy",
	//   "responsive_images",
	//   "watch"
	]);

	// grunt.registerTask("default", "dev");

};
