// function Util(){
//   this.jQueryActive = true;
//   this.register = [];
//   this.isNull = function(value) {
//     return (value === null);
//   };
//
//   this.isUndefined = function(value) {
//     console.log(typeof value);
//     return (typeof value === undefined);
//   };
//
//   this.isEmpty = function(value) {
//
//     if(typeof value === "undefined") {
//
//       console.log("valor undefined");
//       console.log(value);
//       return true;
//     }else if( !value.length && typeof value === "string"){
//       console.log("empty string");
//       console.log(value);
//       return true;
//     }else if(value === null) {
//       console.log("null value");
//       console.log(value);
//       return true;
//     }else if( !value.length && typeof value === "number" ) {
//       if(value === 0) console.log("zero number");
//       else console.log("negative number");
//       console.log(value);
//       // console.log(this.log);
//       return true;
//     }else {
//       console.log("not empty");
//       console.log(value);
//       return false;
//     }
//   };
//
//   this.isFunction = function(value) {
//     if( (typeof value === "function") && (value instanceof Function) ) {
//       console.log("is a function");
//       return true;
//     }
//   };
//
//   this.isArray = function(value) {
//     if( value instanceof Array ) {
//       console.log("is an array");
//       return true;
//     }
//   };
//
// }
//
// var util = new Util();
//
// // util.isEmpty("");
// // util.isEmpty();
// util.isEmpty(0);
// // util.isEmpty(-1);
// // util.isEmpty("Mario");
//
// console.table(util.register);
//
// Util.prototype = {
//   log : function(functionName,msg,value) {
//     this.register.push({
//       "function name" : functionName,
//       "result"        : msg + " ==> " + value
//     });
//   }
// };
// function Util(){
//   this.register = [];
//   this.isNull = function(value) {
//     return (value === null);
//   };
//
//   this.isUndefined = function(value) {
//     console.log(typeof value);
//     return (typeof value === undefined);
//   };
//
//   this.isEmpty = function(value) {
//
//     if(typeof value === "undefined") {
//
//       console.log("valor undefined");
//       console.log(value);
//       return true;
//     }else if( !value.length && typeof value === "string"){
//       console.log("empty string");
//       console.log(value);
//       return true;
//     }else if(value === null) {
//       console.log("null value");
//       console.log(value);
//       return true;
//     }else if( !value.length && typeof value === "number" ) {
//       if(value === 0) console.log("zero number");
//       else console.log("negative number");
//       console.log(value);
//       // console.log(this.log);
//       return true;
//     }else {
//       console.log("not empty");
//       console.log(value);
//       return false;
//     }
//   };
//
//   this.isFunction = function(value) {
//     if( (typeof value === "function") && (value instanceof Function) ) {
//       console.log("is a function");
//       return true;
//     }
//   };
//
//   this.isArray = function(value) {
//     if( value instanceof Array ) {
//       console.log("is an array");
//       return true;
//     }
//   };
//
// }
//
// var util = new Util();
//
// // util.isEmpty("");
// // util.isEmpty();
// util.isEmpty(0);
// // util.isEmpty(-1);
// // util.isEmpty("Mario");
//
// console.table(util.register);
//
// Util.prototype = {
//   log : function(functionName,msg,value) {
//     this.register.push({
//       "function name" : functionName,
//       "result"        : msg + " ==> " + value
//     });
//   }
// };
