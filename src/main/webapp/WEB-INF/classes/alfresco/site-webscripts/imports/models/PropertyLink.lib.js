function getPropertyLinkConfig() {
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
                           description: "property.link.config.propertyToRender.description",
                           label: "property.link.config.propertyToRender.label",
                           fieldId: "PROP_TO_RENDER",
                           name: "config.propertyToRender",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.link.config.propertyToRender.unitsLabel",
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
                        label: "property.link.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "true",
                           description: "property.link.config.useCurrentItemAsPayload.description",
                           label: "property.link.config.useCurrentItemAsPayload.label",
                           fieldId: "ITEM_AS_PAYLOAD",
                           name: "config.useCurrentItemAsPayload",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.link.config.useCurrentItemAsPayload.unitsLabel",
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
                        label: "property.link.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "property.link.config.publishTopic.description",
                           label: "property.link.config.publishTopic.label",
                           fieldId: "PUBLISH_TOPIC",
                           name: "config.publishTopic",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.link.config.publishTopic.unitsLabel",
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
                        label: "property.link.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "CONFIGURED",
                           description: "property.link.config.publishPayloadType.description",
                           label: "property.link.config.publishPayloadType.label",
                           fieldId: "PAYLOAD_TYPE",
                           name: "config.publishPayloadType",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.link.config.publishPayloadType.unitsLabel",
                           optionsConfig: {
                              fixed: [
                                 {
                                    fieldId: "2fde7d7f-77fe-48ce-804f-3348bcf514e2",
                                    label: "property.link.2fde7d7f-77fe-48ce-804f-3348bcf514e2.label",
                                    value: "CONFIGURED"
                                 },
                                 {
                                    fieldId: "0cf28e81-f443-4798-8a59-ddbb8b716529",
                                    label: "property.link.0cf28e81-f443-4798-8a59-ddbb8b716529.label",
                                    value: "CURRENT_ITEM"
                                 },
                                 {
                                    fieldId: "ccd1cbaf-6298-4ba8-85a9-2acd7fbe6c0b",
                                    label: "property.link.ccd1cbaf-6298-4ba8-85a9-2acd7fbe6c0b.label",
                                    value: "PROCESS"
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
                        label: "property.link.alfresco/forms/controls/RadioButtons.label"
                     },
                     {
                        config: {
                           fieldId: "PROCESS_OPTIONS",
                           name: "config.publishPayloadModifiers",
                           value: "",
                           label: "Processors",
                           useSimpleValues: true,
                           postWhenHiddenOrDisabled: false,
                           visibilityConfig: {
                              initialValue: false,
                              rules: [
                                 {
                                    targetId: "PAYLOAD_TYPE",
                                    is: ["PROCESS"]
                                 }
                              ]
                           },
                           widgets: [
                              {
                                 name: "alfresco/forms/controls/Select",
                                 config: {
                                    name: "value",
                                    label: "Processor",
                                    optionsConfig: {
                                       fixed: [
                                          {
                                             label: "Process Current Item Tokens",
                                             value: "processCurrentItemTokens"
                                          },
                                          {
                                             label: "Process Instance Tokens",
                                             value: "processInstanceTokens"
                                          }
                                       ]
                                    }
                                 }
                              }
                           ]
                        }
                     },
                     {
                        config: {
                           value: "true",
                           description: "property.link.config.publishGlobal.description",
                           label: "property.link.config.publishGlobal.label",
                           fieldId: "PUBLISH_GLOBAL",
                           name: "config.publishGlobal",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.link.config.publishGlobal.unitsLabel",
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
                        label: "property.link.alfresco/forms/controls/CheckBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "property.link.alfresco/forms/ControlColumn.label",
               title: "property.link.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "property.link.alfresco/forms/TabbedControls.label"
   }
];
}

function getPropertyLinkNestedConfig() {
   return [];
}

function getPropertyLinkDisplay() {
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

function getDefaultPropertyLinkModel() {
   return {
      property: "name",
      targetValues: ["alfresco/renderers/PropertyLink"],
      widgetsForConfig: addCommonConfigTabs(getPropertyLinkConfig(),[]),
      widgetsForNestedConfig: getPropertyLinkNestedConfig(),
      widgetsForDisplay: getPropertyLinkDisplay()
   };
}
