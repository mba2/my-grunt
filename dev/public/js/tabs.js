var Tabs={DOM:{},updateDOM:function(){this.DOM={tabsWrapper:$(".tabs"),tabsNavBar:$(".tabs-nav"),tabsContentWrapper:$(".tabs-mainContent"),allTabs:$(".tabs-tab"),allTabsContent:$(".tabs-content"),test:$(".test")}},tabsToggleBehavior:function(){var t=this;this.DOM.allTabs.click(function(a){var s=$(this);if("is-active"===s.data("state"))return!1;var e=s.attr("data-tab-id");t.DOM.allTabs.filter("[data-state='is-active']").attr("data-state",""),t.DOM.allTabsContent.filter("[data-state='is-active']").attr("data-state","");s.attr("data-state","is-active"),t.DOM.allTabsContent.filter("[data-tab-id='"+e+"']").attr("data-state","is-active")})},init:function(){this.updateDOM(),this.tabsToggleBehavior()}};