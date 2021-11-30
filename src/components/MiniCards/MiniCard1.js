import { Dashboard,ArrowForwardIosSharp,TuneSharp,FileCopySharp } from "@material-ui/icons";
import './MiniCards.css'

const MiniCard1=()=>{
return (
    <div id="elements">
       <div className="space">
           <div className="icon"><Dashboard />Dashboard </div>
           <div className="arrow"><ArrowForwardIosSharp /> </div>
           </div>
       <div className="space">
           <div className="icon">
           <TuneSharp />Slidebar Type
           </div>
           <div className="arrow"><ArrowForwardIosSharp /></div>
           </div>
       <div className="space">
           <div className="icon"><FileCopySharp/> Page Layouts</div>
         < div className="arrow"> <ArrowForwardIosSharp /></div></div>
    </div>
)
}

export default MiniCard1;
