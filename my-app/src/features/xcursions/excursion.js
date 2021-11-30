

export default function Excursion(props){

    return <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className="excursionCard card-body"
             style={{backgroundImage: "url("+props.image+")"}}>
            <div className="excursionInfo d-flex flex-column justify-content-between py-2">
                <div>
                <h4>{props.name}</h4>
                    <div>{props.city}, {props.country}</div>
                </div>
                <div className="d-flex justify-content-between">
                    <span>{props.currentLoad}/{props.maxLoad}</span>
                    <span>{props.cost} {props.currency}</span>
                </div>
            </div>

        </div>
    </div>
}