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
            name: "alfresco/layout/StripedContent",
            config: {
               contentWidth: "1400px",
               widgets: [
                  {
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
                              name: "alfresco/header/Title",
                              align: "left",
                              config: {
                                 label: data.title,
                                 setBrowserTitle: "Horizon 3",
                                 targetUrl: "ap/ws/home"
                              }
                           },
                           {
                              id: "LOGOUT",
                              name: "alfresco/buttons/AlfButton",
                              align: "right",
                              config:
                              {
                                 label: "Logout",
                                 publishTopic: "ALF_DOLOGOUT"
                              }
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
