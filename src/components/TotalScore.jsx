const TotalScore=({score})=>{
    return (
        <div className="font-bold md:w-24 mb-10 text-center ">
           <h1 className="text-6xl">{score}</h1>
           <p className="text-2xl font-medium">Total Score</p>
        </div>
    )
}

export default TotalScore