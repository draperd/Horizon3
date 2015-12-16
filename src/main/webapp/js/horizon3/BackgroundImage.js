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
 * @module horizon3/BackgroundImage
 * @extends module:alfresco/core/ProcessWidgets
 * @author Dave Draper
 */
define(["dojo/_base/declare",
        "alfresco/core/ProcessWidgets",
        "dojo/dom-class",
        "dojo/dom-style",
        "jquery"], 
        function(declare, ProcessWidgets, domClass, domStyle, $) {
   
   return declare([ProcessWidgets], {
      
      /**
       * An array of the CSS files to use with this widget.
       * 
       * @instance
       * @type {object[]}
       * @default [{cssFile:"./css/BackgroundImage.css"}]
       */
      cssRequirements: [{cssFile:"./css/BackgroundImage.css"}],

      /**
       * 
       * @instance
       */
      postCreate: function horizon3_BackgroundImage__postCreate() {
         domStyle.set(this.domNode, "height", $(window).height() + "px");
         domClass.add(this.domNode, "horizon3-BackgroundImage");
         this.inherited(arguments);
      }
   });
});