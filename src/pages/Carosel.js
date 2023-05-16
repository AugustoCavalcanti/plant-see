import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import { Link, Outlet } from "react-router-dom";

export default function CaroselPerguntas({ perguntas }) {
    console.log(perguntas);
    return <>
        <section>
            <Form>
                <Carousel interval={null}>
                    {perguntas.map((pergunta) => {
                        return <Carousel.Item>
                            <img
                                className="d-block w-100 img-carosel"
                                src={pergunta.img_url}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className='sombra'>Qual o nome desta planta ?</h3>
                                {pergunta.alternativas.map((alternativa) => {
                                    return <div key={`inline-radio${alternativa.id}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label={alternativa.choice_text}
                                            name={`group${pergunta.id}`}
                                            type='radio'
                                            id={`inline-radio-${alternativa.id}`}
                                        />
                                    </div>
                                }
                                )}
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
                <Link type="button" className="btn btn-light buttom-finalizar shadow-2" to="/resultado">Finalizar <i className="bi bi-arrow-right-short"></i></Link>
            </Form>
        </section>
    </>
}