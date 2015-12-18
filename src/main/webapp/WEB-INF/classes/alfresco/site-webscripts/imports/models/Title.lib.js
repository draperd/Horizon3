function getTitleConfig() {
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
                           description: "title.config.label.description",
                           label: "title.config.label.label",
                           fieldId: "LABEL",
                           name: "config.label",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "title.config.label.unitsLabel",
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
                        label: "title.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "true",
                           description: "title.config.setBrowserTitle.description",
                           label: "title.config.setBrowserTitle.label",
                           fieldId: "BROWSER_TITLE",
                           name: "config.setBrowserTitle",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "title.config.setBrowserTitle.unitsLabel",
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
                        label: "title.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "title.config.browserTitlePrefix.description",
                           label: "title.config.browserTitlePrefix.label",
                           fieldId: "PREFIX",
                           name: "config.browserTitlePrefix",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "title.config.browserTitlePrefix.unitsLabel",
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
                        label: "title.alfresco/forms/controls/TextBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "title.alfresco/forms/ControlColumn.label",
               title: "title.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "title.alfresco/forms/TabbedControls.label"
   }
];
}

function getTitleNestedConfig() {
   return [];
}

function getTitleDisplay() {
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

function getDefaultTitleModel() {
   return {
      property: "name",
      targetValues: ["alfresco/header/Title"],
      widgetsForConfig: addCommonConfigTabs(getTitleConfig(),["config.label"]),
      widgetsForNestedConfig: getTitleNestedConfig(),
      widgetsForDisplay: getTitleDisplay()
   };
}
