import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../reducers/rooState";

export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector