<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

var services = [
   "alfresco/services/ContentService",
   "alfresco/services/CrudService",
   "alfresco/services/DialogService",
   "alfresco/services/NotificationService",
   "alfresco/services/OptionsService"
];

buildPageModel({
   title: "Application Instances",
   description: "Manage the application instances that are available.",
   services: services,
   widgets: [
      {
         name: "alfresco/buttons/AlfButton",
         config: {
            label: "Create Application",
            additionalCssClasses: "call-to-action",
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
                  },
                  {
                     name: "alfresco/forms/controls/CheckBox",
                     config: {
                        fieldId: "RESTRICT",
                        name: "restrict",
                        label: "Restrict to certain groups",
                        description: "Check this box if you only want to allow this application to be visible to certain groups",
                        value: false
                     }
                  },
                  {
                     name: "alfresco/forms/controls/Select",
                     config: {
                        name: "groups",
                        label: "Group Visibility",
                        description: "Select the user group that will be able to access this application",
                        visibilityConfig: {
                           initialValue: false,
                           rules: [
                              {
                                 targetId: "RESTRICT",
                                 is: [true]
                              }
                           ]
                        },
                        optionsConfig: {
                           publishTopic: "ALF_GET_FORM_CONTROL_OPTIONS",
                           publishPayload: {
                              url: "/horizon3/proxy/alfresco/api/groups?sortBy=displayName&zone=APP.DEFAULT",
                              itemsAttribute: "data",
                              labelAttribute: "displayName",
                              valueAttribute: "shortName"
                           }
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
                              label: "Template Used"
                           }
                        },
                        {
                           name: "alfresco/lists/views/layouts/HeaderCell",
                           config: {
                              label: "Group Visibility"
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
                                       additionalCssClasses: "mediumpad",
                                       widgets: [
                                          {
                                             name: "alfresco/renderers/Property",
                                             config: {
                                                propertyToRender: "applicationType.name"
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
                                          // {
                                          //    name: "alfresco/renderers/Property",
                                          //    config: {
                                          //       propertyToRender: "groups"
                                          //    }
                                          // }
                                          {
                                             name: "alfresco/renderers/InlineEditSelect",
                                             config: {
                                                propertyToRender: "groups",
                                                postParam: "prop_hzn_groupVisibility",
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
                                                      url: "/horizon3/proxy/alfresco/api/groups?sortBy=displayName&zone=APP.DEFAULT",
                                                      itemsAttribute: "data",
                                                      labelAttribute: "displayName",
                                                      valueAttribute: "shortName"
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
                                                propertyToRender: "name",
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


