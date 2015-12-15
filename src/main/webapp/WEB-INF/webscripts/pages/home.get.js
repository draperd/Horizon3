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
         apps.push({
            name: "horizon3/LaunchpadItem",
            config: {
               label: appData.items[i].name,
               cssClass: "lpitem-admin",
               targetUrl: "app/" + appData.items[i].name
            }
         })
      }
   }
}
catch(e)
{
   // Error occurred processing the application data...
}

buildPageModel({
   title: "Welcome to Horizon 3",
   description: "The future of application creation starts here!",
   widgets: [
      {
         name: "horizon3/Launchpad",
         config: {
            widgets: apps
         }
      }
   ]
});