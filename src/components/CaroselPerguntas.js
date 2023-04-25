import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';

export default function CaroselPerguntas() {
    return <>
        <section>
                <Form>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://nossacasa.net/nossosriachos/agroecologia/wp-content/uploads/sites/9/2020/02/Parkia-pendula.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className='sombra'>Qual o nome desta planta ?</h3>
                                <div key={`inline-radio`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Cajueiro"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Fava de Bolota"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Palmeira Buriti"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Pequizeiro"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-4`}
                                    />
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://novo.cerratinga.org.br/site/wp-content/uploads/2021/09/caju-arvore-dodesign-s.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 className='sombra'>Qual o nome desta planta ?</h3>
                                <div key={`inline-radio`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Cajueiro"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Fava de Bolota"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Palmeira Buriti"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Pequizeiro"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-4`}
                                    />
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://caixacolonial.club/blog/wp-content/uploads/2020/11/buriti2-670x670.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3 className='sombra'>Qual o nome desta planta ?</h3>
                                <div key={`inline-radio`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Cajueiro"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Fava de Bolota"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Palmeira Buriti"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Pequizeiro"
                                        name='group1'
                                        type='radio'
                                        id={`inline-radio-4`}
                                    />
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Form>
        </section>
    </>
}