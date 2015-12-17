function getSearchListConfig() {
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
                           value: "",
                           description: "search.list.rootNode.description",
                           label: "search.list.rootNode.label",
                           fieldId: "ROOTNODE",
                           name: "config.rootNode",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "search.list.rootNode.unitsLabel",
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
                        label: "search.list.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "The initial search to perform",
                           label: "Search term",
                           fieldId: "SEARCHTERM",
                           name: "config.searchTerm",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
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
                        label: "search.list.alfresco/forms/controls/TextBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "search.list.alfresco/forms/ControlColumn.label",
               title: "search.list.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "search.list.alfresco/forms/TabbedControls.label"
   }
];
}

function getSearchListNestedConfig() {
   return [];
}

function getSearchListDisplay() {
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
         showEditButton: true
      },
      name: "alfresco/dnd/DroppedNestingItemWrapper",
      label: "Nested item wrapper"
   }
];
}

function getDefaultSearchListModel() {
   return {
      property: "name",
      targetValues: ["alfresco/search/AlfSearchList"],
      widgetsForConfig: addCommonConfigTabs(getSearchListConfig(),["config.widgets"]),
      widgetsForNestedConfig: getSearchListNestedConfig(),
      widgetsForDisplay: getSearchListDisplay()
   };
}
