import {useDispatch, useSelector} from "react-redux";
import {fetchExcursions, fetchMaxCost, fetchQuery, selectExcursions, selectMaxCost} from "./excursionSlice";
import {useEffect, useState} from "react";
import {Spinner} from "../Spinner";
import ExcursionCard from "./excursionCard";
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function ExcursionLayout(props) {
    const dispatch = useDispatch();
    let excursions = useSelector(selectExcursions)
    let status = useSelector(state => state.excursions.status)
    const error = useSelector((state) => state.excursions.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchExcursions())
            dispatch(fetchMaxCost())
        }
    }, [status, dispatch])

    let content

    if (status === 'loading') {
        content = <Spinner text="Loading..."/>
    } else if (status === 'succeeded') {

        content = (excursions.map(exc =>
            <ExcursionCard key={exc.id} id={exc.id} name={exc.name} maxLoad={exc.maxLoad} city={exc.city}
                           country={exc.country} cost={exc.cost} currency={exc.currency}
                           currentLoad={exc.currentLoad}
                           image={exc.images[0]}/>))

    } else if (status === 'failed') {
        content = <div>{error}</div>
    }

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
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const maxCost = useSelector(selectMaxCost)
    const [order, setOrder] = useState('DESC')
    const [defaultValue, setDefaultValue] = useState([0, maxCost])
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const params = defaultValue.slice().concat(order)
        console.log(params)
        dispatch(fetchQuery(params))
    }
    return <div className="col-md-auto d-none d-md-block">
        <div className="flex-shrink-0 p-3 ps-4 bg-white position-sticky" style={{top: "64px"}}>
            <a className="navbar-brand me-5" href="#">Sorting sidebar</a>
            <form onSubmit={e => { handleSubmit(e) }}>
                <ul className="list-unstyled ps-0 collapse show" id="sideBar">
                    <li className="mb-1">
                        <div className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#home-collapse" aria-expanded="false">
                            Price
                        </div>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <Range className="py-4" onAfterChange={val => setDefaultValue(val)}
                                           allowCross={false}
                                           max={maxCost}
                                           defaultValue={defaultValue} />
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={(e) => setOrder(e.target.value)} type="radio" name="flexRadioDefault"
                                               id="flexRadioDefault1" defaultChecked={true} value="DESC" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Descending
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={(e) => setOrder(e.target.value)} type="radio" name="flexRadioDefault"
                                               id="flexRadioDefault2" value="ASC"  />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Ascending
                                            </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <div className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Excursion method
                        </div>
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
                        <div className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#orders-collapse" aria-expanded="false">
                            Time
                        </div>
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
                        <div className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#account-collapse" aria-expanded="false">
                            What you want to see?
                        </div>
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
                <input
                    type='submit'
                    value='Search'
                />
            </form>
        </div>
    </div>
}

function OffCanvas() {
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const maxCost = useSelector(selectMaxCost)
    const [defaultValue, setDefaultValue] = useState([0, maxCost])
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchQuery(defaultValue))
    }
    return <div className="offcanvas offcanvas-start" style={{width: "322px"}} tabIndex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <form onSubmit={e => { handleSubmit(e) }}>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <div className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#home-collapse1" aria-expanded="false">
                            Price
                        </div>
                        <div className="collapse" id="home-collapse1">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <Range onAfterChange={val => setDefaultValue(val)}
                                           allowCross={false}
                                           max={maxCost}
                                           defaultValue={defaultValue} />
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <div className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-collapse1" aria-expanded="false">
                            Excursion method
                        </div>
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
                        <div className="btn btn-toggle align-items-center rounded collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#account-collapse1" aria-expanded="false">
                            What you want to see?
                        </div>
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
                <input type='submit' value='submit'/>
            </form>
        </div>
    </div>
}
