var pageDefinition;
if (page.url.templateArgs.application)
{
   var targetAppName = page.url.templateArgs.application;

   // If a page name has been supplied then retrieve it's details...
   // By passing the name only a single result should be returned...
   var json = remote.call("horizon3/app-instances");
   var applicationInstances = null;
   try
   {
      if (json.status == 200)
      {
         applicationInstances = JSON.parse(json.response);
      }
      else
      {
         model.jsonModelError = "remote.page.error.remotefailure";
      }
      if (applicationInstances &&
          applicationInstances.items)
      {
         // Try and find the target application amongst all the application instances returned...
         var targetApp;
         applicationInstances.items.some(function(app, index) {
            if (app.name === targetAppName)
            {
               targetApp = app;
               return true;
            }
            return false;
         });

         if (targetApp)
         {
            // Get the application nodeRef
            // If there is no specific page, then get the default page from the associated application type...
            
            var appNodeRef = targetApp.nodeRef;
         }
         else
         {

         }



         pageDefinition = appDetails.items[0].content;
      }
      else
      {
         model.jsonModelError = "remote.page.error.invalidData";
         model.jsonModelErrorArgs = appDetails;
      }

      model.jsonModel = JSON.parse(pageDefinition);
      model.jsonModel.groupMemberships = user.properties["alfUserGroups"];
   }
   catch(e)
   {
      model.jsonModelError = "remote.page.load.error";
      model.jsonModelErrorArgs = page.url.templateArgs.application;
   }
}
else
{
   // No page name supplied...
   model.jsonModelError = "remote.page.error.nopage";
}

