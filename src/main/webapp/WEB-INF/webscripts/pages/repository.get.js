<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/webscript/libs/doclib/doclib.lib.js">

var services = [
   {
      name: "alfresco/services/DocumentService",
      config: {
         rawData: true
      }
   },
   "alfresco/services/NavigationService"
].concat(getDocumentLibraryServices());

buildPageModel({
   title: "Welcome to Horizon 3",
   description: "The future of application creation starts here!",
   services: services,
   widgets: [
      getDocLib({
         siteId: null, 
         containerId: null, 
         rootNode: "alfresco://company/home", 
         rootLabel: "Repository",
         getUserPreferences: true
      })
   ]
});