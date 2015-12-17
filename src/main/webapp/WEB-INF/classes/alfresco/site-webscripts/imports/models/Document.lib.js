function getDocumentConfig() {
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
                           description: "document.config.itemProperty.description",
                           label: "document.config.itemProperty.label",
                           fieldId: "ITEM_PROPERTY",
                           name: "config.itemProperty",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "document.config.itemProperty.unitsLabel",
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
                        label: "document.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "document.config.nodeRef.description",
                           label: "document.config.nodeRef.label",
                           fieldId: "NODEREF",
                           name: "config.nodeRef",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "document.config.nodeRef.unitsLabel",
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
                        label: "document.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "false",
                           description: "document.config.xhrRequired.description",
                           label: "document.config.xhrRequired.label",
                           fieldId: "XHR",
                           name: "config.xhrRequired",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "document.config.xhrRequired.unitsLabel",
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
                        label: "document.alfresco/forms/controls/CheckBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "document.alfresco/forms/ControlColumn.label",
               title: "document.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "document.alfresco/forms/TabbedControls.label"
   }
];
}

function getDocumentNestedConfig() {
   return [];
}

function getDocumentDisplay() {
   return [
   {
      config: {
         value: "{value}",
         widgets: [
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Renderers"
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

function getDefaultDocumentModel() {
   return {
      property: "name",
      targetValues: ["alfresco/documentlibrary/AlfDocument"],
      widgetsForConfig: addCommonConfigTabs(getDocumentConfig(),[]),
      widgetsForNestedConfig: getDocumentNestedConfig(),
      widgetsForDisplay: getDocumentDisplay()
   };
}
