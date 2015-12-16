function getDocumentListConfig() {
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
                           description: "documentlist.waitForPageWidgets.description",
                           label: "documentlist.waitForPageWidgets.label",
                           fieldId: "WAIT_FOR_PAGE_WIDGETS",
                           name: "config.waitForPageWidgets",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           unitsLabel: "documentlist.waitForPageWidgets.unitsLabel",
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
                        label: "documentlist.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "documentlist.rawData.description",
                           label: "documentlist.rawData.label",
                           fieldId: "RAW_DATA",
                           name: "config.rawData",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           unitsLabel: "documentlist.rawData.unitsLabel",
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
                        label: "documentlist.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "documentlist.useHash.description",
                           label: "documentlist.useHash.label",
                           fieldId: "USE_HASH",
                           name: "config.useHash",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           unitsLabel: "documentlist.useHash.unitsLabel",
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
                        label: "documentlist.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "documentlist.rootNode.description",
                           label: "documentlist.rootNode.label",
                           fieldId: "Root NodeRef",
                           name: "config.rootNode",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           unitsLabel: "documentlist.rootNode.unitsLabel",
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
                        label: "documentlist.alfresco/forms/controls/TextBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "documentlist.alfresco/forms/ControlColumn.label",
               title: "documentlist.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "documentlist.alfresco/forms/TabbedControls.label"
   }
];
}

function getDocumentListNestedConfig() {
   return [];
}

function getDocumentListDisplay() {
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

function getDefaultDocumentListModel() {
   return {
      property: "name",
      targetValues: ["alfresco/documentlibrary/AlfDocumentList"],
      widgetsForConfig: getDocumentListConfig(),
      widgetsForNestedConfig: getDocumentListNestedConfig(),
      widgetsForDisplay: getDocumentListDisplay()
   };
}
