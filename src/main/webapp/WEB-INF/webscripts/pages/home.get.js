<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

buildPageModel({
   title: "Welcome to Horizon 3",
   description: "The future of application creation starts here!",
   widgets: [
      {
         name: "horizon3/Launchpad",
         config: {
            widgets: [
               {
                  name: "horizon3/LaunchpadItem",
                  config: {
                     label: "Page Creator",
                     cssClass: "lpitem-admin",
                     targetUrl: "ap/ws/page-creator",
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
                     targetUrl: "ap/ws/app-creator",
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
});


