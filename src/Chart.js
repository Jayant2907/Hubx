import React from 'react'
import {Pie,Bar} from 'react-chartjs-2'
const Chart = (props) => {
    // const Labels=data.data.map((sub)=>sub.invites)
    // const dataVal=data.data.map((sub)=>sub.duration)
    const chartData={
        labels:props.data.keys(),
        datasets:[{
            label:"Duration",
            backgroundColor:'rgba(75,192,192,1)',
            borderColor:'rgba(0,0,0,1)',
            borderWidth:'1',
            data:props.data.values()
        }]
    }
    return (
        <div>
            <Pie
          data={chartData}
          options={{
            title:{
              display:true,
              text:'Calculator',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    )
}

export default Chart
