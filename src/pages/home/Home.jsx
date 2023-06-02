import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { carousel } from "../../utils/home/home";

import "./home.scss";

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section id="home">
            <Carousel className="carousel">
                {carousel.map((i) => {
                    return (
                        <Carousel.Item key={i.id} interval={3000}>
                            <img src={i.img} alt={i.alt} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <div className='buttons'>
                <Link to={"/cadastro"} className="button">
                    Cadastre-se
                </Link>
                <Link to={"/lista-de-cadastros"} className="button">
                    Lista de Cadastros
                </Link>
            </div>
        </section>
    )
}