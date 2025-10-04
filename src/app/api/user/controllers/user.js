'use strict';

/**
 * Custom user controller
 */

module.exports = {
  async assignRole(ctx) {
    const { userId, roleName } = ctx.request.body;

    if (!userId || !roleName) {
      return ctx.badRequest('userId and roleName are required');
    }

    // Check if current logged-in user is Super Admin
    const requester = ctx.state.user;
    if (!requester || requester.role.name !== 'Super Admin') {
      return ctx.unauthorized('Only Super Admin can assign roles');
    }

    // Find role by name
    const role = await strapi.query('plugin::users-permissions.role').findOne({
      where: { name: roleName },
    });

    if (!role) return ctx.notFound('Role not found');

    // Update user's role
    const updatedUser = await strapi.query('plugin::users-permissions.user').update({
      where: { id: userId },
      data: { role: role.id },
    });

    ctx.send({ message: `User assigned role ${roleName}`, user: updatedUser });
  },
};
