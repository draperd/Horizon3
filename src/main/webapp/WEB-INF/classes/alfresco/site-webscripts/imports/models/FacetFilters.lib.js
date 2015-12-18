var availableFacets = [];
var result = remote.call("/api/facet/facetable-properties?maxItems=0&locale=" + locale);
if (result.status.code == status.STATUS_OK)
{
   var rawData = JSON.parse(result);
   if (rawData && rawData.data && rawData.data.properties)
   {
      availableFacets = rawData.data.properties;
      var properties = rawData.data.properties;
      for (var i=0; i<properties.length; i++)
      {
         properties[i].value = properties[i].longqname;
         properties[i].label = properties[i].displayName;
      }
   }
}

function getFacetFiltersConfig() {
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
                           description: "The label for the facet",
                           label: "Facet label",
                           fieldId: "LABEL",
                           name: "config.label",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
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
                        label: "title.alfresco/forms/controls/TextBox.label"
                     },
                     {
                        config: {
                           value: "",
                           description: "facet.filters.config.facetQName.description",
                           label: "facet.filters.config.facetQName.label",
                           fieldId: "QNAME",
                           name: "config.facetQName",
                           postWhenHiddenOrDisabled: true,
                           noValueUpdateWhenHiddenOrDisabled: false,
                           noPostWhenValueIs: [],
                           unitsLabel: "facet.filters.config.facetQName.unitsLabel",
                           optionsConfig: {
                              fixed: availableFacets,
                              queryAttribute: "displayName",
                              labelAttribute: "displayName",
                              valueAttribute: "longqname"
                           }
                        },
                        name: "alfresco/forms/controls/FilteringSelect",
                        label: "facet.filters.alfresco/forms/controls/FilteringSelect.label"
                     },
                     {
                        id: "FORM_SORTBY",
                        name: "alfresco/forms/controls/DojoSelect",
                        config: {
                           fieldId: "SORTBY",
                           name: "sortBy",
                           value: "ALPHABETICALLY",
                           label: "faceted-search-config.sortBy.label",
                           description: "faceted-search-config.sortBy.description",
                           optionsConfig: {
                              fixed: [
                                 {
                                    label: "faceted-search-config.sortBy.AtoZ.label",
                                    value: "ALPHABETICALLY"
                                 },
                                 {
                                    label: "faceted-search-config.sortBy.ZtoA.label",
                                    value: "REVERSE_ALPHABETICALLY"
                                 },
                                 {
                                    label: "faceted-search-config.sortBy.highToLow.label",
                                    value: "ASCENDING"
                                 },
                                 {
                                    label: "faceted-search-config.sortBy.lowToHigh.label",
                                    value: "DESCENDING"
                                 },
                                 {
                                    label: "faceted-search-config.sortBy.index.label",
                                    value: "INDEX"
                                 }
                              ]
                           }
                        }
                     },
                     {
                        id: "FORM_MAX_FILTERS",
                        name: "alfresco/forms/controls/NumberSpinner",
                        config: {
                           fieldId: "MAXFILTERS",
                           name: "maxFilters",
                           value: "10",
                           label: "faceted-search-config.maxFilters.label",
                           description: "faceted-search-config.maxFilters.description",
                           min: 1,
                           max: 20,
                           validationConfig: {
                              regex: "^[0-9]+$"
                           }
                        }
                     },
                     {
                        id: "FORM_MIN_FILTER_VALUE_LENGTH",
                        name: "alfresco/forms/controls/NumberSpinner",
                        config: {
                           fieldId: "MIN_FILTER_VALUE_LENGTH",
                           name: "minFilterValueLength",
                           value: "1",
                           label: "faceted-search-config.minFilterValueLength.label",
                           description: "faceted-search-config.minFilterValueLength.description",
                           min: 1,
                           max: 20,
                           validationConfig: {
                              regex: "^[0-9]+$"
                           }
                        }
                     },
                     {
                        id: "FORM_HIT_THRESHOLD",
                        name: "alfresco/forms/controls/NumberSpinner",
                        config: {
                           fieldId: "HIT_THRESHOLD",
                           name: "hitThreshold",
                           value: "1",
                           label: "faceted-search-config.hitThreshold.label",
                           description: "faceted-search-config.hitThreshold.description",
                           min: 1,
                           max: 20,
                           validationConfig: {
                              regex: "^[0-9]+$"
                           }
                        }
                     },
                  ]
               },
               name: "alfresco/forms/ControlColumn",
               label: "facet.filters.alfresco/forms/ControlColumn.label",
               title: "facet.filters.alfresco/forms/ControlColumn.title"
            }
         ]
      },
      name: "alfresco/forms/TabbedControls",
      label: "facet.filters.alfresco/forms/TabbedControls.label"
   }
];
}

function getFacetFiltersNestedConfig() {
   return [];
}

function getFacetFiltersDisplay() {
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

function getDefaultFacetFiltersModel() {
   return {
      property: "name",
      targetValues: ["alfresco/search/FacetFilters"],
      widgetsForConfig: addCommonConfigTabs(getFacetFiltersConfig(),[]),
      widgetsForNestedConfig: getFacetFiltersNestedConfig(),
      widgetsForDisplay: getFacetFiltersDisplay()
   };
}
