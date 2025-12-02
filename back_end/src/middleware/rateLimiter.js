import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("my-limit-key");

    if (!success) {
      return res.status(429).send();
    }

    next(); // Don't forget this to activate the rate limiit, else it will load endlessly
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
