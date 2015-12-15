<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">
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

function getBasicCreationTemplateServices() {
   return [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true,
               warn: true,
               error: true
            }
         }
      },
      "alfresco/services/DialogService",
      "alfresco/services/PageService",
      "alfresco/services/OptionsService",
      "horizon3/PageCreationService"
   ];
}

function getBasicCreationTemplateWidgets(paletteWidgets) {
   return [
      {
         name: "alfresco/layout/VerticalWidgets",
         config: {
            widgets: [
               {
                  name: "alfresco/layout/HorizontalWidgets",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/layout/ClassicWindow",
                           widthPx: 300,
                           config: {
                              title: "Widget Palette",
                              widgets: paletteWidgets
                           }
                        },
                        {
                           name: "alfresco/layout/ClassicWindow",
                           config: {
                              title: "Widget Layout",
                              widgets: [
                                 {
                                    id: "FORM1",
                                    name: "alfresco/forms/Form",
                                    config: {
                                       scopeFormControls: false,
                                       okButtonLabel: "Save",
                                       okButtonPublishTopic: "ALF_CREATE_PAGE_DEFINITION",
                                       okButtonPublishGlobal: true,
                                       showCancelButton: false,
                                       widgets: [
                                          {
                                             name: "alfresco/forms/controls/TextBox",
                                             config: {
                                                name: "pageName",
                                                label: "Template Name",
                                                description: "This is the name of the page as it will be saved on the repository",
                                                placeHolder: "Name...",
                                                requirementConfig: {
                                                   initialValue: true
                                                }
                                             }
                                          },
                                          {
                                             id: "ROOT_DROPPED_ITEMS1",
                                             name: "alfresco/forms/controls/DragAndDropTargetControl",
                                             config: {
                                                label: "Widgets",
                                                name: "widgets",
                                                value: null,
                                                acceptTypes: ["widget"],
                                                useModellingService: true
                                             }
                                          }
                                       ],
                                       widgetsAdditionalButtons: [
                                          {
                                             name: "alfresco/buttons/AlfButton",
                                             config: {
                                                label: "Preview",
                                                publishTopic: "HORIZON3_GENERATE_PREVIEW"
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ];
}

var widgets = getBasicCreationTemplateWidgets(palette);
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
   description: "Create pages and templates for your applications.",
   services: services,
   widgets: widgets
});

