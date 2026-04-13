// Middleware to extract real IP address from request
const getClientIP = (req, res, next) => {
    // Check for IP in various headers (for proxies, load balancers, etc.)
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection.remoteAddress || 
               req.socket.remoteAddress ||
               (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
               req.ip;

    // If x-forwarded-for contains multiple IPs, take the first one
    req.clientIP = ip ? ip.split(',')[0].trim() : 'unknown';
    next();
};

module.exports = getClientIP;
