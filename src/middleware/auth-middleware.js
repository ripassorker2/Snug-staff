// utils/authMiddleware.js
export function requireRole(role) {
    return (ctx) => {
        const user = ctx.req.session.user; // Assuming user information is stored in the session
        if (!user || !user.role || user.role !== role) {
            ctx.res.writeHead(302, {Location: "/login"});
            ctx.res.end();
        }
    };
}
