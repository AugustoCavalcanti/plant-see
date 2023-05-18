import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return <>
        <section>
            <div className="container">
                <div className="row  h-100 align-items-center">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="aling-middle mb-5" id="capa">
                            <img className="logo my-5" src="/logo-1.png" />
                            <p>Que tal testar os seus conhecimentos sobre a fauna local ?</p>
                            <p>Vamos descobrir qual o nível da sua segueira vegetal ?</p>
                            <Link type="button" className="btn btn-outline-success align-self-center" to="/perguntas">Começar <i className="bi bi-arrow-right-short"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Outlet />
    </>
}