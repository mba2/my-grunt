var Tabs = {
    DOM : {},

    updateDOM : function() {
        this.DOM = {
            "tabsWrapper"        : $(".tabs"),
            "tabsNavBar"         : $(".tabs-nav"),
            "tabsContentWrapper" : $(".tabs-mainContent"),
            "allTabs"            : $(".tabs-tab"),
            "allTabsContent"     : $(".tabs-content"),
            "test"               : $(".test"),
        }
    },

    tabsToggleBehavior : function() {
        var _this = this;

        this.DOM.allTabs.click(function(e) {
            var $el = $(this);
            if($el.data("state") === "is-active") { return false; }

            var targetID = $el.attr("data-tab-id");
            // REMOVE THE ACTIVE CLASS ONLY FOR SELECTED TAB
            var $activeTab = _this.DOM.allTabs.filter("[data-state='is-active']")
                                              .attr("data-state","");
            // REMOVE THE ACTIVE CLASS ONLY FOR SELECTED TAB CONTENT
            var $activeTabContent = _this.DOM.allTabsContent.filter("[data-state='is-active']")
                                              .attr("data-state","");
            // ACTIVATE THE NEW TAB
            $el.attr("data-state","is-active");
            // ACTIVATE THE NEW TAB CONTENT
            _this.DOM.allTabsContent.filter("[data-tab-id='"+ targetID + "']")
                                    .attr("data-state","is-active");
        });
    },

    init : function() {
        this.updateDOM();
        this.tabsToggleBehavior();
    }
}
