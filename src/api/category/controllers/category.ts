/**
 * report controller
 */


export default {
  async find(ctx) {
    return { a: 2 };
  },
  async findById(ctx) {
    return { a: 1 };
  },
  async login(ctx) {
    const query = `
    WITH RECURSIVE all_screens AS (
        SELECT screen_id AS id
        FROM (
            SELECT screen_id
            FROM group_permissions
            WHERE id IN (
            SELECT group_permission_id FROM group_users WHERE user_id = ? AND user_status = 'active')
        ) direct_screens
        UNION ALL
        SELECT s.parent_id AS id
        FROM screens s
        JOIN all_screens a ON s.screen_id = a.id
        WHERE s.parent_id IS NOT NULL
    )
    SELECT DISTINCT id FROM all_screens`;
    return strapi.db.connection.raw(query, [1]);
  }
};
