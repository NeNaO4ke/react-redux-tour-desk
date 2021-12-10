import './excursion.css'
import {Navigate, useParams} from "react-router-dom";
import {fetchOneExcursion, oneExcursionReceived, selectExcursionById} from "./excursionSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Spinner} from "../Spinner";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Excursion() {

    let {excursionId} = useParams()
    excursionId = parseInt(excursionId)
    const dispatch = useDispatch();
    let status = useSelector(state => state.excursions.statusOne)
    const error = useSelector((state) => state.excursions.error)


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchOneExcursion(excursionId))
        }
    }, [status, dispatch])

    let excursion = useSelector(state => selectExcursionById(state, excursionId))
    let finalValue = []
    const [startDate, setStartDate] = useState(new Date());
    if (excursion === null) {
        return <Navigate to='/excursions'/>
    }
    let content

    if (status === 'loading') {
        content = <Spinner text="Loading..."/>
    } else if (status === 'succeeded') {
        excursion.dates.forEach(date => finalValue.push(new Date(date)))
        content = (
            <div>

                <Carousel images={excursion.images}/>
                <h2 className="text-center mb-3">{excursion.name}</h2>
                <div className="container">
                    <div className="customDatePickerWidth row">
                        <table className="table table-striped table-bordered col mx-2">
                            <tbody>
                            <tr>
                                <th scope="row" className="col-2">Description</th>
                                <td>{excursion.description}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cost</th>
                                <td>{excursion.cost} {excursion.currency}</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>{excursion.country}, {excursion.city}</td>
                            </tr>
                            <tr>
                                <th scope="row">Duration</th>
                                <td>{excursion.duration} minutes</td>
                            </tr>
                            <tr>
                                <th scope="row">Available slots</th>
                                <td>{excursion.maxLoad - excursion.currentLoad} free slots</td>
                            </tr>
                            </tbody>
                        </table>
                        <DatePicker wrapperClassName="d-flex justify-content-center col-auto"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    highlightDates={finalValue}
                                    placeholderText="This highlights a week ago and a week from today"
                                    inline
                        />
                    </div>

                    {/*<Calendar className="mx-auto my-4"*/}
                    {/*          onChange={onChange}*/}
                    {/*          value={value}*/}
                    {/*          selectRange={false}*/}
                    {/*/>*/}

                </div>
            </div>)



    } else if (status === 'failed') {
        content = <div>{error}</div>
    }


    return (
        <>
            {content}
        </>
    )
}

const CarouselIndicators = ({length}) => {
    if (length === 1)
        return ''
    let content = [<button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0"
                           className="active"
                           aria-current="true" aria-label="Slide 1"></button>]
    for (let i = 1; i < length; i++) {
        content.push(<button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to={i}
                             aria-label={`Slide ${i}`}></button>)
    }

    return <div className="carousel-indicators">
        {content}
    </div>
}

const CarouselInner = ({images}) => {
    let inner = [<div className="carousel-item active">
        <div className="excursionPicSlide d-block"
             style={{backgroundImage: `url(${images[0]})`}}>
        </div>
    </div>]
    if (images.length === 1)
        return inner
    for (let i = 1; i < images.length; i++) {
        inner.push(
            <div className="carousel-item">
                <div className="excursionPicSlide d-block"
                     style={{backgroundImage: `url(${images[i]})`}}>
                </div>
            </div>)
    }
    return inner

}


const Carousel = ({images}) => {
    const length = images.length


    return <div id="carouselExampleControls" className="carousel slide carousel-fade carousel-dark my-3"
                data-bs-ride="carousel">
        <CarouselIndicators length={length}/>
        <div className="carousel-inner container-lg w-auto">
            <CarouselInner images={images}/>
            {length > 1 ? <>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </> : ''}

        </div>
    </div>
}
