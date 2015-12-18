<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

var services = [
   "alfresco/services/CrudService",
   "alfresco/services/DialogService",
   "alfresco/services/NotificationService",
   "alfresco/services/OptionsService"
];

buildPageModel({
   title: "Pages and Templates",
   description: "Create and manage pages and templates.",
   services: services,
   widgets: [
      {
         name: "alfresco/buttons/AlfButton",
         config: {
            label: "Add Page",
            additionalCssClasses: "call-to-action",
            publishTopic: "ALF_NAVIGATE_TO_PAGE",
            publishPayload: {
               url: "ap/ws/page-creator"
            }
         }
      },
      {
         name: "alfresco/lists/AlfList",
         config: {
            loadDataPublishTopic: "ALF_CRUD_GET_ALL",
            loadDataPublishPayload: {
               url: "remote-share/pages"
            },
            noDataMessage: "There are no pages or templates",
            widgets: [
               {
                  name: "alfresco/lists/views/AlfListView",
                  config: {
                     additionalCssClasses: "bordered",
                     widgetsForHeader: [
                        {
                           name: "alfresco/lists/views/layouts/HeaderCell",
                           config: {
                              label: "Name"
                           }
                        },
                        {
                           name: "alfresco/lists/views/layouts/HeaderCell",
                           config: {
                              label: "Actions"
                           }
                        },
                     ],
                     widgets: [
                        {
                           name: "alfresco/lists/views/layouts/Row",
                           config: {
                              widgets: [
                                 {
                                    name: "alfresco/lists/views/layouts/Cell",
                                    config: {
                                       additionalCssClasses: "mediumpad",
                                       widgets: [
                                          {
                                             name: "alfresco/renderers/PropertyLink",
                                             config: {
                                                propertyToRender: "name",
                                                useCurrentItemAsPayload: false,
                                                publishTopic: "ALF_NAVIGATE_TO_PAGE",
                                                publishPayloadType: "PROCESS",
                                                publishPayloadModifiers: ["processCurrentItemTokens"],
                                                publishPayload: {
                                                   url: "ap/ws/page-creator?pageName={name}"
                                                }
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    name: "alfresco/lists/views/layouts/Cell",
                                    config: {
                                       additionalCssClasses: "mediumpad",
                                       widgets: [
                                          {
                                             name: "alfresco/renderers/PublishAction",
                                             config: {
                                                altText: "Click to delete {name}",
                                                iconClass: "delete-16",
                                                publishTopic: "ALF_CRUD_DELETE",
                                                publishPayloadType: "PROCESS",
                                                publishPayloadModifiers: ["processCurrentItemTokens"],
                                                publishPayload: {
                                                   url: "horizon3/page/name/{name}",
                                                   requiresConfirmation: true,
                                                   confirmationTitle: "Confirm Deletion",
                                                   confirmationPrompt: "Delete {name}?",
                                                   successMessage: "Application {name} deleted"
                                                }
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
   ]
});


