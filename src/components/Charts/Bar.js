 import { Bar } from "react-chartjs-2";
 import { Chart,CategoryScale,LinearScale,BarElement } from "chart.js";
 Chart.register(CategoryScale,LinearScale,BarElement)
 ;

 const BarChart = ()=>{
     const arbitaryStackKey1 = "stack1";
    

     return (
         <div>
         <Bar data ={{
             labels: [
                 'Jan',
                 'Feb',
                 'Mar',
                 'Apr',
                 'May',
                 'Jun'
             ],
             datasets: [
                 {
                 stack: arbitaryStackKey1,    
                 label: 'Red',
                 data:[0.8,2,1.5,2.2,7.2,1.9],
                 backgroundColor: 'rgb(255, 99, 132)'
             },
             {
                 stack: arbitaryStackKey1, 
                 label: 'Green',
                 data:[1.5,2,2.8,0,0,2],
                 backgroundColor: 'rgb(12, 160, 123)'
             },
             {
                 stack: arbitaryStackKey1, 
                 label: 'Yellow',
                 data:[2.2,0,0,2.1,0,0],
                 backgroundColor: 'rgb(255, 205, 86)'
             },
             {
             stack:arbitaryStackKey1,    
             label:'Bisque',
             data: [0,1.1,1.5,0,0,0],
             backgroundColor:'rgb(204, 176, 143)'
         },
         {
            stack:arbitaryStackKey1,
            label:'Blue',
            data: [0,2,0,0,0,0],
            backgroundColor:'rgb(54, 162, 235)'
        }
            ]
       
         }}
         options={{
             scales: {
                 x: {
                     display:true,
                    },
                 y: {
                     stacked:true}
             }
         }}/>
         </div>
     ) 
 }

 export default BarChart;