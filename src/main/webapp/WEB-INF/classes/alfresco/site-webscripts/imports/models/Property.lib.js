function getPropertyConfig() {
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
                           description: "property.config.propertyToRender.description",
                           label: "property.config.propertyToRender.label",
                           fieldId: "PROPERTY_TO_RENDER",
                           name: "config.propertyToRender",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.config.propertyToRender.unitsLabel",
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
                        label: "property.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "medium",
                           description: "property.config.renderSize.description",
                           label: "property.config.renderSize.label",
                           fieldId: "SIZE",
                           name: "config.renderSize",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.config.renderSize.unitsLabel",
                           optionsConfig: {
                              fixed: [
                                 {
                                    fieldId: "0f278bc4-3ba5-4f5d-8311-7bfd87b63c76",
                                    label: "property.0f278bc4-3ba5-4f5d-8311-7bfd87b63c76.label",
                                    value: "small"
                                 },
                                 {
                                    fieldId: "6eb5d7e4-38e7-472d-8bb7-6b3ec249fb8e",
                                    label: "property.6eb5d7e4-38e7-472d-8bb7-6b3ec249fb8e.label",
                                    value: "medium"
                                 },
                                 {
                                    fieldId: "9667f3c3-0b59-4dcd-8f9f-22969371f191",
                                    label: "property.9667f3c3-0b59-4dcd-8f9f-22969371f191.label",
                                    value: "large"
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
                        label: "property.alfresco/forms/controls/RadioButtons.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "property.config.label.description",
                           label: "property.config.label.label",
                           fieldId: "LABEL",
                           name: "config.label",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.config.label.unitsLabel",
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
                        label: "property.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "property.config.renderedValuePrefix.description",
                           label: "property.config.renderedValuePrefix.label",
                           fieldId: "PREFIX",
                           name: "config.renderedValuePrefix",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.config.renderedValuePrefix.unitsLabel",
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
                        label: "property.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "property.config.renderedValueSuffix.description",
                           label: "property.config.renderedValueSuffix.label",
                           fieldId: "SUFFIX",
                           name: "config.renderedValueSuffix",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.config.renderedValueSuffix.unitsLabel",
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
                        label: "property.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: false,
                           description: "property.config.deemphasized.description",
                           label: "property.config.deemphasized.label",
                           fieldId: "DEEMPH",
                           name: "config.deemphasized",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.config.deemphasized.unitsLabel",
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
                        label: "property.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: false,
                           description: "property.config.warnIfNotAvailable.description",
                           label: "property.config.warnIfNotAvailable.label",
                           fieldId: "WARN",
                           name: "config.warnIfNotAvailable",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.config.warnIfNotAvailable.unitsLabel",
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
                        label: "property.alfresco/forms/controls/CheckBox.label"
                     },
                     {
                        config: {
                           value: "No value found",
                           description: "property.config.warnIfNotAvailableMessage.description",
                           label: "property.config.warnIfNotAvailableMessage.label",
                           fieldId: "WARN_MESSAGE",
                           name: "config.warnIfNotAvailableMessage",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "property.config.warnIfNotAvailableMessage.unitsLabel",
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
                        label: "property.alfresco/forms/controls/TextBox.label"
                     }//,
                     // {
                     //    config: {
                     //       value: "false",
                     //       description: "property.config.onlyShowOnHover.description",
                     //       label: "property.config.onlyShowOnHover.label",
                     //       fieldId: "SHOW_ON_HOVER",
                     //       name: "config.onlyShowOnHover",
                     //       postWhenHiddenOrDisabled: true,
                     //       noValueUpdateWhenHiddenOrDisabled: false,
                     //       noPostWhenValueIs: [],
                     //       unitsLabel: "property.config.onlyShowOnHover.unitsLabel",
                     //       optionsConfig: {
                     //          fixed: []
                     //       },
                     //       visibilityConfig: {
                     //          initialValue: true,
                     //          rules: []
                     //       },
                     //       requirementConfig: {
                     //          initialValue: false,
                     //          rules: []
                     //       },
                     //       disablementConfig: {
                     //          initialValue: false,
                     //          rules: []
                     //       },
                     //       validationConfig: []
                     //    },
                     //    name: "alfresco/forms/controls/CheckBox",
                     //    label: "property.alfresco/forms/controls/CheckBox.label"
                     // }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "property.alfresco/forms/ControlColumn.label",
               title: "property.alfresco/forms/ControlColumn.title"
            },
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Widgets",
                  widgets: [
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
                     // {
                     //    config: {
                     //       value: "CONFIGURED",
                     //       description: "property.link.config.publishPayloadType.description",
                     //       label: "property.link.config.publishPayloadType.label",
                     //       fieldId: "PAYLOAD_TYPE",
                     //       name: "config.publishPayloadType",
                     //       postWhenHiddenOrDisabled: true,
                     //       noValueUpdateWhenHiddenOrDisabled: false,
                     //       noPostWhenValueIs: [],
                     //       unitsLabel: "property.link.config.publishPayloadType.unitsLabel",
                     //       optionsConfig: {
                     //          fixed: [
                     //             {
                     //                fieldId: "2fde7d7f-77fe-48ce-804f-3348bcf514e2",
                     //                label: "property.link.2fde7d7f-77fe-48ce-804f-3348bcf514e2.label",
                     //                value: "CONFIGURED"
                     //             },
                     //             {
                     //                fieldId: "0cf28e81-f443-4798-8a59-ddbb8b716529",
                     //                label: "property.link.0cf28e81-f443-4798-8a59-ddbb8b716529.label",
                     //                value: "CURRENT_ITEM"
                     //             },
                     //             {
                     //                fieldId: "ccd1cbaf-6298-4ba8-85a9-2acd7fbe6c0b",
                     //                label: "property.link.ccd1cbaf-6298-4ba8-85a9-2acd7fbe6c0b.label",
                     //                value: "PROCESS"
                     //             }
                     //          ]
                     //       },
                     //       visibilityConfig: {
                     //          initialValue: true,
                     //          rules: []
                     //       },
                     //       requirementConfig: {
                     //          initialValue: false,
                     //          rules: []
                     //       },
                     //       disablementConfig: {
                     //          initialValue: false,
                     //          rules: []
                     //       },
                     //       validationConfig: []
                     //    },
                     //    name: "alfresco/forms/controls/RadioButtons",
                     //    label: "property.link.alfresco/forms/controls/RadioButtons.label"
                     // },
                     // {
                     //    config: {
                     //       fieldId: "PROCESS_OPTIONS",
                     //       name: "config.publishPayloadModifiers",
                     //       value: "",
                     //       label: "Processors",
                     //       useSimpleValues: true,
                     //       postWhenHiddenOrDisabled: false,
                     //       visibilityConfig: {
                     //          initialValue: false,
                     //          rules: [
                     //             {
                     //                targetId: "PAYLOAD_TYPE",
                     //                is: ["PROCESS"]
                     //             }
                     //          ]
                     //       },
                     //       widgets: [
                     //          {
                     //             name: "alfresco/forms/controls/Select",
                     //             config: {
                     //                name: "value",
                     //                label: "Processor",
                     //                optionsConfig: {
                     //                   fixed: [
                     //                      {
                     //                         label: "Process Current Item Tokens",
                     //                         value: "processCurrentItemTokens"
                     //                      },
                     //                      {
                     //                         label: "Process Instance Tokens",
                     //                         value: "processInstanceTokens"
                     //                      }
                     //                   ]
                     //                }
                     //             }
                     //          }
                     //       ]
                     //    }
                     // },
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
               title: "Link Publication"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "property.alfresco/forms/TabbedControls.label"
   }
];
}

function getPropertyNestedConfig() {
   return [];
}

function getPropertyDisplay() {
   return [
   {
      config: {
         value: "{value}",
         widgets: [],
         label: "{label}",
         showEditButton: "true"
      },
      name: "alfresco/dnd/DroppedNestingItemWrapper",
      label: "Nested item wrapper"
   }
];
}

function getDefaultPropertyModel() {
   return {
      property: "name",
      targetValues: ["alfresco/renderers/Property(.*)"],
      widgetsForConfig: addCommonConfigTabs(getPropertyConfig(),[]),
      widgetsForNestedConfig: getPropertyNestedConfig(),
      widgetsForDisplay: getPropertyDisplay()
   };
}
