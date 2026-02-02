"use client";

import { RecoilRoot, atom } from "recoil";
export const userState = atom({
    key: "User",
    default: {},
});

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
    return <RecoilRoot>{children}</RecoilRoot>;
}