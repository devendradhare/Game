import { useState } from "react"

const NumberSelecter=({selectedNumber,setSelectednumber,error,setError})=>{
    const array=[1,2,3,4,5,6]

    const numberSelecterHandler=(value)=>{
        setSelectednumber(value)
        setError("")
    }
    return (
        <div className="grid grid-col-2 justify-items-end">
            <p className="font-bold px-10 text-red-500">{error}</p>
            <div className="flex gap-4 px-10">
            {array.map((value,i)=>(
               <div 
               isSelected={value === selectedNumber}
               key={i}
               onClick={
                ()=>numberSelecterHandler(value)
               }
               className=" bg-black border-stone-200 text-white hover:bg-neutral-500 w-10 h-10 
               text-center text-2xl font-medium cursor-pointer">{value}</div>  
            ))}
        </div>
        <p className="font-bold px-10 text-2xl">Select Number</p>
        </div>
    )
}

export default NumberSelecter

