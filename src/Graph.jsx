/* global Plotly */
import {useEffect} from 'react';

function updateGraph(datelist, usdData, eurData) {
  const graph1 = {
    x: datelist,
    y: usdData,
    type: 'scatter',
    name: 'USD'
  };
  
  const graph2 = {
    x: datelist,
    y: eurData,
    type: 'scatter',
    name: 'EUR'
  };
  
  const data = [graph1, graph2];
  const layout = {
    title: "USD to EUR changes"
  }
  Plotly.newPlot('graph_container', data, layout);
}

function Graph(props) {
  const { graphData } = props;
  useEffect(() => {
    const {dateList, usdData, eurData} = graphData;
    if (dateList && usdData && eurData) {
      updateGraph(dateList, usdData, eurData)
    }
  }, [graphData]);

  return (
    <div id="graph_container">

    </div>
  )
}
export default Graph;