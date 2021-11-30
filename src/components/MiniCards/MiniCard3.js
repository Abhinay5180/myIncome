import { ArrowForwardIosSharp, CreditCard, Dashboard, LineStyle, } from "@material-ui/icons";
import './MiniCards.css';
const MiniCard3=()=>{
    return (
        <div id="elements">

            <div className="space">
           <div className="icon3"><Dashboard /> Ui Elements </div>
           <div className="arrow3">
           <ArrowForwardIosSharp /></div>
           </div>
            
            <div className="space">
           <div className="icon3">
               <CreditCard /> Cards </div>
           <div className="arrow3">
            <ArrowForwardIosSharp /></div>
            </div>
            
            <div className="space">
           <div className="icon3"><CreditCard /> Components</div>
           <div className="arrow3">
            <ArrowForwardIosSharp /></div>
            </div>

            <div className="space">
           <div className="icon3"><LineStyle /> Widgets </div> 
           <div className="arrow3">
           <ArrowForwardIosSharp /></div>
           </div>
        </div>
        
    )
    }
    
    export default MiniCard3;