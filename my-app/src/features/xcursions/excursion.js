export default function Excursion(props) {

    return (
        <div>
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
                         style={{ backgroundImage: "url('https://a-static.besthdwallpaper.com/boruto-naruto-sleduyushchee-pokolenie-naruto-uzumaki-baryon-mode-4k-oboi-3840x2160-80686_54.jpg')" }}>
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
                         style={{ backgroundImage: "url('https://a-static.besthdwallpaper.com/boruto-naruto-sleduyushchee-pokolenie-naruto-uzumaki-baryon-mode-4k-oboi-3840x2160-80686_54.jpg')" }}>

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
                         style={{ backgroundImage: "url('https://a-static.besthdwallpaper.com/boruto-naruto-sleduyushchee-pokolenie-naruto-uzumaki-baryon-mode-4k-oboi-3840x2160-80686_54.jpg')" }}>

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
        <div className='container-lg mt-3'>
                <div className="card bg-dark text-white">
                    <img src='https://i.guim.co.uk/img/media/ac0ee21f52deb099b783e6d290dd95a1dbb2400e/0_10_2280_1368/master/2280.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=5e46dfaaadf7614cc57bd8885d353589'
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
    </div>
    )
}
