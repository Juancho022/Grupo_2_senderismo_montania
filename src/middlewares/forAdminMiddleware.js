// const userRoles = {
//     Admin: 1,
//  	User: 2
// }

// function isUserAdmin(role) {
//     return role == userRoles.Admin;
// }
// function getRedirectRouteByRole(role) {
//     const isAdmin = isUserAdmin(role);
//     return isAdmin ? "/inventory/" : "/users/profile";
// }
function forAdmin(req, res, next) {
    const user = req.session.user;
    if (user && user.roles?.description=== 1) { 
        next(); 
    } else {
        return res.redirect('/');
    }
}

module.exports = forAdmin;

// module.exports = {
//     getRedirectRouteByRole,
//     isUserAdmin
// };