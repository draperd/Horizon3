<import resource="classpath:alfresco/site-webscripts/imports/horizon3.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/webscript/libs/creation/template-mapping-config.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/forms.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/DocumentList.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/HtmlListView.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/FixedHeaderFooter.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/ListViewLayout.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/ListView.lib.js">
<import resource="classpath:alfresco/site-webscripts/imports/models/Lists.lib.js">


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
                                 label: "Document Service",
                                 value: {
                                    name: "alfresco/services/DocumentService",
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
               title: "Empty",
               config: {
                  widgets: [
                     {
                        name: "alfresco/dnd/DragAndDropItems",
                        config: {
                           items: [
                              
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
      "alfresco/services/DialogService",
      "alfresco/services/PageService",
      "alfresco/services/OptionsService",
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
                                       okButtonPublishTopic: "ALF_CREATE_PAGE_DEFINITION",
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
                                                }
                                             }
                                          },
                                          {
                                             id: "DROPPED_SERVICES",
                                             name: "alfresco/forms/controls/DragAndDropTargetControl",
                                             config: {
                                                label: "Services",
                                                name: "services",
                                                description: "Services allow widgets to interact and to access data",
                                                value: null,
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
                                                value: null,
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
            getDefaultListsModel()
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

