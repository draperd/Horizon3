function getHtmlListViewConfig() {
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
                           description: "html.list.view.propertyToRender.description",
                           label: "html.list.view.propertyToRender.label",
                           fieldId: "PROPERTY_TO_RENDER",
                           name: "config.propertyToRender",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           unitsLabel: "html.list.view.propertyToRender.unitsLabel",
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
                        label: "html.list.view.alfresco/forms/controls/TextBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "html.list.view.alfresco/forms/ControlColumn.label",
               title: "html.list.view.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "html.list.view.alfresco/forms/TabbedControls.label"
   }
];
}

function getHtmlListViewNestedConfig() {
   return [];
}

function getHtmlListViewDisplay() {
   return [
   {
      config: {
         value: "{value}",
         widgets: [],
         label: "{label}",
         showEditButton: true
      },
      name: "alfresco/dnd/DroppedNestingItemWrapper",
      label: "Nested item wrapper"
   }
];
}

function getDefaultHtmlListViewModel() {
   return {
      property: "name",
      targetValues: ["alfresco/lists/views/HtmlListView"],
      widgetsForConfig: getHtmlListViewConfig(),
      widgetsForNestedConfig: getHtmlListViewNestedConfig(),
      widgetsForDisplay: getHtmlListViewDisplay()
   };
}
