import { useState } from "react";
import NumberSelecter from "./NumberSelecter"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import Rules from "./Rules";

const GamePlay=()=>{
    const [score,setScore]=useState(0);
    const [selectedNumber,setSelectednumber]=useState();
    const [currentDice,setCurrentDice]=useState(1);
    const [error,setError]=useState();
    const [showRules,setShowRules]=useState(false);

    const randomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

        const rollDice=()=>{
            if(!selectedNumber){
                setError("You Have Not Selected Any Number")
                return
            }
            
            const random=randomNumber(1,7)
            setCurrentDice((prev)=>random);

            if(selectedNumber===random){
                setScore((prev)=>prev+random)
            }else{
                setScore((prev)=>prev-2)
            }

            setSelectednumber(undefined)
        }
    

        const resetScore=()=>{
             setScore(0)
        }
    return (
        <>
           <main className="md:flex justify-between items-center mt-8 ">
             <TotalScore score={score}/>
             <NumberSelecter
                error={error}
                setError={setError}
                selectedNumber={selectedNumber}
                setSelectednumber={setSelectednumber}
             />
           </main>
           <RollDice 
           currentDice={currentDice}
           rollDice={rollDice}
           />
           <div className="grid grid-col justify-center pt-8">
               <button
               onClick={resetScore}
               className='bg-black hover:bg-teal-400 hover:duration-200 text-white px-10 
                py-2 mt-4 ml-5 rounded-lg cursor-pointer 
                '
                >Reset Score</button>

                <button
                onClick={()=>setShowRules((prev)=>!prev)}
                className='bg-black hover:bg-teal-400 hover:duration-200 text-white px-10 
                py-2 mt-4 ml-5 rounded-lg cursor-pointer 
                '
                >{showRules ?"Hide" : "Show"} Rules</button>
                
           </div>
           {showRules && <Rules/>}
        </>
        
        
    )
}
export default GamePlay