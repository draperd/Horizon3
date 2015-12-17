function getListsConfig() {
   return [
   {
      config: {
         targetProperty: "config.widgets",
         useModellingService: true,
         label: "Widgets",
         widgets: [
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Widgets",
                  widgets: [
                     {
                        config: {
                           value: "items",
                           description: "lists.config.itemsProperty.description",
                           label: "lists.config.itemsProperty.label",
                           fieldId: "ITEM_PROP",
                           name: "config.itemsProperty",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.itemsProperty.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/TextBox",
                        label: "lists.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "true",
                           description: "lists.config.loadDataImmediately.description",
                           label: "lists.config.loadDataImmediately.label",
                           fieldId: "LOAD_IMMEDIATELY",
                           name: "config.loadDataImmediately",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.loadDataImmediately.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/CheckBox",
                        label: "lists.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "true",
                           description: "lists.config.waitForPageWidgets.description",
                           label: "lists.config.waitForPageWidgets.label",
                           fieldId: "WAIT_FOR_PAGE",
                           name: "config.waitForPageWidgets",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.waitForPageWidgets.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/CheckBox",
                        label: "lists.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "metadata",
                           description: "lists.config.metadataProperty.description",
                           label: "lists.config.metadataProperty.label",
                           fieldId: "METADATA_PROPERTY",
                           name: "config.metadataProperty",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.metadataProperty.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/TextBox",
                        label: "lists.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "totalRecords",
                           description: "lists.config.totalResultsProperty.description",
                           label: "lists.config.totalResultsProperty.label",
                           fieldId: "TOTAL_RESULTS_PROP",
                           name: "config.totalResultsProperty",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.totalResultsProperty.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/TextBox",
                        label: "lists.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "ALF_CRUD_GET_ALL",
                           description: "lists.config.loadDataPublishTopic.description",
                           label: "lists.config.loadDataPublishTopic.label",
                           fieldId: "LOAD_TOPIC",
                           name: "config.loadDataPublishTopic",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.loadDataPublishTopic.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: false,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/TextBox",
                        label: "lists.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        name: "alfresco/forms/controls/TextBox",
                        config: {
                           fieldId: "LOAD_PAYLOAD",
                           name: "config.loadDataPublishPayload.url",
                           value: "",
                           label: "Repository REST API",
                           description: "This is the repository API to get data from"
                        }
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "lists.alfresco/forms/ControlColumn.label",
               title: "Data"
            },
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Widgets",
                  widgets: [
                     {
                        config: {
                           value: "false",
                           description: "lists.config.useInfiniteScroll.description",
                           label: "lists.config.useInfiniteScroll.label",
                           fieldId: "INFINITE_SCROLL",
                           name: "config.useInfiniteScroll",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.useInfiniteScroll.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/CheckBox",
                        label: "lists.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "false",
                           description: "lists.config.usePagination.description",
                           label: "lists.config.usePagination.label",
                           fieldId: "PAGINATION",
                           name: "config.usePagination",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.usePagination.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/CheckBox",
                        label: "lists.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "25",
                           description: "lists.config.currentPageSize.description",
                           label: "lists.config.currentPageSize.label",
                           fieldId: "PAGESIZE",
                           name: "config.currentPageSize",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.currentPageSize.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/NumberSpinner",
                        label: "lists.alfresco/forms/controls/NumberSpinner.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "lists.alfresco/forms/ControlColumn.label",
               title: "Pagination"
            },
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Widgets",
                  widgets: [
                     {
                        config: {
                           value: "Could not load data",
                           description: "lists.config.dataFailureMessage.description",
                           label: "lists.config.dataFailureMessage.label",
                           fieldId: "DATA_FAIL_MSG",
                           name: "config.dataFailureMessage",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.dataFailureMessage.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/TextBox",
                        label: "lists.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "No results",
                           description: "lists.config.noDataMessage.description",
                           label: "lists.config.noDataMessage.label",
                           fieldId: "NO_RESULTS_MSG",
                           name: "config.noDataMessage",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "lists.config.noDataMessage.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/TextBox",
                        label: "lists.alfresco/forms/controls/TextBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "lists.alfresco/forms/ControlColumn.label",
               title: "Messages"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "lists.alfresco/forms/TabbedControls.label"
   }
];
}

function getListsNestedConfig() {
   return [];
}

function getListsDisplay() {
   return [
   {
      config: {
         value: "{value}",
         widgets: [
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Views"
               },
               name: "alfresco/dnd/DragAndDropNestedTarget",
               label: "Drop Target"
            }
         ],
         label: "{label}",
         showEditButton: "true"
      },
      name: "alfresco/dnd/DroppedNestingItemWrapper",
      label: "Nested item wrapper"
   }
];
}

function getDefaultListsModel() {
   return {
      property: "name",
      targetValues: ["alfresco/lists/AlfList","alfresco/lists/AlfSortablePaginatedList"],
      widgetsForConfig: addCommonConfigTabs(getListsConfig(),["config.widgets"]),
      widgetsForNestedConfig: getListsNestedConfig(),
      widgetsForDisplay: getListsDisplay()
   };
}
