export default function Resultado() {
    return <>
        <section>
            <div className="container">
                <div className="row  h-100 align-items-center">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="aling-middle mb-5" id="capa">
                            <img className="logo my-5" src="https://images.vexels.com/media/users/3/140278/isolated/lists/73d2c1d8a07fb1705bcad0712f07ec34-planta-floral.png" />
                            <h3>Id Plant</h3>
                            <p>Você acertou:</p>
                            <h5>7/10</h5>
                            <p>Ótimo resultado!</p>
                            <Link type="button" className="btn btn-outline-success align-self-center" to="/">Refazer ! <i className="bi bi-arrow-right-short"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}