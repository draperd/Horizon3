<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

var apps = [];
var json = remote.call("/horizon3/app-instances");
var appData;
try
{
   if (json.status == 200)
   {
      appData = JSON.parse(json.response);
   }
   if (appData &&
       appData.items)
   {
      for (var i=0; i<appData.items.length; i++)
      {
         var app = {
            name: "horizon3/LaunchpadItem",
            config: {
               label: appData.items[i].name,
               cssClass: "lpitem-admin",
               targetUrl: "app/" + appData.items[i].name
            }
         }; 

         if (appData.items[i].groups)
         {
            app.config.renderFilter = [
               {
                  target: "groupMemberships",
                  property: "GROUP_" + appData.items[i].groups,
                  values: [true]
               }
            ];
         }
         apps.push(app);
      }
   }
}
catch(e)
{
   // Error occurred processing the application data...
}

buildPageModel({
   title: "Welcome to Horizon 3",
   description: "The following applications are available.",
   widgets: [
      {
         name: "horizon3/Launchpad",
         config: {
            widgets: apps
         }
      }
   ]
});