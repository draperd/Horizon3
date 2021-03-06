<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

var services = [
   "alfresco/services/ContentService",
   "alfresco/services/CrudService",
   "alfresco/services/DialogService",
   "alfresco/services/NotificationService",
   "alfresco/services/OptionsService"
];

buildPageModel({
   title: "Application Templates",
   description: "Manage the templates that are available to use for applications.",
   services: services,
   widgets: [
      {
         name: "alfresco/buttons/AlfButton",
         config: {
            label: "Create New",
            additionalCssClasses: "call-to-action",
            publishTopic: "ALF_CREATE_FORM_DIALOG_REQUEST",
            publishPayload: {
               dialogId: "CREATE_APP_TYPE_DIALOG",
               dialogTitle: "Create Application Type",
               formSubmissionTopic: "ALF_CRUD_CREATE",
               formSubmissionGlobal: true,
               formSubmissionPayloadMixin: {
                  url: "horizon3/app-type"
               },
               widgets: [
                  {
                     id: "APP_TYPE_NAME",
                     name: "alfresco/forms/controls/TextBox",
                     config: {
                        name: "name",
                        label: "Application Name",
                        description: "The unique name for this application type",
                        placeHolder: "Name...",
                        value: "",
                        requirementConfig: {
                           initialValue: true
                        }
                     }
                  },
                  {
                     id: "APP_TYPE_ROOT_PAGE",
                     name: "alfresco/forms/controls/Select",
                     config: {
                        name: "rootPage",
                        label: "Root page",
                        description: "Select the first page displayed for the application",
                        optionsConfig: {
                           publishTopic: "ALF_GET_FORM_CONTROL_OPTIONS",
                           publishPayload: {
                              url: "/horizon3/proxy/alfresco/remote-share/pages",
                              itemsAttribute: "items",
                              labelAttribute: "name",
                              valueAttribute: "nodeRef"
                           }
                        },
                        requirementConfig: {
                           initialValue: true
                        }
                     }
                  }
               ]
            }
         }
      },
      {
         name: "alfresco/lists/AlfList",
         config: {
            loadDataPublishTopic: "ALF_CRUD_GET_ALL",
            loadDataPublishPayload: {
               url: "horizon3/app-types"
            },
            noDataMessage: "There are no application types defined",
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
                              label: "Root Page"
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
                                             name: "alfresco/renderers/Property",
                                             config: {
                                                propertyToRender: "name"
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
                                             name: "alfresco/renderers/InlineEditSelect",
                                             config: {
                                                propertyToRender: "rootPage",
                                                postParam: "prop_surf_rootRage",
                                                refreshCurrentItem: true,
                                                publishTopic: "ALF_UPDATE_CONTENT_REQUEST",
                                                publishPayloadType: "PROCESS",
                                                publishPayloadModifiers: ["processCurrentItemTokens"],
                                                publishPayloadItemMixin: false,
                                                publishPayload: {
                                                   nodeRef: "{nodeRef}",
                                                   noRefresh: true
                                                },
                                                optionsConfig: {
                                                   publishTopic: "ALF_GET_FORM_CONTROL_OPTIONS",
                                                   publishPayload: {
                                                      url: "/horizon3/proxy/alfresco/remote-share/pages",
                                                      itemsAttribute: "items",
                                                      labelAttribute: "name",
                                                      valueAttribute: "nodeRef"
                                                   }
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
                                                   url: "horizon3/app-type/name/{name}",
                                                   requiresConfirmation: true,
                                                   confirmationTitle: "Confirm Deletion",
                                                   confirmationPrompt: "Delete {name}?",
                                                   successMessage: "Application Type {name} deleted"
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


