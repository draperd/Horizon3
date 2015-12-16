function buildPageModel(data) {
   model.jsonModel = {
      services: [
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
         "alfresco/services/NavigationService",
         "alfresco/services/LogoutService"
      ].concat(data.services || []),
      widgets: [
         {
            name: "horizon3/StripedContent",
            config: {
               contentWidth: "1400px",
               widgets: [
                  {
                     id: "TOP_HEADER",
                     name: "alfresco/layout/LeftAndRight",
                     stripeClass: "header",
                     className: "share-header-title",
                     config: {
                        semanticWrapper: "header",
                        widgets: [
                           {
                              name: "alfresco/logo/Logo",
                              align: "left",
                              config:
                              {
                                 logoClasses: "alfresco-logo-large"
                              }
                           },
                           {
                              name: "horizon3/Title",
                              align: "left",
                              config: {
                                 label: data.title,
                                 setBrowserTitle: "Horizon 3",
                                 targetUrl: "ap/ws/home"
                              }
                           },
                           {
                              name: "horizon3/Title",
                              align: "right",
                              config: {
                                 label: user.name
                              }
                           },
                           {
                              id: "LOGOUT_BUTTON",
                              name: "alfresco/buttons/AlfButton",
                              align: "right",
                              config:
                              {
                                 label: "Logout",
                                 additionalCssClasses: "primary-call-to-action",
                                 publishTopic: "ALF_DOLOGOUT"
                              }
                           }
                        ]
                     }
                  },
                  {
                     name: "alfresco/layout/VerticalWidgets",
                     stripeClass: "sub-header",
                     stripeStyle: "box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.25);background-color:#eee;",
                     config: {
                        widgets: [
                           {
                              name: "alfresco/menus/AlfMenuBar",
                              config: {
                                 widgets: [
                                    {
                                       name: "alfresco/menus/AlfMenuBarItem",
                                       config: {
                                          label: "Repository Browser",
                                          targetUrl: "ap/ws/repository"
                                       }
                                    },
                                    {
                                       name: "alfresco/menus/AlfMenuBarItem",
                                       config: {
                                          label: "Pages",
                                          targetUrl: "ap/ws/pages"
                                       }
                                    },
                                    {
                                       name: "alfresco/menus/AlfMenuBarItem",
                                       config: {
                                          label: "Application Templates",
                                          targetUrl: "ap/ws/application-types"
                                       }
                                    },
                                    {
                                       name: "alfresco/menus/AlfMenuBarItem",
                                       config: {
                                          label: "Applications Instances",
                                          targetUrl: "ap/ws/application-instances"
                                       }
                                    },
                                    {
                                       name: "alfresco/menus/AlfMenuBarItem",
                                       config: {
                                          label: "Users and Groups",
                                          targetUrl: "ap/ws/groups"
                                       }
                                    }
                                 ]
                              }
                           }
                        ],
                        renderFilter: [
                           {
                              target: "groupMemberships",
                              property: "GROUP_ALFRESCO_ADMINISTRATORS",
                              values: [true]
                           }
                        ]
                     }
                  },
                  {
                     name: "alfresco/layout/VerticalWidgets",
                     stripeClass: "menu",
                     stripeStyle: "border-bottom: none",
                     config: {
                        widgets: [
                           {
                              name: "alfresco/html/Label",
                              config: {
                                 label: data.description || ""
                              }
                           }
                        ]
                     }
                  },
                  {
                     name: "alfresco/layout/VerticalWidgets",
                     config: {
                        widgets: data.widgets || []
                     }
                  }
               ]
            }
         }
      ]
   };
   model.jsonModel.groupMemberships = user.properties["alfUserGroups"];
}
