<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">

var services = [
   "alfresco/services/CrudService",
   "alfresco/services/DialogService",
   "alfresco/services/NotificationService"
];

buildPageModel({
   title: "Applications",
   description: "The future of application creation starts here!",
   services: services,
   widgets: [
      {
         name: "alfresco/buttons/AlfButton",
         config: {
            label: "Create New",
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
                     name: "alfresco/forms/controls/TextBox",
                     config: {
                        name: "rootPage",
                        label: "Root page",
                        description: "Select the first page displayed for the application",
                        value: "",
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
                                                propertyToRender: "name"
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


