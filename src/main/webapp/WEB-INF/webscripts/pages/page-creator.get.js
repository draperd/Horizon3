<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/webscript/libs/creation/template-mapping-config.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/forms.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/DocumentList.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/HtmlListView.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/FixedHeaderFooter.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/ListViewLayout.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/ListView.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/Lists.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/Property.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/Document.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/NodePreview.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/SearchList.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/ClassicWindow.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/Button.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/Title.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/FacetFilters.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/Sidebar.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/VerticalWidgets.lib.js">

var pageName;
var services = [];
var widgets = [];
if (page.url.args["pageName"])
{
   var pageName = page.url.args["pageName"];
   var pageModel;
   if (pageName)
   {
      // If a page name has been supplied then retrieve it's details...
      // By passing the name only a single result should be returned...
      var json = remote.call("/remote-share/pages/name/" + pageName);
          pageDetails = null;
      try
      {
         if (json.status == 200)
         {
            pageDetails = JSON.parse(json.response);
         }
         else
         {
            model.jsonModelError = "remote.page.error.remotefailure";
         }
         if (pageDetails &&
             pageDetails.items &&
             pageDetails.items.length == 1 &&
             pageDetails.items[0].content)
         {
            pageDefinition = pageDetails.items[0].content;
            pageModel = JSON.parse(pageDefinition);
            services =  pageModel.services || [];
            widgets =  pageModel.widgets || [];
            
         }
         else
         {
            model.jsonModelError = "remote.page.error.invalidData";
            model.jsonModelErrorArgs = pageDetails;
         }

         
      }
      catch(e)
      {
         model.jsonModelError = "remote.page.load.error";
         model.jsonModelErrorArgs = page.url.templateArgs.pagename;
      }
   }
   else
   {
      // No page name supplied...
      model.jsonModelError = "remote.page.error.nopage";
   }
}


