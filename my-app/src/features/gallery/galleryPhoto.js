

export default function GalleryPhoto(props){
    const imageLocation = props.imgSrc
    const name = props.name

    return (
        <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card bg-dark text-white">
                <img src={imageLocation}
                    className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column align-items-start">
                        <div className="mt-auto">
                            <p className="card-text">{name}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
