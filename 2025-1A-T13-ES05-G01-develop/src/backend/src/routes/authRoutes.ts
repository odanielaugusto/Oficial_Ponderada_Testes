// Rotas de autenticação de usuário

import { Router } from "express";

const router = Router();

// Rota protegida para verificar se o usuário está autenticado ou não.
router.get("/", (req: any, res: any) => {
    if (!req.oidc || !req.oidc.isAuthenticated()) {
      return res.send("Logged out");
    }
    res.send("Logged in");
  });

  export default router;