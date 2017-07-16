var Page = {

    lastScrollTop: 0,

    DOM: {
      "backToTopBtn": document.querySelector("#js_back-to-top") // DOM SELECTION OF THE BACK TO TOP BTN
    },

    self: function () {
      return this;
    },

    getScrollTop: function () {
      return $(document).scrollTop();
    },

	scrollDirection : function() {
		var body = document.querySelector("body"); 
		if( this.getScrollTop() >  this.lastScrollTop ) {
			if(!body.classList.contains("down")) body.classList.add("down");
		}
		else body.classList.remove("down");
		
		this.lastScrollTop = this.getScrollTop();
	},

    goToTop: function () {
      var _this = this; // Reference to Page Object

      // CLICK EVENT
		_this.DOM.backToTopBtn.addEventListener("click", function (e) {
			document.querySelector("body").classList.remove("menu-is-opened");
			
			$("html,body").animate({
				scrollTop: 0
			}, 1000);
      	});
    },

    btnVisibility : function () {
      var startPoint = 77, // FROM THIS POINT, THE BACK TO TOP BTN MUST BE VISIBLE
        btnIsVisibile = false; // VARIABLE TO TRACK THE BUTTON'S VISIBILITY
      var _this = this; // Reference to Page Object

      $(window).scroll(function () { // IN EACH SCROLL ON THE PAGE
        if (_this.getScrollTop() > startPoint && !btnIsVisibile) { // IF THE AMOUT OF SCROLL IS GREATER THAN THE START POINT LIMIT  (startPoint VARIABLE)
          _this.DOM.backToTopBtn.classList.toggle("is-visible");
          btnIsVisibile = true;
          // return true;
        } else if (_this.getScrollTop() < startPoint && btnIsVisibile) {
          _this.DOM.backToTopBtn.classList.toggle("is-visible");
          btnIsVisibile = false;
        }
      });
    },

  initOnLoad: function () {
	this.scrollDirection();
	this.goToTop();
	this.btnVisibility();
  }
};

Page.initOnLoad();
