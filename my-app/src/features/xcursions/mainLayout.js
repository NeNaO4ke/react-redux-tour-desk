import Excursion from "./excursion";
import {useFirestoreConnect} from "react-redux-firebase";
import {useDispatch, useSelector} from "react-redux";
import {fetchExcursions, selectExcursions} from "./excursionSlice";
import {useEffect} from "react";
import {Spinner} from "../Spinner";
import ExcursionCard from "./excursionCard";


export default function ExcursionLayout(props) {
    const dispatch = useDispatch();
  //  dispatch(fetchExcursions())
    let excursions = useSelector(selectExcursions)
    // useFirestoreConnect([
    //     {collection: 'excursions'}
    // ])
    // const excursions = useSelector((state) => state.firestore.ordered.excursions)
    let status = useSelector(state => state.excursion.status)
    const error = useSelector((state) => state.excursion.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchExcursions())
        }
    }, [status, dispatch])

    let content

    if (status === 'loading') {
        content = <Spinner text="Loading..." />
    } else if (status === 'succeeded') {

        content = (excursions.map(exc =>
            <ExcursionCard key={exc.id} name={exc.name} maxLoad={exc.maxLoad} city={exc.city}
                       country={exc.country} cost={exc.cost} currency={exc.currency}
                       currentLoad={exc.currentLoad}
                       image={exc.images[0]}/>))

    } else if (status === 'failed') {
        content = <div>{error}</div>
    }

/*    const listItems = (excursions && excursions.map(exc =>
        <Excursion key={exc.id} name={exc.name} maxLoad={exc.maxLoad} city={exc.city}
                   country={exc.country} cost={exc.cost} currency={exc.currency}
                   currentLoad={exc.currentLoad}
                   image={exc.images[0]}/>))*/

    return (
        <div>
            <SortButton/>
            <OffCanvas/>
            <div className="row gx-0 mt-4 mainRow">
                <SideBar/>
                <div className="col container px-4  ">
                    <div className="row gx-3 gy-3">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

function SortButton() {
    return <div className="h3 mb-3 btn rounded-0 btn-info sticky-top container-fluid d-block d-md-none" type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Sort parameters
    </div>
}

function SideBar() {
    return <div className="col-md-auto d-none d-md-block">
        <div className="flex-shrink-0 p-3 ps-4 bg-white position-sticky" style={{top: "64px"}}>
            <a className="navbar-brand me-5" href="#">Sorting sidebar</a>
            <ul className="list-unstyled ps-0 collapse show" id="sideBar">
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#home-collapse" aria-expanded="true">
                        Price
                    </button>
                    <div className="collapse" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">Overview</a></li>
                            <li><a href="#" className="link-dark rounded">Updates</a></li>
                            <li><a href="#" className="link-dark rounded">Reports</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Excursion method
                    </button>
                    <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">Overview</a></li>
                            <li><a href="#" className="link-dark rounded">Weekly</a></li>
                            <li><a href="#" className="link-dark rounded">Monthly</a></li>
                            <li><a href="#" className="link-dark rounded">Annually</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#orders-collapse" aria-expanded="false">
                        Time
                    </button>
                    <div className="collapse" id="orders-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">New</a></li>
                            <li><a href="#" className="link-dark rounded">Processed</a></li>
                            <li><a href="#" className="link-dark rounded">Shipped</a></li>
                            <li><a href="#" className="link-dark rounded">Returned</a></li>
                        </ul>
                    </div>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                    <button className="btn btn-toggle align-items-center rounded collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#account-collapse" aria-expanded="false">
                        What you want to see?
                    </button>
                    <div className="collapse" id="account-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-dark rounded">New...</a></li>
                            <li><a href="#" className="link-dark rounded">Profile</a></li>
                            <li><a href="#" className="link-dark rounded">Settings</a></li>
                            <li><a href="#" className="link-dark rounded">Sign out</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
}

function OffCanvas() {
    return <div className="offcanvas offcanvas-start" style={{width: "322px"}} tabIndex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <form>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#home-collapse1" aria-expanded="true">
                            Price
                        </button>
                        <div className="collapse" id="home-collapse1">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>Price range slider</li>
                                <li><label htmlFor="customRange3" className="form-label">Example range</label>
                                    <input type="range" className="form-range" min="0" max="5" step="0.5"
                                           id="customRange3"/></li>
                                <li><a href="#" className="link-dark rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-collapse1" aria-expanded="false">
                            Excursion method
                        </button>
                        <div className="collapse" id="dashboard-collapse1">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Overview</a></li>
                                <li><a href="#" className="link-dark rounded">Weekly</a></li>
                                <li><a href="#" className="link-dark rounded">Monthly</a></li>
                                <li><a href="#" className="link-dark rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#orders-collapse1" aria-expanded="false">
                            Time
                        </button>
                        <div className="collapse" id="orders-collapse1">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">New</a></li>
                                <li><a href="#" className="link-dark rounded">Processed</a></li>
                                <li><a href="#" className="link-dark rounded">Shipped</a></li>
                                <li><a href="#" className="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#account-collapse1" aria-expanded="false">
                            What you want to see?
                        </button>
                        <div className="collapse" id="account-collapse1">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">New...</a></li>
                                <li><a href="#" className="link-dark rounded">Profile</a></li>
                                <li><a href="#" className="link-dark rounded">Settings</a></li>
                                <li><a href="#" className="link-dark rounded">Sign out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </div>
}
