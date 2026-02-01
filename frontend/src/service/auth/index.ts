/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { FieldValue } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";


export const loginUser = async(userData: FieldValue<any>)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const result = await res.json();
        const storeCookies = await cookies();
        if(result.success){
            storeCookies.set('token', result.data.accessToken);
            storeCookies.set('refreshToken', result.data.refreshToken);

        }
        return result;
    } catch (error: any) {
        return Error(error)
    }
};


export const getUser = async()=>{
    const storedToken = await cookies();
    const token = storedToken.get('token')?.value;
    // console.log(token);

    let decodeData = null;
    if(token){
        decodeData = await jwtDecode(token);
        return decodeData;
    }else{
        return null;
    }
}