export interface IUserinfo {
  username: string;
  UserID?: number;
  EmpID?: number | string;
  CompanyID?: number;
  CostCenterID?: number;
  SubCostCenterID?: number;
  ServiceDepartmentID?: number;
  iat: number;
  exp: number;
}


export interface IEmployee {
  $id: string;
  FullName: string;
  Company: string;
  CompanyID: number;
  SectionName: string;
  SubCostCenter: string;
  SubCostCenterID: number;
  CostCenter: string;
  CostCenterID: number;
  EmpID: number;
  Location: string;
  EMPNO: string;
  GRP_EMP_NO: number;
  ItemImage: string | null;
  Image: string | null;
  ImageBase64: string;
}