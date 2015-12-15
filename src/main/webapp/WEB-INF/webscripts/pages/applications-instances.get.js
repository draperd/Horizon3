<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

var services = [
   "alfresco/services/CrudService",
   "alfresco/services/DialogService",
   "alfresco/services/NotificationService",
   "alfresco/services/OptionsService"
];

buildPageModel({
   title: "Application Instances",
   description: "The future of application creation starts here!",
   services: services,
   widgets: [
      {
         name: "alfresco/buttons/AlfButton",
         config: {
            label: "Create Application",
            publishTopic: "ALF_CREATE_FORM_DIALOG_REQUEST",
            publishPayload: {
               dialogId: "CREATE_APP_TYPE_DIALOG",
               dialogTitle: "Create Application Instance",
               formSubmissionTopic: "ALF_CRUD_CREATE",
               formSubmissionGlobal: true,
               formSubmissionPayloadMixin: {
                  url: "horizon3/app-instance"
               },
               widgets: [
                  {
                     id: "APP_TYPE_NAME",
                     name: "alfresco/forms/controls/TextBox",
                     config: {
                        name: "name",
                        label: "Application Name",
                        description: "The unique name for this application instance",
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
                        name: "applicationType",
                        label: "Application Template",
                        description: "Select the first page displayed for the application",
                        optionsConfig: {
                           publishTopic: "ALF_GET_FORM_CONTROL_OPTIONS",
                           publishPayload: {
                              url: "/horizon3/proxy/alfresco/horizon3/app-types",
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
               url: "horizon3/app-instances"
            },
            noDataMessage: "There are no application instances created",
            widgets: [
               {
                  name: "alfresco/lists/views/AlfListView",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/lists/views/layouts/Row",
                           config: {
                              widgets: [
                                 {
                                    name: "alfresco/lists/views/layouts/Cell",
                                    config: {
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
                                                   url: "app/{name}"
                                                }
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    name: "alfresco/lists/views/layouts/Cell",
                                    config: {
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
                                                   url: "horizon3/app-instance/name/{name}",
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


