

export default function InfoPage() {
    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner container-sm-fluid">
                <div className="carousel-item active">
                    <div className="sliderPic d-block"
                         style={{ backgroundImage: "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg')" }}>
                    </div>
                    <div className="carousel-caption centerCarCap align-middle ">
                        <h5>What is Lorem Ipsum?</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type
                            and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="sliderPic d-block"
                         style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/40/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg')" }}>

                    </div>
                    <div className="carousel-caption centerCarCap align-middle ">
                        <h5>Why do we use it?</h5>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin
                            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                            words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                            classical
                            literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                            1.10.33
                            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                            BC.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="sliderPic d-block"
                         style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/6c/Kilimanjaro_from_Amboseli.jpg')" }}>

                    </div>
                    <div className="carousel-caption centerCarCap align-middle">
                        <h5>Where can I get some?</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis magna tortor.
                            Vestibulum ante
                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce lacus lacus,
                            fermentum
                            ut rutrum vitae, auctor non turpis. Nam interdum, neque id ullamcorper commodo, purus ipsum
                            dictum
                            purus, eget tincidunt sapien sem non odio. Aenean efficitur sagittis posuere. Sed ultrices
                            neque id
                            varius feugiat.</p>
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


        <div className="container mt-5">
            <div className="row mb-2">
                <div className="col-12">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">World</strong>
                            <h3 className="mb-0">Featured post</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a
                                natural lead-in to
                                additional content.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <div className="image_preview_container">
                                <div className="image_preview"
                                     style={{ width: '300px' , backgroundImage: "url('https://www.mozilla.org/media/img/structured-data/logo-firefox-nightly.2ae024a36eed.png')" }}></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">World</strong>
                            <h3 className="mb-0">Featured post</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a
                                natural lead-in to
                                additional content.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <div className="image_preview_container">
                                <div className="image_preview"
                                     style={{ backgroundImage: "url('https://prostomob.com/wp-content/uploads/2019/10/google-chrome-logo-new-ver-78-_960_720.jpg')" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h3 className="mb-0">Post title</h3>
                            <div className="mb-1 text-muted">Nov 11</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in
                                to
                                additional content.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <div className="image_preview_container">
                                <div className="image_preview"
                                     style={{ width: '300px' , backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/1200px-Opera_2015_icon.svg.png')"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
