// import { Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// import { AuthRequest } from "../types/express/index.js";

// export const protect = (
//   req: AuthRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const token = req.cookies.token;

//     if (!token) {
//       return res.status(401).json({
//         message: "Unauthorized",
//       });
//     }

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET as string
//     ) as {
//       userId: string;
//       role: string;
//     };

//     req.user = decoded;

//     next();
//   } catch (error) {
//     return res.status(401).json({
//       message: "Invalid token",
//     });
//   }
// };

// export const authorize = (...roles: string[]) => {
//   return (
//     req: AuthRequest,
//     res: Response,
//     next: NextFunction
//   ) => {
//     if (!req.user) {
//       return res.status(401).json({
//         message: "Unauthorized",
//       });
//     }

//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({
//         message: "Forbidden",
//       });
//     }

//     next();
//   };
// };

// import { Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import { AuthRequest } from "../types/express/index.js"; // no .js extension

// export const protect = (
//   req: AuthRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const token = req.cookies.token;

//     if (!token) {
//       return res.status(401).json({
//         message: "Unauthorized",
//       });
//     }

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET as string
//     ) as {
//       userId: string;
//       role: string;
//     };

//     req.user = decoded;

//     next();
//   } catch (error) {
//     return res.status(401).json({
//       message: "Invalid token",
//     });
//   }
// };

// export const authorize = (...roles: string[]) => {
//   return (req: AuthRequest, res: Response, next: NextFunction) => {
//     if (!req.user) {
//       return res.status(401).json({
//         message: "Unauthorized",
//       });
//     }

//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({
//         message: "Forbidden",
//       });
//     }

//     next();
//   };
// };

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Define AuthRequest locally before using it
export interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as {
      userId: string;
      role: string;
    };

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };
};