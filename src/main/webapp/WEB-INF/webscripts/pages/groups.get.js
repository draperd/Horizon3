<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

var services = [
   "alfresco/services/CrudService",
   "alfresco/services/DialogService",
   "alfresco/services/NotificationService",
   "alfresco/services/OptionsService",
   "horizon3/UserAndGroupService"
];

buildPageModel({
   title: "Users and Groups",
   description: "Manage users and groups.",
   services: services,
   widgets: [
      {
         name: "alfresco/buttons/AlfButton",
         config: {
            label: "Create User Group",
            additionalCssClasses: "call-to-action",
            publishTopic: "ALF_CREATE_FORM_DIALOG_REQUEST",
            publishPayload: {
               dialogId: "CREATE_GROUP_DIALOG",
               dialogTitle: "Create User Group",
               formSubmissionTopic: "HORIZON3_CREATE_GROUP",
               widgets: [
                  {
                     name: "alfresco/forms/controls/TextBox",
                     config: {
                        fieldId: "ID",
                        label: "Identifier",
                        name: "groupId",
                        description: "Enter a unique identifier for the group. Only alphanumeric characters are allowed",
                        requirementConfig: {
                           initialValue: true
                        },
                        validationConfig: [
                           {
                              validation: "regex",
                              regex: "^[A-Za-z0-9]+$",
                              errorMessage: "Alphanumeric characters only"
                           }
                        ]
                     }
                  },
                  {
                    name: "alfresco/forms/controls/TextBox",
                    config: {
                      fieldId: "DISPLAYNAME",
                      label: "Display name",
                      name: "displayName"
                    }
                  }
               ]
            }
         }
      },
      {
         name: "alfresco/layout/HorizontalWidgets",
         config: {
            widgets: [
               {
                  name: "alfresco/lists/AlfList",
                  config: {
                     loadDataPublishTopic: "ALF_CRUD_GET_ALL",
                     loadDataPublishPayload: {
                        url: "api/groups?sortBy=displayName&zone=APP.DEFAULT"
                     },
                     itemsProperty: "data",
                     noDataMessage: "There are no groups",
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
                                                         propertyToRender: "displayName",
                                                         publishTopic: "ALF_RETRIEVE_SINGLE_DOCUMENT_REQUEST_SUCCESS"
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
               },
               {
                  name: "alfresco/documentlibrary/AlfDocument",
                  config: {
                     itemProperty: "",
                     nodeRef: null,
                     rawData: true,
                     widgets: [
                        {
                           name: "alfresco/buttons/AlfButton",
                           config: {
                              label: "Add User to Group",
                              publishTopic: "ALF_CREATE_FORM_DIALOG_REQUEST",
                              publishPayload: {
                                 dialogId: "CREATE_GROUP_DIALOG",
                                 dialogTitle: "Add User To Group",
                                 formSubmissionTopic: "HORIZON3_CREATE_GROUP",
                                 widgets: [
                                    {
                                       name: "alfresco/forms/controls/TextBox",
                                       config: {
                                          fieldId: "USER",
                                          label: "Select Users",
                                          name: "groupId",
                                          description: "Enter a unique identifier for the group. Only alphanumeric characters are allowed",
                                          requirementConfig: {
                                             initialValue: true
                                          },
                                          validationConfig: [
                                             {
                                                validation: "regex",
                                                regex: "^[A-Za-z0-9]+$",
                                                errorMessage: "Alphanumeric characters only"
                                             }
                                          ]
                                       }
                                    }
                                 ]
                              }
                           }
                        },
                        {
                           name: "alfresco/lists/AlfList",
                           config: {
                              pubSubScope: "GROUP_{shortName}",
                              waitForPageWidgets: false,
                              loadDataPublishTopic: "ALF_CRUD_GET_ALL",
                              loadDataPublishPayload: {
                                 url: "api/groups/{shortName}/children?sortBy=displayName&maxItems=50&skipCount=0"
                              },
                              itemsProperty: "data",
                              noDataMessage: "There are currently no users in this group",
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
                                                               name: "alfresco/renderers/Property",
                                                               config: {
                                                                  propertyToRender: "displayName"
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
                  }
               }
            ]

         }
      }
      ,
      {
         name: "alfresco/logging/DebugLog"
      }
   ]
});


