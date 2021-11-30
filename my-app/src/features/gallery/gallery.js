import GalleryPhoto from "./galleryPhoto";


import Masonry from "react-masonry-component";


export default function Gallery(props) {

    const refs = props.arr

    const listItems = refs.map((img) => <GalleryPhoto imgSrc={img}/>)

    return (
        <div className="container">
            <Masonry className="row mt-3">
                {listItems}
            </Masonry>
        </div>
    )
}