var palette = [
   {
      name: "alfresco/layout/AlfTabContainer",
      config: {
         widgets: [
            {
               id: "DRAG_PALETTE",
               title: "Pages",
               name: "alfresco/lists/AlfList",
               config: {
                  loadDataPublishTopic: "ALF_GET_ALL_REMOTE_PAGES",
                  noDataMessage: "No remote templates",
                  widgets: [
                     {
                        name: "alfresco/dnd/DragAndDropItemsListView"
                     }
                  ]
               }
            },
            {
               name: "alfresco/layout/VerticalWidgets",
               title: "Services",
               config: {
                  widgets: [
                     {
                        id: "DRAG_PALETTE",
                        title: "Widgets",
                        name: "alfresco/dnd/DragAndDropItems",
                        config: {
                           items: [
                              {
                                 type: [ "service" ],
                                 label: "Logging Service",
                                 value: {
                                    name: "alfresco/services/LoggingService",
                                    config: {
                                       loggingPreferences: {
                                          enabled: true,
                                          all: true
                                       },
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "Document Service",
                                 value: {
                                    name: "alfresco/services/DocumentService",
                                    config: {
                                       rawData: true,
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "REST API Service",
                                 value: {
                                    name: "alfresco/services/CrudService",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "Notification Service",
                                 value: {
                                    name: "alfresco/services/NotificationService",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "Navigation Service",
                                 value: {
                                    name: "alfresco/services/NavigationService",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "Dialog Service",
                                 value: {
                                    name: "alfresco/services/DialogService",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "Content Service",
                                 value: {
                                    name: "alfresco/services/ContentService",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "Upload Service",
                                 value: {
                                    name: "alfresco/services/UploadService",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "Action Service",
                                 value: {
                                    name: "alfresco/services/ActionService",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "service" ],
                                 label: "Search Service",
                                 value: {
                                    name: "alfresco/services/SearchService",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               name: "alfresco/layout/VerticalWidgets",
               title: "Layout",
               config: {
                  widgets: [
                     {
                        name: "alfresco/dnd/DragAndDropItems",
                        config: {
                           items: [
                              {
                                 type: [ "widget" ],
                                 label: "Fixed Header Footer",
                                 value: {
                                    name: "alfresco/layout/FixedHeaderFooter",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Sidebar container",
                                 value: {
                                    name: "alfresco/layout/AlfSideBarContainer",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Vertical Widgets",
                                 value: {
                                    name: "alfresco/layout/VerticalWidgets",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Window",
                                 value: {
                                    name: "alfresco/layout/ClassicWindow",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               name: "alfresco/layout/VerticalWidgets",
               title: "Lists",
               config: {
                  widgets: [
                     {
                        name: "alfresco/dnd/DragAndDropItems",
                        config: {
                           items: [
                              {
                                 type: [ "widget" ],
                                 label: "Document List",
                                 value: {
                                    name: "alfresco/documentlibrary/AlfDocumentList",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Search List",
                                 value: {
                                    name: "alfresco/search/AlfSearchList",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Basic List",
                                 value: {
                                    name: "alfresco/lists/AlfSortablePaginatedList",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "List View",
                                 value: {
                                    name: "alfresco/lists/views/AlfListView",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "HTML List View",
                                 value: {
                                    name: "alfresco/lists/views/HtmlListView",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Table",
                                 value: {
                                    name: "alfresco/lists/views/layouts/Table",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Row",
                                 value: {
                                    name: "alfresco/lists/views/layouts/Row",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Cell",
                                 value: {
                                    name: "alfresco/lists/views/layouts/Cell",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Heading",
                                 value: {
                                    name: "alfresco/lists/views/layouts/HeaderCell",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Grid Entry",
                                 value: {
                                    name: "alfresco/lists/views/layouts/CellContainer",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Column",
                                 value: {
                                    name: "alfresco/lists/views/layouts/Column",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               name: "alfresco/layout/VerticalWidgets",
               title: "Forms",
               config: {
                  widgets: [
                     {
                        name: "alfresco/dnd/DragAndDropItems",
                        config: {
                           items: [
                              {
                                 type: [ "widget" ],
                                 label: "Form Control",
                                 value: {
                                    name: "alfresco/forms/controls/TextBox",
                                    config: {
                                       label: "No Label",
                                       description: "No description",
                                       value: ""
                                    }
                                 }
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               name: "alfresco/layout/VerticalWidgets",
               title: "Renderers",
               config: {
                  widgets: [
                     {
                        name: "alfresco/dnd/DragAndDropItems",
                        config: {
                           items: [
                              {
                                 type: [ "widget" ],
                                 label: "Property",
                                 value: {
                                    name: "alfresco/renderers/Property",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Property Link",
                                 value: {
                                    name: "alfresco/renderers/PropertyLink",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Node",
                                 value: {
                                    name: "alfresco/documentlibrary/AlfDocument",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Preview",
                                 value: {
                                    name: "alfresco/preview/AlfDocumentPreview",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              }
                           ]
                        }
                     }
                  ]
               }
            },
            {
               name: "alfresco/layout/VerticalWidgets",
               title: "Other",
               config: {
                  widgets: [
                     {
                        name: "alfresco/dnd/DragAndDropItems",
                        config: {
                           items: [
                              {
                                 type: [ "widget" ],
                                 label: "Navigation Button",
                                 value: {
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Title",
                                 value: {
                                    name: "alfresco/header/Title",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Search facet",
                                 value: {
                                    name: "alfresco/search/FacetFilters",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
                                    }
                                 }
                              },
                              {
                                 type: [ "widget" ],
                                 label: "Debug Log",
                                 value: {
                                    name: "alfresco/logging/DebugLog",
                                    config: {
                                       useModellingService: true,
                                       label: "Widgets",
                                       targetProperty: "config.widgets"
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

   
];

var coreWidgets = [
   {
      name: "alfresco/buttons/AlfButton",
      config: {
         label: "Refresh Remote Templates",
         publishTopic: "ALF_DOCLIST_RELOAD_DATA"
      }
   }
];

function getBasicCreationTemplateServices() {
   return [
      "alfresco/services/DialogService",
      "alfresco/services/PageService",
      "alfresco/services/OptionsService",
      "alfresco/services/NotificationService",
      "alfresco/services/CrudService",
      "horizon3/PageCreationService"
   ];
}

function getBasicCreationTemplateWidgets(paletteWidgets) {
   return [
      {
         name: "alfresco/layout/VerticalWidgets",
         config: {
            widgets: [
               {
                  name: "alfresco/layout/HorizontalWidgets",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/layout/ClassicWindow",
                           widthPx: 300,
                           config: {
                              title: "Palette",
                              widgets: paletteWidgets
                           }
                        },
                        {
                           name: "alfresco/layout/ClassicWindow",
                           config: {
                              title: "Canvas",
                              widgets: [
                                 {
                                    id: "FORM1",
                                    name: "alfresco/forms/Form",
                                    config: {
                                       scopeFormControls: false,
                                       okButtonLabel: "Save",
                                       okButtonPublishTopic: (!pageName ? "ALF_CREATE_PAGE_DEFINITION": "ALF_UPDATE_PAGE_DEFINITION"),
                                       okButtonPublishGlobal: true,
                                       showCancelButton: false,
                                       widgets: [
                                          {
                                             name: "alfresco/forms/controls/TextBox",
                                             config: {
                                                name: "pageName",
                                                label: "Name",
                                                description: "This is the name of the page or template as it will be saved on the repository",
                                                placeHolder: "Name...",
                                                requirementConfig: {
                                                   initialValue: true
                                                },
                                                value: pageName || ""
                                             }
                                          },
                                          {
                                             id: "DROPPED_SERVICES",
                                             name: "alfresco/forms/controls/DragAndDropTargetControl",
                                             config: {
                                                label: "Services",
                                                name: "services",
                                                description: "Services allow widgets to interact and to access data",
                                                value: services,
                                                acceptTypes: ["service"],
                                                useModellingService: true
                                             }
                                          },
                                          {
                                             id: "ROOT_DROPPED_ITEMS1",
                                             name: "alfresco/forms/controls/DragAndDropTargetControl",
                                             config: {
                                                label: "Widgets",
                                                name: "widgets",
                                                description: "Widgets represent the visible user-interface",
                                                value: widgets,
                                                acceptTypes: ["widget"],
                                                useModellingService: true
                                             }
                                          }
                                       ],
                                       widgetsAdditionalButtons: [
                                          {
                                             name: "alfresco/buttons/AlfButton",
                                             config: {
                                                label: "Preview",
                                                publishTopic: "HORIZON3_GENERATE_PREVIEW"
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
}

var widgets = getBasicCreationTemplateWidgets(palette);
var services = getBasicCreationTemplateServices().concat([
   {
      name: "alfresco/services/DragAndDropModellingService",
      config: {
         models: [
            // getDefaultClassicWindowModel(),
            getDefaultFormControlModel(),
            getDefaultDocumentListModel(),
            getDefaultHtmlListViewModel(),
            getDefaultFixedHeaderFooterModel(),
            getDefaultListViewLayoutModel(),
            getDefaultListViewModel(),
            getDefaultListsModel(),
            getDefaultPropertyModel(),
            getDefaultDocumentModel(),
            getDefaultNodePreviewModel(),
            getDefaultSearchListModel(),
            getDefaultClassicWindowModel(),
            getDefaultButtonModel(),
            getDefaultTitleModel(),
            getDefaultFacetFiltersModel(),
            getDefaultSidebarModel(),
            getDefaultVerticalWidgetsModel()
         ]
      }
   }
]);

buildPageModel({
   title: "Page and Template Creation",
   description: "Create pages and templates for your applications.",
   services: services,
   widgets: widgets
});

