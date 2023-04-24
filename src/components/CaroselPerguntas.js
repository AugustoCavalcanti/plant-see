export default function CaroselPerguntas() {
    return <>
        <section>
            <div className="container">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="http://nossacasa.net/nossosriachos/agroecologia/wp-content/uploads/sites/9/2020/02/Parkia-pendula.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Qual o nome desta planta ?</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Default radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Default checked radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            Default radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                        <label class="form-check-label" for="flexRadioDefault4">
                                            Default checked radio
                                        </label>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://novo.cerratinga.org.br/site/wp-content/uploads/2021/09/caju-arvore-dodesign-s.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h5 className="sombra">Qual o nome desta planta ?</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label sombra" for="flexRadioDefault1">
                                            Default radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label sombra" for="flexRadioDefault2">
                                            Default checked radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            Default radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                        <label class="form-check-label" for="flexRadioDefault4">
                                            Default checked radio
                                        </label>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://caixacolonial.club/blog/wp-content/uploads/2020/11/buriti2-670x670.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h5>Qual o nome desta planta ?</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Default radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Default checked radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            Default radio
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                        <label class="form-check-label" for="flexRadioDefault4">
                                            Default checked radio
                                        </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Próximo</span>
                    </button>
                </div>
            </div>
        </section>
    </>
}