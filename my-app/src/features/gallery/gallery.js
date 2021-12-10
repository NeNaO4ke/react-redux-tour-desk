import GalleryPhoto from "./galleryPhoto";


import Masonry from "react-masonry-component";
import {useSelector} from "react-redux";
import {selectExcursions} from "../xcursions/excursionSlice";


export default function Gallery(props) {


    const excursions = useSelector(selectExcursions)
    const refs = []
    excursions.map( ex => refs.push([ex.images[0], ex.name]))
    const listItems = refs.map((arr) => <GalleryPhoto imgSrc={arr[0]} name={arr[1]}/>)

    return (
        <div className="container">
            <Masonry className="row mt-3">
                {listItems}
            </Masonry>
        </div>
    )
}
