"use client"

import { TLibrary } from "@/types/Datatype";
import { createContext, ReactNode, useState } from "react";
interface TlibraryContext{

    todayPlan : TLibrary[]
    saveLater : TLibrary[]
     setTodayPlan : React.Dispatch<React.SetStateAction<TLibrary[]>>
     setSaveLater : React.Dispatch<React.SetStateAction<TLibrary[]>>
   

}

export const LibraryContext = createContext<TlibraryContext>({


    todayPlan : [],
    saveLater : [],
    setTodayPlan : () => {},
     setSaveLater : () => {}




})

const LibraryProvider = ({children}:{children : ReactNode}) => {

    const [todayPlan , setTodayPlan] = useState<TLibrary[]>([])
    const [saveLater , setSaveLater] = useState<TLibrary[]>([])



    

const sharedData = {

    
    todayPlan ,
    saveLater ,
    setTodayPlan ,
     setSaveLater 

}


    return <LibraryContext.Provider value = {sharedData}>
        {children}
    </LibraryContext.Provider>

}

export default LibraryProvider;