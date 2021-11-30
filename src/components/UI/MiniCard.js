import './MiniCard.css';
const MiniCard = (props)=>{

    return (
        <div className="items">
       {props.children}    
     </div>
    )
}

export default MiniCard;