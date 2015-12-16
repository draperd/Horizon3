function getFixedHeaderFooterConfig() {
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
                           value: "0",
                           description: "fixed.header.footer.heightAdjustment.description",
                           label: "fixed.header.footer.heightAdjustment.label",
                           fieldId: "HEIGHT_ADJUSTMENT",
                           name: "config.heightAdjustment",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           unitsLabel: "fixed.header.footer.heightAdjustment.unitsLabel",
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
                        label: "fixed.header.footer.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "AUTO",
                           description: "fixed.header.footer.heightMode.description",
                           label: "fixed.header.footer.heightMode.label",
                           fieldId: "HEIGHT_MODE_OPTIONS",
                           name: "config.heightMode",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: ["CONFIGURED"],
                           optionsConfig: {
                              fixed: [
                                 {
                                    fieldId: "0963fe16-5377-421e-89b7-7da28d980bec",
                                    label: "fixed.header.footer.0963fe16-5377-421e-89b7-7da28d980bec.label",
                                    value: "AUTO"
                                 },
                                 {
                                    fieldId: "5dc5b6bb-4596-4858-8440-b32c66a577e8",
                                    label: "fixed.header.footer.5dc5b6bb-4596-4858-8440-b32c66a577e8.label",
                                    value: "PARENT"
                                 },
                                 {
                                    fieldId: "7cf29e53-19c4-44c6-8c98-6e858066938d",
                                    label: "fixed.header.footer.7cf29e53-19c4-44c6-8c98-6e858066938d.label",
                                    value: "DIALOG"
                                 },
                                 {
                                    fieldId: "099fdfe0-cad9-4f14-81e3-0d7e1958833d",
                                    label: "fixed.header.footer.099fdfe0-cad9-4f14-81e3-0d7e1958833d.label",
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
                        label: "fixed.header.footer.alfresco/forms/controls/RadioButtons.label"
                     },
                     {
                        config: {
                           value: "0",
                           description: "fixed.header.footer.heightMode.description",
                           label: "fixed.header.footer.heightMode.label",
                           fieldId: "HEIGHT_MODE_CONFIGURED",
                           name: "config.heightMode",
                           postWhenHiddenOrDisabled: false,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           unitsLabel: "fixed.header.footer.heightMode.unitsLabel",
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
                        label: "fixed.header.footer.alfresco/forms/controls/NumberSpinner.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "fixed.header.footer.alfresco/forms/ControlColumn.label",
               title: "fixed.header.footer.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "fixed.header.footer.alfresco/forms/TabbedControls.label"
   }
];
}

function getFixedHeaderFooterNestedConfig() {
   return [];
}

function getFixedHeaderFooterDisplay() {
   return [
   {
      config: {
         value: "{value}",
         widgets: [
            {
               config: {
                  targetProperty: "config.widgetsForHeader",
                  useModellingService: true,
                  label: "Header Widgets"
               },
               name: "alfresco/dnd/DragAndDropNestedTarget",
               label: "Drop Target"
            },
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Main Widgets"
               },
               name: "alfresco/dnd/DragAndDropNestedTarget",
               label: "Drop Target"
            },
            {
               config: {
                  targetProperty: "config.widgetsForFooter",
                  useModellingService: true,
                  label: "Footer Widgets"
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

function getDefaultFixedHeaderFooterModel() {
   return {
      property: "name",
      targetValues: ["alfresco/layout/FixedHeaderFooter"],
      widgetsForConfig: addCommonConfigTabs(getFixedHeaderFooterConfig(),["config.heightMode", "config.widgetsForHeader","config.widgets","config.widgetsForFooter"]),
      widgetsForNestedConfig: getFixedHeaderFooterNestedConfig(),
      widgetsForDisplay: getFixedHeaderFooterDisplay()
   };
}
