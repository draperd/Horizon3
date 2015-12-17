function getListViewConfig() {
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
                           value: "nodeRef",
                           description: "list.view.config.itemKey.description",
                           label: "list.view.config.itemKey.label",
                           fieldId: "ITEMKEY",
                           name: "config.itemKey",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "list.view.config.itemKey.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: []
                           },
                           requirementConfig: {
                              initialValue: true,
                              rules: []
                           },
                           disablementConfig: {
                              initialValue: false,
                              rules: []
                           },
                           validationConfig: []
                        },
                        name: "alfresco/forms/controls/TextBox",
                        label: "list.view.alfresco/forms/controls/TextBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "list.view.alfresco/forms/ControlColumn.label",
               title: "list.view.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "list.view.alfresco/forms/TabbedControls.label"
   }
];
}

function getListViewNestedConfig() {
   return [];
}

function getListViewDisplay() {
   return [
   {
      config: {
         value: "{value}",
         widgets: [
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Layout"
               },
               name: "alfresco/dnd/DragAndDropNestedTarget",
               label: "Drop Target"
            },
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Header"
               },
               name: "alfresco/dnd/DragAndDropNestedTarget",
               label: "Drop Target"
            }
         ],
         label: "{label}"
      },
      name: "alfresco/dnd/DroppedNestingItemWrapper",
      label: "Nested item wrapper"
   }
];
}

function getDefaultListViewModel() {
   return {
      property: "name",
      targetValues: ["alfresco/lists/views/AlfListView"],
      widgetsForConfig: addCommonConfigTabs(getListViewConfig(),["config.itemKey"]),
      widgetsForNestedConfig: getListViewNestedConfig(),
      widgetsForDisplay: getListViewDisplay()
   };
}
