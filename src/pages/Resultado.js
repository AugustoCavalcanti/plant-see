import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Resultado() {
    const { id } = useParams();
    const [resposta, setResposta] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/answers/' + id + '')
            .then(res => res.json())
            .then(res => {
                setResposta(res)
            })
    }, [])
    console.log(resposta);
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