function getListViewLayoutConfig() {
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
                           value: "alfresco/lists/views/layouts/Row",
                           description: "list.view.layout.name.description",
                           label: "list.view.layout.name.label",
                           fieldId: "TYPE",
                           name: "name",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "list.view.layout.name.unitsLabel",
                           optionsConfig: {
                              fixed: [
                                 {
                                    fieldId: "479a40b2-1735-43a6-8a79-03959c604a2c",
                                    label: "list.view.layout.479a40b2-1735-43a6-8a79-03959c604a2c.label",
                                    value: "alfresco/lists/views/layouts/Row"
                                 },
                                 {
                                    fieldId: "f18b5bb4-d907-4aca-8d75-d09541fb6c39",
                                    label: "list.view.layout.f18b5bb4-d907-4aca-8d75-d09541fb6c39.label",
                                    value: "alfresco/lists/views/layouts/Cell"
                                 },
                                 {
                                    fieldId: "27a0e8f5-d808-4e05-8e56-2376e863448a",
                                    label: "list.view.layout.27a0e8f5-d808-4e05-8e56-2376e863448a.label",
                                    value: "alfresco/lists/views/layouts/CellContainer"
                                 },
                                 {
                                    fieldId: "7c0ac9af-4dd6-40b3-8814-1b30e6024229",
                                    label: "list.view.layout.7c0ac9af-4dd6-40b3-8814-1b30e6024229.label",
                                    value: "alfresco/lists/views/layouts/Column"
                                 },
                                 {
                                    fieldId: "894d4e41-2fa5-41c4-8cac-b58927038f36",
                                    label: "list.view.layout.894d4e41-2fa5-41c4-8cac-b58927038f36.label",
                                    value: "alfresco/lists/views/layouts/HeaderCell"
                                 },
                                 {
                                    fieldId: "744e7c63-79fe-4042-8f23-c13d5499b644",
                                    label: "list.view.layout.744e7c63-79fe-4042-8f23-c13d5499b644.label",
                                    value: "alfresco/lists/views/layouts/Table"
                                 }
                              ]
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
                        name: "alfresco/forms/controls/RadioButtons",
                        label: "list.view.layout.alfresco/forms/controls/RadioButtons.label"
                     },
                     {
                        config: {
                           value: "1",
                           description: "list.view.layout.config.colspan.description",
                           label: "list.view.layout.config.colspan.label",
                           fieldId: "COLSPAN",
                           name: "config.colspan",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "list.view.layout.config.colspan.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: false,
                              rules: [
                                 {
                                    targetId: "TYPE",
                                    is: ["alfresco/lists/views/layouts/Cell"]
                                 }
                              ]
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
                        label: "list.view.layout.alfresco/forms/controls/NumberSpinner.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "list.view.layout.config.label.description",
                           label: "list.view.layout.config.label.label",
                           fieldId: "LABEL",
                           name: "config.label",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "list.view.layout.config.label.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: false,
                              rules: [
                                 {
                                    targetId: "TYPE",
                                    is: ["alfresco/lists/views/layouts/HeaderCell"]
                                 }
                              ]
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
                        label: "list.view.layout.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "false",
                           description: "list.view.layout.config.zebraStriping.description",
                           label: "list.view.layout.config.zebraStriping.label",
                           fieldId: "ZEBRA",
                           name: "config.zebraStriping",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "list.view.layout.config.zebraStriping.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: false,
                              rules: [
                                 {
                                    targetId: "TYPE",
                                    is: ["alfresco/lists/views/layouts/Row"]
                                 }
                              ]
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
                        label: "list.view.layout.alfresco/forms/controls/CheckBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "list.view.layout.alfresco/forms/ControlColumn.label",
               title: "list.view.layout.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "list.view.layout.alfresco/forms/TabbedControls.label"
   }
];
}

function getListViewLayoutNestedConfig() {
   return [];
}

function getListViewLayoutDisplay() {
   return [
   {
      config: {
         value: "{value}",
         widgets: [
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Sub-Layout or Renderer"
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

function getDefaultListViewLayoutModel() {
   return {
      property: "name",
      targetValues: ["alfresco/lists/views/layouts/(.*)"],
      widgetsForConfig: addCommonConfigTabs(getListViewLayoutConfig(),["config.widgets","config.label"]),
      widgetsForNestedConfig: getListViewLayoutNestedConfig(),
      widgetsForDisplay: getListViewLayoutDisplay()
   };
}
