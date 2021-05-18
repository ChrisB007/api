import React, {useState} from "react";


function Content(props){
  // eslint-disable-next-line
  const [apidata, setApidata] = useState([]);



// eslint-disable-next-line
  const apiGrid = [
    {
        name: "",
        email: "",
        description: "",
        launch_date: "",
        url: "",
        categories: [],
        github: "",
        file_upload: ""
    }
]

  return (
      <div className="next-steps my-5 gridiv">
        <div className= "gridinner">
          <img src="" alt=""/>
        </div>
        <div className= "">
          <p>props.name</p>
          <p>props.description</p>
          <p>props.url</p>
          <p>props.categories</p>
        </div>
      </div>
    );
  }



export default Content;
