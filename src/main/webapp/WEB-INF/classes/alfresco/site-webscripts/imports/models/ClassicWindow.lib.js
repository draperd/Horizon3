function getClassicWindowConfig() {
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
                           description: "classic.window.config.title.description",
                           label: "classic.window.config.title.label",
                           fieldId: "TITLE",
                           name: "config.title",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "classic.window.config.title.unitsLabel",
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
                        label: "classic.window.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "false",
                           description: "classic.window.config.hideTitle.description",
                           label: "classic.window.config.hideTitle.label",
                           fieldId: "HIDE_TITLE",
                           name: "config.hideTitle",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "classic.window.config.hideTitle.unitsLabel",
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
                        label: "classic.window.alfresco/forms/controls/CheckBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "classic.window.alfresco/forms/ControlColumn.label",
               title: "classic.window.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "classic.window.alfresco/forms/TabbedControls.label"
   }
];
}

function getClassicWindowNestedConfig() {
   return [];
}

function getClassicWindowDisplay() {
   return [
   {
      config: {
         value: "{value}",
         widgets: [
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Widgets"
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

function getDefaultClassicWindowModel() {
   return {
      property: "name",
      targetValues: ["alfresco/layout/ClassicWindow"],
      widgetsForConfig: addCommonConfigTabs(getClassicWindowConfig(),["config.title","config.widgets"]),
      widgetsForNestedConfig: getClassicWindowNestedConfig(),
      widgetsForDisplay: getClassicWindowDisplay()
   };
}
