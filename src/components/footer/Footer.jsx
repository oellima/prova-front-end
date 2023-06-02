import { links, links_social_media_images, links_social_media_icons } from "../../utils/footer/footer";
import SIC from '../../assets/SIC.png';

import "./footer.scss";

export default function Footer() {
    return (
        <div id="footer">
            <div className="footer-links">
                <div className="links-social-media">
                    <div className="social-media-icons">
                        <h4>Siga nas redes sociais:</h4>
                        <div className="social-icons">
                            {links_social_media_icons.map((icon) => {
                                return (
                                    <a className="icon" key={icon.id} href={icon.route} target="_blank" rel="noopener noreferrer">
                                        {icon.img}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="social-media-images">
                        {links_social_media_images.map((link) => {
                            return (
                                <a key={link.id} href={link.route} target="_blank" rel="noopener noreferrer">
                                    <img src={link.img} alt={link.alt} />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <ul className="links">
                    {links.map((link) => {
                        return (
                            <li key={link.id}>
                                <a className="link" href={link.route} target="_blank" rel="noopener noreferrer">{link.name}</a>
                                <ul>
                                    {link.sublinks.map((sublink) => {
                                        return (
                                            <li key={sublink.id}>
                                                <a className="sub-link" href={sublink.route} target="_blank" rel="noopener noreferrer">{sublink.name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <ul className="footer-address">
                <p>Centro Administrativo Estadual – Avenida Dr.  João da Mata, nº 200 – Jaguaribe – João Pessoa/PB -  CEP: 58015-900</p>
                <p>Telefones: (83) 36125600/ 36125601/ 36125602</p>
                <img src={SIC} alt="" />
            </ul>
        </div>
    )
}