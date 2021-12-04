import './excursion.css'
import {Navigate, useParams} from "react-router-dom";
import {fetchExcursions, fetchOneExcursion, selectExcursionById, selectExcursions} from "./excursionSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Excursion(props) {
    const id = useParams()
    const dispatch = useDispatch();
    let excursion = useSelector((state) => selectExcursionById(state, id))
    const exc = useSelector((state) => state.excursion[id])
    if(excursion === null)
        return <Navigate to='/excursions'/>
    const images = excursion && excursion.images
    let status = useSelector((state) => state.excursion.status)
    const error = useSelector((state) => state.excursion.error)
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchOneExcursion(id))
        }
    }, [status, dispatch])
    console.log(excursion)

    return (
        <div>
            <Carousel />
            <div className='container-lg mt-3'>
                <div className="card bg-dark text-white">
                    <img
                        src='https://i.guim.co.uk/img/media/ac0ee21f52deb099b783e6d290dd95a1dbb2400e/0_10_2280_1368/master/2280.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=5e46dfaaadf7614cc57bd8885d353589'
                        className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column align-items-start">
                        <div className="mt-auto">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text ">This is a wider card with supporting text below as a natural
                                lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Carousel = (props) => {
    return <div id="carouselExampleControls" className="carousel slide carousel-fade carousel-dark mt-3"
                data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0"
                    className="active"
                    aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner container-lg w-auto">
            <div className="carousel-item active ">
                <div className="excursionPicSlide d-block"
                     style={{backgroundImage: "url('https://i.guim.co.uk/img/media/ac0ee21f52deb099b783e6d290dd95a1dbb2400e/0_10_2280_1368/master/2280.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=5e46dfaaadf7614cc57bd8885d353589')"}}>
                </div>
            </div>
            <div className="carousel-item">
                <div className="excursionPicSlide d-block"
                     style={{backgroundImage: "url('https://media.vogue.fr/photos/5fbbdfd569406dbb7ff1ca7c/master/pass/010_A7A11280_145.jpg')"}}>
                </div>


            </div>
            <div className="carousel-item">

                <div className="excursionPicSlide d-block"
                     style={{backgroundImage: "url('https://a-static.besthdwallpaper.com/boruto-naruto-sleduyushchee-pokolenie-naruto-uzumaki-baryon-mode-4k-oboi-3840x2160-80686_54.jpg')"}}>
                </div>

            </div>
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
        </div>
    </div>
}
