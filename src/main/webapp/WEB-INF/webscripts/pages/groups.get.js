<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

var services = [
   "alfresco/services/CrudService",
   "alfresco/services/DialogService",
   "alfresco/services/NotificationService",
   "alfresco/services/OptionsService",
   "horizon3/UserAndGroupService"
];

var usersTab = {
   name: "alfresco/layout/VerticalWidgets",
   title: "Users",
   config: {
      widgets: [
         {
            name: "alfresco/html/Spacer",
            config: {
               height: "10px",
            }
         },
         {
            name: "alfresco/buttons/AlfButton",
            config: {
               label: "Create User",
               additionalCssClasses: "call-to-action",
               publishTopic: "ALF_CREATE_FORM_DIALOG_REQUEST",
               publishPayload: {
                  dialogId: "CREATE_USER_DIALOG",
                  dialogTitle: "Create User",
                  formSubmissionTopic: "ALF_CRUD_CREATE",
                  formSubmissionGlobal: true,
                  formSubmissionPayloadMixin: {
                     url: "api/people",
                     responseScope: "USERS"
                  },
                  widgets: [
                     {
                        name: "alfresco/forms/controls/TextBox",
                        config: {
                           fieldId: "USERNAME",
                           label: "User name",
                           name: "userName",
                           description: "Enter a unique identifier for the user",
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
                           fieldId: "FIRSTNAME",
                           label: "First name",
                           description: "Enter the first name of the user.",
                           name: "firstName",
                           requirementConfig: {
                              initialValue: true
                           }
                       }
                     },
                     {
                        name: "alfresco/forms/controls/TextBox",
                        config: {
                           fieldId: "LASTNAME",
                           label: "Last name",
                           description: "Enter the last name of the user.",
                           name: "lastName",
                           requirementConfig: {
                              initialValue: true
                           }
                       }
                     },
                     {
                        name: "alfresco/forms/controls/TextBox",
                        config: {
                           fieldId: "EMAIL",
                           label: "E-mail address",
                           description: "Enter the e-mail address of the user.",
                           name: "email",
                           requirementConfig: {
                              initialValue: true
                           }
                       }
                     },
                     {
                        name: "alfresco/forms/controls/TextBox",
                        config: {
                           fieldId: "PASSWORD",
                           label: "Password",
                           description: "Enter a password for the user.",
                           name: "password",
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
               pubSubScope: "USERS",
               loadDataPublishTopic: "ALF_CRUD_GET_ALL",
               loadDataPublishPayload: {
                  url: "api/people?filter="
               },
               itemsProperty: "people",
               noDataMessage: "There are no users",
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
                                                   propertyToRender: "firstName"
                                                }
                                             },
                                             {
                                                name: "alfresco/renderers/Property",
                                                config: {
                                                   propertyToRender: "lastName"
                                                }
                                             },
                                             {
                                                name: "alfresco/renderers/Property",
                                                config: {
                                                   propertyToRender: "userName",
                                                   renderedValuePrefix: "(",
                                                   renderedValueSuffix: ")",
                                                   deemphasized: true
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
                                                   altText: "Click to delete {firstName} {lastName}",
                                                   iconClass: "delete-16",
                                                   publishTopic: "ALF_CRUD_DELETE",
                                                   publishPayloadType: "PROCESS",
                                                   publishPayloadModifiers: ["processCurrentItemTokens"],
                                                   publishGlobal: true,
                                                   publishPayload: {
                                                      url: "api/people/{userName}",
                                                      requiresConfirmation: true,
                                                      confirmationTitle: "Confirm Deletion",
                                                      confirmationPrompt: "Delete {firstName} {lastName}?",
                                                      successMessage: "{firstName} {lastName} deleted"
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
   }
};

var groupUsersModel = [
   {
      name: "alfresco/buttons/AlfButton",
      config: {
         label: "Add User to Group",
         publishTopic: "ALF_CREATE_FORM_DIALOG_REQUEST",
         publishPayload: {
            dialogId: "ADD_USERS_TO_GROUP_DIALOG",
            dialogTitle: "Add User To Group",
            formSubmissionTopic: "HORIZON3_ADD_USERS_TO_GROUP",
            formSubmissionPayloadMixin: {
               groupId: "{shortName}",
               responseScope: "GROUP_{shortName}"
            },
            widgets: [
               {
                  name: "alfresco/forms/controls/Select",
                  config: {
                     fieldId: "USER",
                     label: "Select User",
                     name: "userName",
                     optionsConfig: {
                        publishTopic: "ALF_GET_FORM_CONTROL_OPTIONS",
                        publishPayload: {
                           url: url.context + "/proxy/alfresco/api/people?filter=",
                           itemsAttribute: "people",
                           labelAttribute: "userName",
                           valueAttribute: "userName"
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
                              },
                              {
                                 name: "alfresco/lists/views/layouts/Cell",
                                 config: {
                                    widgets: [
                                       {
                                          name: "alfresco/renderers/PublishAction",
                                          config: {
                                             propertyToRender: "displayName",
                                             iconClass: "delete-16",
                                             publishTopic: "ALF_CRUD_DELETE",
                                             publishGlobal: true,
                                             publishPayloadType: "PROCESS",
                                             publishPayloadModifiers: ["processCurrentItemTokens"],
                                             publishPayload: {
                                                url: "api/groups/{shortName}/children/{displayName}",
                                                requiresConfirmation: true,
                                                confirmationTitle: "Remove User From Group",
                                                confirmationPrompt: "Remove {displayName} from the group?",
                                                successMessage: "User {displayName} removed"
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
];



var groupsTab = {
   name: "alfresco/layout/VerticalWidgets",
   title: "Groups",
   config: {
      widgets: [
         {
            name: "alfresco/html/Spacer",
            config: {
               height: "10px",
            }
         },
         {
            name: "alfresco/layout/HorizontalWidgets",
            config: {
               widgets: [
                  {
                     name: "alfresco/layout/VerticalWidgets",
                     config: {
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
                                                   focusHighlighting: true,
                                                   widgets: [
                                                      {
                                                         name: "alfresco/lists/views/layouts/Cell",
                                                         config: {
                                                            widgets: [
                                                               {
                                                                  name: "alfresco/renderers/PropertyLink",
                                                                  config: {
                                                                     propertyToRender: "displayName",
                                                                     useCurrentItemAsPayload: false,
                                                                     publishTopic: "HORIZON3_SHOW_GROUP_USERS",
                                                                     publishPayloadType: "PROCESS",
                                                                     publishPayloadModifiers: ["processCurrentItemTokens"],
                                                                     publishPayload: {
                                                                        widgets: groupUsersModel
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
                                                                     propertyToRender: "displayName",
                                                                     iconClass: "delete-16",
                                                                     publishTopic: "ALF_CRUD_DELETE",
                                                                     publishPayloadType: "PROCESS",
                                                                     publishPayloadModifiers: ["processCurrentItemTokens"],
                                                                     publishPayload: {
                                                                        url: "api/groups/{shortName}",
                                                                        requiresConfirmation: true,
                                                                        confirmationTitle: "Confirm Deletion",
                                                                        confirmationPrompt: "Delete {displayName}?",
                                                                        successMessage: "Application {displayName} deleted"
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
                     }
                  },
                  {
                     name: "alfresco/layout/DynamicWidgets",
                     config: {
                        subscriptionTopic: "HORIZON3_SHOW_GROUP_USERS"
                     }
                  }
               ]

            }
         }
      ]
   }
};


buildPageModel({
   title: "Users and Groups",
   description: "Manage users and groups.",
   services: services,
   widgets: [
      {
         name: "alfresco/layout/AlfTabContainer",
         config: {
            widgets: [
               groupsTab,
               usersTab,
               {
                  name: "alfresco/logging/DebugLog",
                  title: "Debug Log"
               }
            ]
         }
      }
   ]
});


