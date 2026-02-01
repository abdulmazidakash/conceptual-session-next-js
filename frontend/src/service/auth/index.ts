/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValue } from "react-hook-form";

export const loginUser = async(userData: FieldValue<any>)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const result = await res.json()
        return result;
    } catch (error: any) {
        return Error(error)
    }
}