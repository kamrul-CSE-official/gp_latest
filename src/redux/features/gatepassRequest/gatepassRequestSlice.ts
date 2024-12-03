import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  IGatepassRequest,
  IRequestUserInfo,
  IReturnableOrNonreturnableInput,
  IVehicleInput,
} from "./type";

const initialState: IGatepassRequest = {
  setGatepassSteps: 1,
  setRequestType: { title: "", value: 0 },
  setFirstApprover: {
    ApproveUser: "",
    EmpBase64: "",
    SubCostRequisitionApprovalID: 0,
  },
  setSecondApprover: {
    ApproveUser: "",
    EmpBase64: "",
    SubCostRequisitionApprovalID: 0,
  },
  setGeneralOrMedicleUsersInfo: [],
  setReturnableOrNonReturnable: [],
  vehicle: [],
};

const gatePassRequestSlice = createSlice({
  name: "gatepassRequest",
  initialState,
  reducers: {
    // Steps
    setGatepassSteps: (state) => {
      state.setGatepassSteps += 1;
    },

    // Gate Pass Type
    setGatepassType: (
      state,
      action: PayloadAction<{ title: string; value: number }>
    ) => {
      state.setRequestType.title = action.payload.title;
      state.setRequestType.value = action.payload.value;
    },
    resetGatepassType: (state) => {
      state.setRequestType.title = "";
      state.setRequestType.value = 0;
    },

    // General or Medical User Info
    setGeneralOrMedicleUsersInfo: (
      state,
      action: PayloadAction<IRequestUserInfo>
    ) => {
      state.setGeneralOrMedicleUsersInfo?.push(action.payload);
    },
    removeAPersonFromGeneralOrMedicale: (
      state,
      action: PayloadAction<{ EmpID: string | number }>
    ) => {
      state.setGeneralOrMedicleUsersInfo =
        state.setGeneralOrMedicleUsersInfo?.filter(
          (user) => user.EmpID !== action.payload.EmpID
        );
    },
    resetGeneralOrMedicalUserInfo: (state) => {
      state.setGeneralOrMedicleUsersInfo = [];
    },

    // Returnable or Non-Returnable
    setReturnableOrNonretunable: (
      state,
      action: PayloadAction<IReturnableOrNonreturnableInput>
    ) => {
      state.setReturnableOrNonReturnable?.push(action.payload);
    },
    removeAReturnableOrNonretunable: (
      state,
      action: PayloadAction<{ storeId: string | number }>
    ) => {
      state.setReturnableOrNonReturnable =
        state.setReturnableOrNonReturnable?.filter(
          (item) => item.store.value !== action.payload.storeId
        );
    },
    resetReturnableOrNonretunable: (state) => {
      state.setReturnableOrNonReturnable = [];
    },

    // Vehicle
    setVehicle: (state, action: PayloadAction<IVehicleInput>) => {
      state.vehicle?.push(action.payload);
    },
    removeAVehicle: (
      state,
      action: PayloadAction<{ employeeNo: string | number }>
    ) => {
      state.vehicle = state.vehicle?.filter(
        (item) => item.employeeNo !== action.payload.employeeNo
      );
    },
    resetVehicle: (state) => {
      state.vehicle = [];
    },
  },
});

// Export Actions and Reducer
export const {
  setGatepassSteps,
  setGatepassType,
  resetGatepassType,
  setGeneralOrMedicleUsersInfo,
  removeAPersonFromGeneralOrMedicale,
  resetGeneralOrMedicalUserInfo,
  setReturnableOrNonretunable,
  removeAReturnableOrNonretunable,
  resetReturnableOrNonretunable,
  setVehicle,
  removeAVehicle,
  resetVehicle,
} = gatePassRequestSlice.actions;

export default gatePassRequestSlice.reducer;
