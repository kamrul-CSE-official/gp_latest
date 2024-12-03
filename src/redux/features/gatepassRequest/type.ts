export interface IRequestUserInfo {
  EMPNO: string | number;
  EmpBase64: string;
  FullName: string;
  sectionName: string;
  remarks: string;
  Id: number;
  CostCenterID: string | number;
  Grpno: string | number;
  SubCostCenterID: string | number;
  SubCostCenter: string;
  EmpID: number | string;
}

export interface IReturnableOrNonreturnableInput {
  store: { title: string; value: number };
  item: { title: string; value: number };
  qty: number;
  remarks: string;
}

export interface IVehicleInput {
  employeeNo: string | number;
  pickupTime: string;
  pickReturnTime: string;
  destination: string;
  remarks: string;
}

export interface IGatepassRequest {
  setGatepassSteps: number;
  setRequestType: { title: string; value: number };
  setFirstApprover: {
    ApproveUser: string;
    EmpBase64: string;
    SubCostRequisitionApprovalID: number;
  };
  setSecondApprover: {
    ApproveUser: string;
    EmpBase64: string;
    SubCostRequisitionApprovalID: number;
  };
  setGeneralOrMedicleUsersInfo?: IRequestUserInfo[];
  setReturnableOrNonReturnable?: IReturnableOrNonreturnableInput[];
  vehicle?: IVehicleInput[];
}
