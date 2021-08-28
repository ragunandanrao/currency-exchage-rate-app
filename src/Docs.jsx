import archDiagram from './architecture_diagram.png';

function Docs() {
return (
<div>
<h1>
  Welcome to the documentation section
</h1>
<h2>
  Architecture
</h2>
<img src={archDiagram} alt="Architecture diagram"/>
<h2>
  Choices
</h2>
<ol>
  <li>
    <p>
      I started the project using the react starter template that is documented 
    <a herf="https://reactjs.org/docs/create-a-new-react-app.html">here</a>
    </p>
  </li>
  <li>
    <p>
    For the chart library I used 
    <a href="https://plotly.com/javascript/line-charts/#basic-line-plot">Plotly.js</a>. 
    The reason being it is D3.js based and I have used it before. It is very intuitive to use and implement.
    </p>
  </li>
  <li>
    <p>
      I used the react-router library for handling the routing scenario. I borrowed the simple example from their documentation 
      <a href="https://reactrouter.com/web/example/basic"> page</a>.
    </p>
  </li>
  <li>
    <p>
    I chose to use the flex box approach to style elements. It was the least time consuming approach for this situation.
    </p>  
  </li>
  <li>
  <p>
    I am using JSX notation for coding and I am using a flat structure of files. 
    Ideally each of them would be in their own folder with their css and other helpful files. In this scenario I am using a flat structure.
  </p>
  </li>
  <li>
    <p>
      I added some very basic test cases using the <a href="https://testing-library.com/docs/">Testing library</a>. These test check the very basic testing scenarios.
    </p>
  </li>
</ol>

<h2>
  Assumptions
</h2>
<ol>
  <li>
    <p>
    There was no smooth way to get variation of the currency rates of EUR and USD,
    unless the base currency was something else. I assumed this to be Kuwait Dollar(KWD)
    </p>
  </li>
  <li>
    <p>
      I borrowed the code example from the <a href="https://exchangerate.host/#/docs">API docs</a> to call the API in the specific manner.
    </p>   
  </li>
  <li>
    <p>
      I used the fetch API to make the Get call and also made sure I filtered only for USD and EUR data. 
    </p>
    </li>  
  <li>
    <p>
      I handled error scenarios by logging to the console. 
    </p>
  </li>
  <li>
    I restricted future dates in the date picker as I assumed the API would not be showing any future prediction. 
  </li>
  <li>
    <p>
      I wrote very basic unit tests using Jest. If needed I can improve on them. 
    </p>
  </li>
  <li>
    <p>
      In the usual scenario I would have a css class for each element which would help in UI testing. For this purpose I have not done that. 
    </p>
  </li>
</ol>

</div>
)
}
export default Docs;