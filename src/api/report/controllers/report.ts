/**
 * report controller
 */

import { factories } from '@strapi/strapi'

export default {
    async find(ctx){
        return {a: 2}
    },
    async findById(ctx) {
        return {a: 1}
    }
}
