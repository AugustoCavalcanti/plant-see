import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function CaroselPerguntas({ perguntas }) {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        // You can pass formData as a fetch body directly:
        
        const resposta_id = fetch('http://127.0.0.1:8000/api/questions_register/', { method: form.method, body: formData })
                            .then(res => res.json())
                            .then(res => {
                                console.log(res.id);
                                navigate('/resultado/'+res.id);
                            });
        console.log(resposta_id);
    };
    return <>
        <section>
            <Form method="post" id='questionario-plantas' onSubmit={handleSubmit}>
                <Carousel interval={null}>
                    {perguntas.map((pergunta) => {
                        return <Carousel.Item key={pergunta.id}>
                            <img
                                className="d-block w-100 img-carosel"
                                src={pergunta.img_url}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className='sombra'>Qual o nome desta planta ?</h3>
                                <Form.Group controlId={`formBasicCheckbox${pergunta.id}`}>
                                    {pergunta.alternativas.map((alternativa) => {
                                        return <div key={`inline-radio${alternativa.id}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label={alternativa.choice_text}
                                                name={`group${pergunta.id}`}
                                                type='radio'
                                                id={`inline-radio-${alternativa.id}`}
                                                value={alternativa.id}
                                            />
                                        </div>
                                    }
                                    )}
                                </Form.Group>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
                <Button type="submit" className="btn btn-light buttom-finalizar shadow-2">Finalizar <i className="bi bi-arrow-right-short"></i></Button>
                <Button type="submit">Submit form</Button>
            </Form>
        </section>
    </>
}