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

function findObject(object, parameters) {
   if (!parameters.ancestors)
   {
      parameters.ancestors = [];
   }

   // Push the current object into the ancestors array for the purpose of recursion...
   // We're going to need to get the object ancestors...
   parameters.ancestors.push(object);

   if (Array.isArray(object))
   {
      object.forEach(function(child, index) {
         parameters.ancestors.push(index); // Push the index of the current object in the parent array
         findObject(child, parameters);
         parameters.ancestors.pop(); // Pop the index...
      });
   }
   else if (typeof object === "object")
   {
      // Iterate over the object keys...
      Object.keys(object).forEach(function(key) {

         if (key.indexOf(parameters.prefix) !== -1)
         {
            // Do some stuff with the object...
            if (typeof parameters.processFunction === "function")
            {
               parameters.processFunction.call(this, {
                  object: object[key],
                  config: parameters.config,
                  ancestors: parameters.ancestors
               });
            }
            else
            {
               // TODO: Log that the processFunction was not defined or was not a function
            }
         }
         else
         {
            // Recurse into the object...
            findObject(object[key], parameters);
         }
      });
   }

   // Pop the last ancestor as we exit the recursion...
   parameters.ancestors.pop();
}

// Borrowed from http://stackoverflow.com/questions/10253307/setting-a-depth-in-an-object-literal-by-a-string-of-dot-notation
function setObjectValue(obj, path, value) {
   var tags = path.split("."), len = tags.length - 1;
   for (var i = 0; i < len; i++) {
      obj = obj[tags[i]];
   }
   obj[tags[len]] = value;
}

// Sets the values in the supplied template...
function setTemplateConfiguration(parameters) {
   if (Array.isArray(parameters.object)  &&
       parameters.config &&
       parameters.ancestors)
   {
      var parent = parameters.ancestors[parameters.ancestors.length-2]; 
      parameters.object.forEach(function(templateMapping) {
         if (templateMapping.property)
         {
            // Get the last ancestor as this will be the "config" object of a widget in the 
            // template that has a property to be set...
            if (typeof templateMapping.id !== undefined)
            {
               //parent[templateMapping.property] = parameters.config[templateMapping.id];
               setObjectValue(parent, templateMapping.property, parameters.config[templateMapping.id]);

               // delete parent["_alfTemplateMapping_" + valueProperty];
            }
            else
            {
               // TODO: Log missing value attribute (e.g. the attribute to get the value from to set in the template)
            }
         }
         else
         {
            // TODO: Log incorrect parameters argument - missing some attributes
         }
      });

      delete parent._alfTemplateMappings;
      delete parent._alfIncludeInTemplate;
   }
   else
   {
      // TODO: Log incorrect parameters
   }
}

function processTemplate(parameters) {

   // The object should actually be a string (i.e. the name or nodeRef of the template)...
   if (typeof parameters.object === "string" &&
       parameters.ancestors)
   {
      // TODO: load the template...
      var loadedTemplate = loadRemotePage(parameters.object);

      // Get the parent in order to get the "config" to apply to the template...
      var parent = parameters.ancestors[parameters.ancestors.length-1];
      if (parent.config)
      {
         // Set the template configuration points...
         // findObject(loadedTemplate, "_alfTemplateMapping_", parent.config, null, setTemplateConfiguration);
         findObject(loadedTemplate, {
            prefix: "_alfTemplateMappings", 
            config: parent.config,
            processFunction: setTemplateConfiguration
         });
      }
      else
      {
         // TODO: Log missing config (not able to set configure template without values!)
      }

      // Swap the loaded template back into the correct location...
      var arrayToUpdate = parameters.ancestors[parameters.ancestors.length-3];
      var indexToSwapForTemplate = parameters.ancestors[parameters.ancestors.length-2];
      arrayToUpdate.splice(indexToSwapForTemplate, 1);
      for (var i=0; i<loadedTemplate.widgets.length; i++)
      {
         arrayToUpdate.splice(indexToSwapForTemplate + i, 0, loadedTemplate.widgets[i]);
      }

      // Add in any services from the template into the root services...
      if (loadedTemplate.services)
      {
         if (parameters.ancestors[0].services)
         {
            parameters.ancestors[0].services = parameters.ancestors[0].services.concat(loadedTemplate.services);
         }
         else
         {
            parameters.ancestors[0].services = loadedTemplate.services;
         }
      }
   }
   else
   {
      // TODO: Log incorrect object type - string expected for template name/nodeRef
   }
}

// Processes all templates found in the supplied widgets array...
function processTemplates(widgets) {
   findObject(widgets, {
      prefix: "_alfTemplateName",
      processFunction: processTemplate
   });
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
         processTemplates(pageModel);

         // Swap out any references to {app}
         var modelAsString = JSON.stringify(pageModel);

         var re = /\$\$APP\$\$/g;
         var updatedModel = modelAsString.replace(re, appData.nodeRef);
         pageModel = JSON.parse(updatedModel);

         model.jsonModel = pageModel;
         model.jsonModel.groupMemberships = user.properties.alfUserGroups;
      }
   }
}
else
{
   model.jsonModelError = "No application name provided";
}



