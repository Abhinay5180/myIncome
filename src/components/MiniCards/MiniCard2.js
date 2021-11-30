import { Bookmark, Inbox, LineStyle,ArrowForwardIosSharp } from "@material-ui/icons";
import './MiniCards.css'

const MiniCard2=()=>{
    return (
        <div id="elements">
           <div className="space">
               <div className="icon2">
               <Inbox /> Inbox </div>
               <div className="arrow2">
                <ArrowForwardIosSharp /></div>
                </div>
           <div className="space">
               <div className="icon2">
               <Bookmark /> Ticket</div>
               <div className="arrow2">
                <ArrowForwardIosSharp /></div></div>
           <div className="space">
               <div className="icon2">
               <LineStyle /> Extra</div>
               <div className="arrow2">
               <ArrowForwardIosSharp /></div></div>
        </div>
    )
    }
    
    export default MiniCard2;