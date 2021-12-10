import {Link} from "react-router-dom";

export default function ExcursionCard(props) {
    const link = '/excursions/'+props.id

    return <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <Link to={link}>
            <div className="excursionCard card-body"
                 style={{backgroundImage: "url(" + props.image + ")"}}>
                <div className="excursionInfo d-flex flex-column justify-content-between py-2">
                    <div>
                        <h5 className=''>{props.name}</h5>
                        <div>{props.city}, {props.country}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className='d-flex'>{props.currentLoad}/{props.maxLoad}<i
                            className="ps-1 bi bi-people"></i></span>
                        <span className='d-flex'><i
                            className="bi bi-wallet2 pe-1"></i>{props.cost} {props.currency}</span>
                    </div>
                </div>

            </div>
        </Link>
    </div>

}
