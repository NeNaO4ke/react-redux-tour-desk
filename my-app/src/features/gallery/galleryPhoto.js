

export default function GalleryPhoto(props){
    const imageLocation = props.imgSrc

    return (
        <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card bg-dark text-white">
                <img src={imageLocation}
                    className="card-img" alt="..." />
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
    )
}