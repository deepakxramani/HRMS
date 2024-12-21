const jwt = require('jsonwebtoken');

const ensureAuthentication = (req, res, next) => {
    const authHeader = req.headers["authorization"]; // Get the authorization header
  
    if (!authHeader) {
      return res.status(401).json({
        message: "Unauthorized, JWT token is required",
      });
    }
  
    // Extract token after "Bearer"
    const token = authHeader.split(" ")[1];
  
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized, JWT token is missing",
      });
    }
  
    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Add decoded token data to the request object
      next(); // Pass control to the next middleware or route handler
    } catch (err) {
      return res.status(401).json({
        message: "Unauthorized, JWT token is invalid or expired",
      });
    }
  };

module.exports = ensureAuthentication;