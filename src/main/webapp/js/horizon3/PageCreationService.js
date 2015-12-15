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
 * @module horizon3/PageCreationService
 * @extends module:alfresco/services/BaseService
 * @mixes module:alfresco/core/CoreXhr
 * @mixes module:alfresco/services/_PageServiceTopicMixin
 * @author Dave Draper
 */
define(["dojo/_base/declare",
        "alfresco/services/BaseService",
        "alfresco/core/topics",
        "dojo/_base/lang"],
        function(declare, BaseService, topics, lang) {
   
   return declare([BaseService], {
      
      /**
       * Sets up the subscriptions
       * 
       * @instance
       */
      registerSubscriptions: function horizon3_PageCreationService__registerSubscriptions() {
         this.alfSubscribe("HORIZON3_GENERATE_PREVIEW", lang.hitch(this, this.generatePreview));

         this.alfSubscribe("ALF_CREATE_PAGE_DEFINITION_SUCCESS", lang.hitch(this, function() {
            this.alfPublish(topics.RELOAD_DATA_TOPIC);
         }));
      },
      
      /**
       * 
       *
       * @instance
       * @param {object} payload
       */
      generatePreview: function horizon3_PageCreationService__generatePreview(payload) {
         this.alfPublish("ALF_CREATE_DIALOG_REQUEST", {
            dialogId: "PREVIEW_DIALOG",
            dialogTitle: "Preview",
            fullScreenMode: true,
            fullScreenPadding: 20,
            widgetsContent: [
               {
                  name: "alfresco/prototyping/Preview",
                  config: {
                     pageDefinition: payload
                  }
               }
            ]
         });
      }
   });
});