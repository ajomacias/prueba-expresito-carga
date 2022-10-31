import { HttpErrorResponse } from "@angular/common/http";
import { ResponseAPI } from "../feature/user/types/responseApi";

export class errorUtils {

    static covertErrorToResponseAPI(err : any){
        const error = err as HttpErrorResponse;
        const responseAPI = error.error as ResponseAPI;
    
        return responseAPI;
        
    }

}