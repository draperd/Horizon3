function loadRemotePage(pageName, model) {
   var pageModel;
   if (pageName)
   {
      // If a page name has been supplied then retrieve it's details...
      // By passing the name only a single result should be returned...
      var json = remote.call("/remote-share/pages/name/" + pageName);
          pageDetails = null;
      try
      {
         if (json.status == 200)
         {
            pageDetails = JSON.parse(json.response);
         }
         else
         {
            model.jsonModelError = "remote.page.error.remotefailure";
         }
         if (pageDetails &&
             pageDetails.items &&
             pageDetails.items.length == 1 &&
             pageDetails.items[0].content)
         {
            pageDefinition = pageDetails.items[0].content;
         }
         else
         {
            model.jsonModelError = "remote.page.error.invalidData";
            model.jsonModelErrorArgs = pageDetails;
         }

         pageModel = JSON.parse(pageDefinition);
      }
      catch(e)
      {
         model.jsonModelError = "remote.page.load.error";
         model.jsonModelErrorArgs = page.url.templateArgs.pagename;
      }
   }
   else
   {
      // No page name supplied...
      model.jsonModelError = "remote.page.error.nopage";
   }
   return pageModel;
}

function loadAppData(appName, model) {
   var appData;
   var json = remote.call("/horizon3/app-instance/name/" + appName);
   try
   {
      if (json.status == 200)
      {
         appData = JSON.parse(json.response);
      }
      else
      {
         model.jsonModelError = "Could not find application";
      }
   }
   catch(e)
   {
      model.jsonModelError = "An error occurred parsing the application data";
   }
   return appData;
}

// At the very least we should have an application URI template arguments
// as all application pages should go through the URI template /<pageid>/<application-name>
// This will allow us to use the root page for that application...
var appName = page.url.templateArgs.application;
var remotePageName = page.url.templateArgs.pagename;
if (appName)
{
   var remotePage;
   var appData = loadAppData(page.url.templateArgs.application, model);
   if (appData)
   {
      if (!remotePageName)
      {
         remotePageName = appData.applicationType.rootPage.name;
      }
      var pageModel = loadRemotePage(remotePageName);
      if (pageModel)
      {
         model.jsonModel = pageModel;
         model.jsonModel.groupMemberships = user.properties.alfUserGroups;
      }
   }
}
else
{
   model.jsonModelError = "No application name provided";
}