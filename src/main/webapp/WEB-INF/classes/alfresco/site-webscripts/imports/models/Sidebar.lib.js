function getSidebarConfig() {
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
                           value: "350",
                           description: "sidebar.config.initialSidebarWidth.description",
                           label: "sidebar.config.initialSidebarWidth.label",
                           fieldId: "WIDTH",
                           name: "config.initialSidebarWidth",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "sidebar.config.initialSidebarWidth.unitsLabel",
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
                        label: "sidebar.alfresco/forms/controls/NumberSpinner.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "sidebar.alfresco/forms/ControlColumn.label",
               title: "sidebar.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "sidebar.alfresco/forms/TabbedControls.label"
   }
];
}

function getSidebarNestedConfig() {
   return [
   {
      config: {
         targetProperty: "config.widgets",
         useModellingService: true,
         label: "Widgets",
         widgets: [
            {
               config: {
                  value: "sidebar",
                  description: "sidebar.align.description",
                  label: "sidebar.align.label",
                  fieldId: "ALIGN",
                  name: "align",
                  postWhenHiddenOrDisabled: true,
                  noValueUpdateWhenHiddenOrDisabled: false,
                  noPostWhenValueIs: [],
                  unitsLabel: "sidebar.align.unitsLabel",
                  optionsConfig: {
                     fixed: [
                        {
                           fieldId: "b2186706-21c0-46a7-817f-549c07dbff1f",
                           label: "sidebar.b2186706-21c0-46a7-817f-549c07dbff1f.label",
                           value: "sidebar"
                        },
                        {
                           fieldId: "1988ae89-2dd4-4298-801e-12cded7f1999",
                           label: "sidebar.1988ae89-2dd4-4298-801e-12cded7f1999.label",
                           value: "main"
                        }
                     ]
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
               name: "alfresco/forms/controls/RadioButtons",
               label: "sidebar.alfresco/forms/controls/RadioButtons.label"
            }
         ]
      },
      name: "alfresco/forms/ControlColumn",
      label: "sidebar.alfresco/forms/ControlColumn.label"
   }
];
}

function getSidebarDisplay() {
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

function getDefaultSidebarModel() {
   return {
      property: "name",
      targetValues: ["alfresco/layout/AlfSideBarContainer"],
      widgetsForConfig: addCommonConfigTabs(getSidebarConfig(),[]),
      widgetsForNestedConfig: getSidebarNestedConfig(),
      widgetsForDisplay: getSidebarDisplay()
   };
}
