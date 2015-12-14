
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
   ],
   widgets: [
      {
         id: "MAIN_VERTICAL_LAYOUT",
         name: "alfresco/layout/VerticalWidgets",
         config: 
         {
            widgets: [
               {
                  id: "HEADER_BAR",
                  name: "alfresco/header/Header",
                  config: {
                     widgets: [
                        {
                           id: "APP_MENU_BAR",
                           name: "alfresco/header/AlfMenuBar",
                           align: "left",
                           config: {
                              widgets: [
                                 {
                                    id: "HOME",
                                    name: "alfresco/menus/AlfMenuBarItem",
                                    config: {
                                       label: "Home",
                                       targetUrl: "ap/ws/home"
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           id: "USER_MENU_BAR",
                           name: "alfresco/header/AlfMenuBar",
                           align: "right",
                           config: {
                              widgets: [
                                 {
                                    id: "USER_MENU",
                                    name: "alfresco/header/AlfMenuBarPopup",
                                    config: {
                                       label: "User Menu",
                                       widgets: [
                                          {
                                             id: "HEADER_USER_MENU",
                                             name: "alfresco/menus/AlfMenuGroup",
                                             config: {
                                                widgets: [
                                                   {
                                                      id: "LOGOUT",
                                                      name: "alfresco/header/AlfMenuItem",
                                                      config:
                                                      {
                                                         label: "Logout",
                                                         iconClass: "alf-user-logout-icon",
                                                         publishTopic: "ALF_DOLOGOUT"
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
                  id: "HEADER_TITLE_BAR",
                  name: "alfresco/layout/LeftAndRight",
                  className: "share-header-title",
                  config:
                  {
                     semanticWrapper: "header",
                     widgets:
                     [
                        {
                           id: "HEADER_LOGO",
                           name: "alfresco/logo/Logo",
                           align: "left",
                           config:
                           {
                              logoClasses: "alfresco-logo-only"
                           }
                        },
                        {
                           id: "HEADER_TITLE",
                           name: "alfresco/header/Title",
                           align: "left",
                           config: {
                              label: "Welcome to Horizon 3!",
                              setBrowserTitle: "Home"
                           }
                        }
                     ]
                  }
               },
               {
                  name: "horizon3/Launchpad",
                  config: {
                     widgets: [
                        {
                           name: "horizon3/LaunchpadItem",
                           config: {
                              label: "Page Creator",
                              cssClass: "lpitem-admin",
                              targetUrl: "hdp/ws/page-creator",
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
                           name: "horizon3/LaunchpadItem",
                           config: {
                              label: "Application Creator",
                              cssClass: "lpitem-admin",
                              targetUrl: "hdp/ws/app-creator",
                              renderFilter: [
                                 {
                                    target: "groupMemberships",
                                    property: "GROUP_ALFRESCO_ADMINISTRATORS",
                                    values: [true]
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
};
model.jsonModel.groupMemberships = user.properties["alfUserGroups"];
