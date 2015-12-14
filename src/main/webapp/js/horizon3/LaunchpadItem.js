/**
 * Copyright (C) 2005-2015 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * @module horizon3/LaunchpadItem
 * @extends dijit/_WidgetBase
 * @mixes dijit/_TemplatedMixin
 * @mixes external:dijit/_OnDijitClickMixin
 * @mixes module:alfresco/navigation/_HtmlAnchorMixin
 * @mixes module:alfresco/core/Core
 * @author Dave Draper
 */
 define(["dojo/_base/declare",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dijit/_OnDijitClickMixin",
         "alfresco/navigation/_HtmlAnchorMixin",
         "dojo/text!./templates/LaunchpadItem.html",
         "alfresco/core/Core",
         "service/constants/Default",
         "alfresco/enums/urlTypes",
         "dojo/dom-construct",
         "dojo/dom-class",
         "dojo/has"], 
         function(declare, _WidgetBase, _TemplatedMixin, _OnDijitClickMixin, _HtmlAnchorMixin, template, Core, 
                 AlfConstants, urlTypes, domConstruct, domClass, has) {

   return declare([_WidgetBase, _TemplatedMixin,  _OnDijitClickMixin, _HtmlAnchorMixin, Core], {

      /**
       * An array of the CSS files to use with this widget.
       * 
       * @instance
       * @type {object[]}
       * @default [{cssFile:"./css/LaunchpadItem.css"}]
       */
      cssRequirements: [{cssFile:"./css/LaunchpadItem.css",mediaType:"screen"}],

      /**
       * An array of the i18n files to use with this widget.
       * 
       * @instance
       * @type {object[]}
       * @default [{i18nFile: "./i18n/LaunchpadItem.properties"}]
       */
      i18nRequirements: [{i18nFile: "./i18n/LaunchpadItem.properties"}],

      /**
       * The HTML template to use for the widget.
       * 
       * @instance
       * @type {String}
       */
      templateString: template,

      /**
       * This is the URL to navigate to when the title is clicked.
       * 
       * @instance
       * @type {string}
       * @default
       */
      targetUrl: null,
      
      /**
       * Indicates how the target URL should be handled.
       *
       * @instance
       * @type {string}
       * @default [PAGE_RELATIVE]{@link module:alfresco/enums/urlTypes#PAGE_RELATIVE}
       * @since 1.0.32
       */
      targetUrlType: urlTypes.PAGE_RELATIVE,

      /**
       * Returns an array containing the selector that identifies the span to wrap in an anchor.
       * This overrides the [mixed in function]{@link module:alfresco/navigation/_HtmlAnchorMixin}
       * that just returns an empty array.
       *
       * @instance
       */
      getAnchorTargetSelectors: function horizon3_LaunchPadItem__getAnchorTargetSelectors() {
         return [".horizon3-LaunchpadItem__title"];
      },

      /**
       * Handles click events when a [targetUrl]{@link module:alfresco/header/Title#targetUrl} has
       * been provided.
       *
       * @instance
       * @param {object} evt The click event
       */
      onTitleClick: function horizon3_LaunchPadItem__onTitleClick(evt) {
         var targetUrlLocation = this.targetUrlLocation;
         if (has("mac") && evt.metaKey)
         {
            targetUrlLocation = "NEW";
         }

         if (this.targetUrl)
         {
            // Stop the event (to prevent the browser processing <a> elements
            evt.preventDefault();
            evt.stopPropagation();

            // Handle URLs...
            this.alfPublish("ALF_NAVIGATE_TO_PAGE", { url: this.targetUrl,
                                                      type: this.targetUrlType,
                                                      target: targetUrlLocation});
         }
         else
         {
            this.alfLog("error", "An alfresco/header/Title was clicked but did not define a 'targetUrl' attribute", evt);
         }
      },

      /**
       * 
       * @instance
       */
      postMixInProperties: function horizon3_LaunchPadItem__postMixInProperties() {
         if (this.label)
         {
            this.label = this.message(this.label);
         }
         else
         {
            this.label = "";
         }
      },

      /**
       * 
       * @instance
       */
      postCreate: function horizon3_LaunchPadItem__postCreate() {
         this.inherited(arguments);
         if (this.cssClass)
         {
            domClass.add(this.itemNode, this.cssClass);
         }
         if (this.targetUrl)
         {
            this.makeAnchor(this.targetUrl, this.targetUrlType);
         }
      }
   });
});