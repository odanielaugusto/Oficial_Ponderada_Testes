// src/business/studentBusiness.ts
import { schoolApiService } from "../externalServices/schoolApiService.js";

class StudentBusiness {
  async getStudentsByInstitution(institutionId: number) {
    console.log("AHHAHAHAHHAHHAH")
    return await schoolApiService.getStudentsByInstitution(institutionId);
  }
}

export const studentBusiness = new StudentBusiness();
