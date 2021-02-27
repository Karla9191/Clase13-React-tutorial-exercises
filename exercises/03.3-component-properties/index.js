import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
    // 1) replace the hard-coded image, description, link, etc. With their property variable.
    return (
        <div className="card m-5">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    )
};
BootstrapCard.propTyps = {
    title: PropType.string,
    imageUrl: PropType.string,
    description: PropType.string,
    buttonURL: PropType.string,
    buttonLabel: PropType.string
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard title="Bob Dylan" imageUrl={"https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"}
buttonLabel="Go to wikipedia" buttonURL={"https://en.wikipedia.org/wiki/Bob_Dylan"} description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."/>,document.querySelector("#myDiv"));


//"https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"

//Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) 
//is an American singer - songwriter.

//"https://en.wikipedia.org/wiki/Bob_Dylan"
//Go to wikipedia
//<div className="card" style={{ width: "16rem" }}>