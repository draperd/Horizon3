function getNodePreviewConfig() {
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
                           value: "AUTO",
                           description: "node.preview.config.heightMode.description",
                           label: "node.preview.config.heightMode.label",
                           fieldId: "HEIGHTMODE",
                           name: "config.heightMode",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [
                              "CONFIGURED"
                           ],
                           unitsLabel: "node.preview.config.heightMode.unitsLabel",
                           optionsConfig: {
                              fixed: [
                                 {
                                    fieldId: "d8e3ecb6-6006-4dc9-823f-4cf80b7d6aba",
                                    label: "node.preview.d8e3ecb6-6006-4dc9-823f-4cf80b7d6aba.label",
                                    value: "AUTO"
                                 },
                                 {
                                    fieldId: "c0443476-3c95-4f66-8aeb-5e6e23a4acd4",
                                    label: "node.preview.c0443476-3c95-4f66-8aeb-5e6e23a4acd4.label",
                                    value: "DIALOG"
                                 },
                                 {
                                    fieldId: "ff3cda71-197d-435d-87ee-6c5ec347788e",
                                    label: "node.preview.ff3cda71-197d-435d-87ee-6c5ec347788e.label",
                                    value: "PARENT"
                                 },
                                 {
                                    fieldId: "cd1f1d7c-bdad-485a-86c4-fd8bb467b114",
                                    label: "node.preview.cd1f1d7c-bdad-485a-86c4-fd8bb467b114.label",
                                    value: "CONFIGURED"
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
                        label: "node.preview.alfresco/forms/controls/RadioButtons.label"
                     },
                     {
                        config: {
                           value: "100px",
                           description: "node.preview.config.heightMode.description",
                           label: "node.preview.config.heightMode.label",
                           fieldId: "CONF_HEIGHT",
                           name: "config.heightMode",
                           postWhenHiddenOrDisabled: false,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "node.preview.config.heightMode.unitsLabel",
                           optionsConfig: {
                              fixed: []
                           },
                           visibilityConfig: {
                              initialValue: true,
                              rules: [
                                 {
                                    targetId: "HEIGHT_MODE_OPTIONS",
                                    is: ["CONFIGURED"]
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
                        label: "node.preview.alfresco/forms/controls/NumberSpinner.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "node.preview.alfresco/forms/ControlColumn.label",
               title: "node.preview.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "node.preview.alfresco/forms/TabbedControls.label"
   }
];
}

function getNodePreviewNestedConfig() {
   return [];
}

function getNodePreviewDisplay() {
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

function getDefaultNodePreviewModel() {
   return {
      property: "name",
      targetValues: ["alfresco/preview/AlfDocumentPreview"],
      widgetsForConfig: addCommonConfigTabs(getNodePreviewConfig(),[]),
      widgetsForNestedConfig: getNodePreviewNestedConfig(),
      widgetsForDisplay: getNodePreviewDisplay()
   };
}
