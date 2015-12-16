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
        "alfresco/core/CoreXhr",
        "service/constants/Default",
        "dojo/_base/lang"],
        function(declare, BaseService, CoreXhr, AlfConstants, lang) {

   return declare([BaseService, CoreXhr], {

      /**
       * 
       * @instance
       */
      registerSubscriptions: function horizon3_UserAndGroupService__registerSubscriptions(args) {
         this.alfSubscribe("HORIZON3_CREATE_GROUP", lang.hitch(this, this.createGroup));
         this.alfSubscribe("HORIZON3_ADD_USERS_TO_GROUP", lang.hitch(this, this.addUsersToGroup));
      },

      /**
       * 
       * @instance
       */
      addUsersToGroup: function horizon3_UserAndGroupService__createGroup(payload) {
         this.serviceXhr({
            url: AlfConstants.PROXY_URI + "api/groups/" + payload.groupId + "/children/" + payload.userName,
            method: "POST",
            data: {
               pubSubScope: payload.pubSubScope
            },
            successCallback: this.onSuccess,
            callbackScope: this
         });
      },

      /**
       * 
       * @instance
       */
      createGroup: function horizon3_UserAndGroupService__createGroup(payload) {
         this.serviceXhr({
            url: AlfConstants.PROXY_URI + "api/rootgroups/" + payload.groupId,
            method: "POST",
            data: {
               displayName: payload.displayName
            },
            successCallback: this.onSuccess,
            callbackScope: this
         });
      },

      /**
       * 
       * @instance
       */
      onSuccess: function horizon3_UserAndGroupService__onSuccess(response, originalRequestConfig) {
         this.alfPublish("ALF_DOCLIST_RELOAD_DATA", {});
      }
   });
});