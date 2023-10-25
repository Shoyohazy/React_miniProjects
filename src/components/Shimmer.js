
const Shimmer = () =>{
    return(
        <div className="restaurnt-list">
            {Array(8).fill("").map((e, index)=><div key={index} className="shimmer-cards"></div>)}
        </div>
    );
}


export default Shimmer;
