// manages JSPages
var page_manager = (
	function()
	{
		var pages = {};
		var current_page;
		return {
			get current_page() { return current_page },
			
			initialize: function()
			{
				// grapher 
				pages["grapher"] = new JS_page(
					function(context, lapse)
					{
						grapher.draw(context);
					}
					);
				// main menu
				pages["main_menu"] = new JS_page();
								
				pages["main_menu"].add_child(new JS_button(325,200,150,50,"Start"
					,function()
					{
						Engine.log("Started!");
						page_manager.switch_page("grapher");
					}));
				
				pages["main_menu"].add_child(new JS_label(400,150,"JS Grapher",24));
				
				// setting up default page (It really shouldn't be here)
				current_page = pages["grapher"];
			},
			
			set_page: function(page,id)
			{
				pages[id] = page;
			},
			
			switch_page: function(id)
			{
				if (pages[id])
				{
					current_page = pages[id];
					Engine.log("Navigated to page: " + id);
				}
				else 
				{
					Engine.log("Not a valid page: " + id);
				}
			},
			
		}
	}
)();