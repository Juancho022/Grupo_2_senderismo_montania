const userRoles = {
    Admin: 1,
 	Guest: 2
}

function isAdminUser(role) {
    return role == userRoles.Admin;
}

function getRedirectRouteByRole(role) {
    const isAdmin = isAdminUser(role);
    return isAdmin ? "/users/admin" : "/users/profile";
}

module.exports = {
    getRedirectRouteByRole,
    isAdminUser
};