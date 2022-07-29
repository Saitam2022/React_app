import "./card.css";

function Card(props) {

    return (
        <div className="main">
            <div className="card">
                <div className="card-img">
                    <img src={props.data.img} alt="imagen" />
                </div>
                <div className="card-detail">
                    <h2>{props.data.Name}</h2>
                    <p>
                        {props.data.description}
                    </p>
                    <h3> $ {props.data.Price}</h3>
                    <button>Ver más</button>
                </div>
            </div>
        </div>
    )
}

export default Card;