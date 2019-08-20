export interface IEmpDtls{

    empId:number,
    empName:string,
    empDOB:Date,
    empMobileNo:string,
    empAddress:{
        addressLine1:string,
        addressLine2:string,
        city:string,
        district:string,
        state:string
    },
    empCountry?:string

}