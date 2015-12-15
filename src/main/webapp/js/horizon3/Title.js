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
 * @module horizon3/Title
 * @extends module:alfresco/header/Title
 * @author Dave Draper
 */
define(["dojo/_base/declare",
        "alfresco/header/Title",
        "dojo/dom-class"], 
        function(declare, Title, domClass) {
   
   return declare([Title], {
      
      /**
       * An array of the CSS files to use with this widget.
       * 
       * @instance
       * @type {object[]}
       * @default [{cssFile:"./css/Title.css"}]
       */
      cssRequirements: [{cssFile:"./css/Title.css"}],

      /**
       * 
       * @instance
       */
      postCreate: function horizon3_Title__postCreate() {
         this.inherited(arguments);
         domClass.add(this.domNode, "horizon3-Title");
      }
   });
});