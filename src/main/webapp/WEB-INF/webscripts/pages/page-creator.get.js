<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/webscript/libs/creation/basic-creation-template.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/webscript/libs/dnd-models/layout.lib.js">

var palette = [
   {
      id: "DRAG_PALETTE",
      name: "alfresco/lists/AlfList",
      config: {
         loadDataPublishTopic: "ALF_GET_ALL_REMOTE_PAGES",
         noDataMessage: "No remote templates",
         widgets: [
            {
               name: "alfresco/dnd/DragAndDropItemsListView"
            }
         ]
      }
   },
   {
      id: "DRAG_PALETTE",
      name: "alfresco/dnd/DragAndDropItems",
      config: {
         items: [
            {
               type: [ "widget" ],
               label: "Classic Window",
               value: {
                  name: "alfresco/layout/ClassicWindow",
                  config: {
                     title: "Set a title"
                  }
               }
            }
         ]
      }
   }
];

var coreWidgets = [
   {
      name: "alfresco/buttons/AlfButton",
      config: {
         label: "Refresh Remote Templates",
         publishTopic: "ALF_DOCLIST_RELOAD_DATA"
      }
   }
];

var widgets = coreWidgets.concat(getBasicCreationTemplateWidgets(palette)).concat([
   {
      name: "alfresco/logging/DebugLog"
   }
]);

var services = getBasicCreationTemplateServices().concat([
   {
      name: "alfresco/services/DragAndDropModellingService",
      config: {
         models: [
            getDefaultClassicWindowModel()
         ]
      }
   }
]);

buildPageModel({
   title: "Page and Template Creation",
   description: "The future of application creation starts here!",
   services: services,
   widgets: widgets
});

