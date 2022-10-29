'use strict';
/**
 * birdhouse service.
 */
const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::birdhouse.birdhouse');
