import Button from "./components/UI/Button";
import IntroCard from "./components/UI/IntroCard";
import MiniCard from "./components/UI/MiniCard";
import './App.css'
import Card from "./components/UI/Card";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";
import BarChart from "./components/Charts/Bar";
import MiniCard1 from "./components/MiniCards/MiniCard1";
import MiniCard2 from "./components/MiniCards/MiniCard2";
import MiniCard3 from "./components/MiniCards/MiniCard3";

Chart.register(ArcElement);

const  App =()=> {
  return (
    <div className="App">
       <div className="Panels">
         <div className="UpperPanel"> 
          <div>
           <Button />
           <MiniCard><MiniCard1 /></MiniCard> 
          </div>
          <IntroCard />
         </div>
         <div className="LowerPanel">
           <div >
         <MiniCard ><MiniCard2 /></MiniCard>
         <MiniCard ><MiniCard3 /></MiniCard>
         </div>
         
         
         <Card title="Income Variations"> <Doughnut 
            data = {{
  labels: [
    'Red',
    'Yellow',
    'Blue',
    'Green',
    'Bisque'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [130, 90, 100,100,100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 205, 86)',
      'rgb(54, 162, 235)',
      'rgb(12, 160, 123)',
      'rgb(204, 176, 143)'
    ],
    hoverOffset: 4
  }]
}}
/> <div className="card_text">Variations </div></Card> 

           
  <Card title="Net Income " ><div id="Bar"><BarChart /></div></Card> 
  </div>
           
         </div>
       </div> 
  
  );
}

export default App;
