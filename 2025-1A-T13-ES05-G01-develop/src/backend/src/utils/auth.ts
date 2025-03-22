// // src/utils/auth.ts
// import jwt from 'jsonwebtoken';

// export class AuthService {
//   private static readonly JWT_SECRET: string = 'seu-segredo-de-jwt'; // Substitua por uma variável de ambiente em produção
//   private static readonly JWT_EXPIRATION: string = '1h'; // Expiração do token

//   // Método estático para gerar o token JWT
//   public static generateToken(userId: number): string {
//     const payload = { userId };
//     return jwt.sign(payload, this.JWT_SECRET, { expiresIn: this.JWT_EXPIRATION });
//   }

//   // Método estático para verificar o token JWT
//   public static verifyToken(token: string): jwt.JwtPayload | null {
//     try {
//       return jwt.verify(token, this.JWT_SECRET) as jwt.JwtPayload;
//     } catch (error) {
//       return null; // Retorna null caso o token seja inválido
//     }
//   }
// }
