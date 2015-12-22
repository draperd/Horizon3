function getVerticalWidgetsConfig() {
   return [{config: {
         targetProperty: "config.widgets",
         useModellingService: true,
         label: "Widgets",
         widgets: [
            {
               config: {
                  targetProperty: "config.widgets",
                  useModellingService: true,
                  label: "Widgets",
                  widgets: []
               },
               name: "alfresco/forms/ControlColumn",
               label: "title.alfresco/forms/ControlColumn.label",
               title: "title.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "title.alfresco/forms/TabbedControls.label"}];
}

function getVerticalWidgetsNestedConfig() {
   return [];
}

function getVerticalWidgetsDisplay() {
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
         showEditButton: "false"
      },
      name: "alfresco/dnd/DroppedNestingItemWrapper",
      label: "Nested item wrapper"
   }
];
}

function getDefaultVerticalWidgetsModel() {
   return {
      property: "name",
      targetValues: ["alfresco/layout/VerticalWidgets"],
      widgetsForConfig: addCommonConfigTabs(getVerticalWidgetsConfig(),["config.widgets"]),
      widgetsForNestedConfig: getVerticalWidgetsNestedConfig(),
      widgetsForDisplay: getVerticalWidgetsDisplay()
   };
}
