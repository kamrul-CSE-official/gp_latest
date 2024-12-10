export interface IUserinfo {
  EmpID: number;
  CompanyID: number;
  CostCenterID: number;
  ServiceDepartmentID: number;
  SubCostCenterID: number;
  UserID: number;
  UserName: string;
  iat: number;
  exp: number;

  $id?: string;
  Company?: string;
  CostCenter?: string;
  EMPNO?: string;
  FullName?: string;
  GRP_EMP_NO?: number;
  Image?: string;
  ImageBase64?: string;
  ItemImage?: string | null;
  Location?: string;
  SectionName?: string;
  SubCostCenter?: string;
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
