/**
 * Copyright (C) 2005-2013 Alfresco Software Limited.
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
 * @module horizon3/LaunchPad
 * @extends dijit/_WidgetBase
 * @mixes dijit/_TemplatedMixin
 * @mixes module:alfresco/core/Core
 * @author Dave Draper
 */
 define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/Launchpad.html",
        "alfresco/core/CoreWidgetProcessing",
        "alfresco/core/Core",
        "dojo/_base/array"],
        function(declare, _WidgetBase, _TemplatedMixin, template, CoreWidgetProcessing, Core, array) {
   
   return declare([_WidgetBase, _TemplatedMixin, CoreWidgetProcessing, Core], {

      /**
       * An array of the CSS files to use with this widget.
       * 
       * @instance
       * @type {object[]}
       * @default [{cssFile:"./css/Launchpad.css"}]
       */
      cssRequirements: [{cssFile:"./css/Launchpad.css",mediaType:"screen"}],

      /**
       * An array of the i18n files to use with this widget.
       * 
       * @instance
       * @type {object[]}
       * @default [{i18nFile: "./i18n/Launchpad.properties"}]
       */
      i18nRequirements: [{i18nFile: "./i18n/Launchpad.properties"}],

      /**
       * The HTML template to use for the widget.
       * @instance
       * @type {String}
       */
      templateString: template,

      /**
       * 
       * @instance
       */
      postCreate: function horizon3__LaunchPad__postCreate() {
         this.inherited(arguments);

         if (this.widgets)
         {
            this.processWidgets(this.widgets, this.containerNode);
         }
      }
   });
});