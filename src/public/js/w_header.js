var Header = {
  DOM : {
  },

  header  : document.querySelector("#js_header"),

  isFixed : function() {
    return this.header.classList.contains("is-fixed");
  },
  isHidden : function() {
    return this.header.classList.contains("is-hidden");
  },

  overlay : function() {
    document.querySelector("#js_header").addEventListener("click",function(e) {
      if(e.target.getAttribute("id") === "js_header") document.querySelector("body").classList.remove("menu-is-opened");
    })
  },

  headerBehavior : function(){
  //   var headerHeight = $(this.header).height(); // STORE HEADER'S HEIGHT
  //   var scrollData = Page.scrollData();         // STORE ALL DATA ABOUT PAGE SCROLLING
  //     var scrollDirection = scrollData[0];      // STORE SCROLL DIRECTION
  //     var scrollTop       = scrollData[1];      // STORE THE CURRENT SCROLL TOP VALUE

  //     if( typeof scrollTop === undefined || scrollTop === null ) {        // TERMINATE THE FUNCTION IF A PAGE SCROLL VALUE IS NOT PASSED
  //       console.warn("A value for page's scroll was not passed to headerBehavior()");
  //       return false;
  //     }

  //     //SINCE A SCROLLTOP VALUE WAS PASSED...THIS FUNCTION GOES ON
  //     if( scrollTop > headerHeight ) {    // NOW, IF THE SCROLL TOP IS HIGHER THAN HEADER'S HEIGHT
  //       if( scrollDirection === "up" &&   // IF USER IS SCROLLING UP.
  //         !this.isFixed() &&              // ..AND THE HEADER IS NOT FIXED YET
  //          this.isHidden()                // ..AND THE HEADER IS VISIBLE
  //       ){
  //         this.header.classList.add("is-fixed");      // FIX THE HEADER
  //         this.header.classList.remove("is-hidden");  // DISPLAY THE HEADER
  //       }
  //       else if( scrollDirection === "down" &&        //  IF USER IS SCROLLING DOWN...
  //               !this.isHidden()                      //  AND THE HEADER IS NOT ALREADY HIDDEN
  //       ){
  //         this.header.classList.add("is-hidden");      // HIDE THE HEADER
  //         this.header.classList.remove("is-fixed");   // SET THE HEADER TO ITS INITIAL POSITION
  //       }
  //     } // END OF " if( scrollTop > headerHeight )"
  //     else {
  //       //ONLY IF THE HEADER IS FIXED
  //       if( this.isFixed ) {
  //           // alert("aeee");
  //         this.header.classList.remove("is-fixed"); // SET THE HEADER TO ITS INITIAL POSITION
  //       }
  //     }
  },
  menu : {
    toggleBehavior : function() {
      document.querySelector("#js_headerMenuBtn").addEventListener("click",function(e){
        document.querySelector("body").classList.toggle("menu-is-opened");
      });
    }
  },
  initOnLoad : function() {
    this.menu.toggleBehavior();
    this.overlay();
  }
};
