const userRoles = {
    Admin: 1,
 	Guest: 2
}

function isAdminUser(role) {
    return role == userRoles.Admin;
}

function getRedirectRouteByRole(role) {
    const isAdmin = isAdminUser(role);
    return isAdmin ? "http://localhost:3001/" : "/user/profile";
}

module.exports = {
    getRedirectRouteByRole,
    isAdminUser
};