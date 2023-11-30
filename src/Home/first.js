import "./home.css"
import Navbar from "./navbar";
function First(){
    return(
        <>
        <div className="bg">
        <Navbar></Navbar>
        </div>
        <span className="flex items-center">
  <span className="h-px flex-1 bg-black"></span>
  <span className="shrink-0 px-6">Speed!Why Not?</span>
  <span className="h-px flex-1 bg-black"></span>
</span>
        </>
    )
}
export default First;