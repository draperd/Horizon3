function getButtonConfig() {
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
                           description: "button.config.label.description",
                           label: "button.config.label.label",
                           fieldId: "LABEL",
                           name: "config.label",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "button.config.label.unitsLabel",
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
                        label: "button.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "button.config.additionalCssClasses.description",
                           label: "button.config.additionalCssClasses.label",
                           fieldId: "CLASS",
                           name: "config.additionalCssClasses",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "button.config.additionalCssClasses.unitsLabel",
                           optionsConfig: {
                              fixed: [
                                 {
                                    fieldId: "12219083-0ba2-4779-8099-e2257af11cc6",
                                    label: "button.12219083-0ba2-4779-8099-e2257af11cc6.label",
                                    value: "moomin"
                                 },
                                 {
                                    fieldId: "f743b974-d687-47a9-8c08-eceef6758745",
                                    label: "button.f743b974-d687-47a9-8c08-eceef6758745.label",
                                    value: "call-to-action"
                                 },
                                 {
                                    fieldId: "aa4f8d26-d414-462c-8772-f7ab1954fec5",
                                    label: "button.aa4f8d26-d414-462c-8772-f7ab1954fec5.label",
                                    value: "primary-call-to-action"
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
                        label: "button.alfresco/forms/controls/RadioButtons.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "button.config.publishPayload.url.description",
                           label: "button.config.publishPayload.url.label",
                           fieldId: "URL",
                           name: "config.publishPayload.url",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "button.config.publishPayload.url.unitsLabel",
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
                        label: "button.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "ALF_NAVIGATE_TO_PAGE",
                           description: "button.config.publishTopic.description",
                           label: "button.config.publishTopic.label",
                           fieldId: "TOPIC",
                           name: "config.publishTopic",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "button.config.publishTopic.unitsLabel",
                           optionsConfig: {
                              fixed: []
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
                        name: "alfresco/forms/controls/TextBox",
                        label: "button.alfresco/forms/controls/TextBox.label"
                     }
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "button.alfresco/forms/ControlColumn.label",
               title: "button.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "button.alfresco/forms/TabbedControls.label"
   }
];
}

function getButtonNestedConfig() {
   return [];
}

function getButtonDisplay() {
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

function getDefaultButtonModel() {
   return {
      property: "name",
      targetValues: ["alfresco/buttons/AlfButton"],
      widgetsForConfig: addCommonConfigTabs(getButtonConfig(),[]),
      widgetsForNestedConfig: getButtonNestedConfig(),
      widgetsForDisplay: getButtonDisplay()
   };
}
