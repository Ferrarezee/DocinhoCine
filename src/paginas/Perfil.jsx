import estilos from './Perfil.module.css';

export function Perfil() {
    return (
        <div className={estilos.container}>
            <div className={estilos.card}>
                <div className={estilos.header}>
                    <img 
                        src="https://i.pinimg.com/736x/ea/fa/f4/eafaf4a274e68e8d0872e2984ed672c9.jpg" 
                        alt="Foto de perfil"
                        className={estilos.foto}
                    />
                    <div>
                        <h2>Snow Ferrareze</h2>
                    </div>
                </div>

                <div className={estilos.info}>
                    <div>
                        <strong>Idade:</strong>
                        <span>20 anos</span>
                    </div>
                    <div>
                        <strong>E-mail:</strong>
                        <span>snowfelino@email.com</span>
                    </div>
                    <div>
                        <strong>Plano:</strong>
                        <span>Premium</span>
                    </div>
                    <div>
                        <strong>Forma de pagamento:</strong>
                        <span>Cartão de crédito</span>
                        <span>Data de vencimento: /04/2025</span>
                    </div>
                    <div>
                        <strong>Senha:</strong>
                        <span>******** <button className={estilos.botaoLink}>Alterar</button></span>
                    </div>
                </div>

                <div className={estilos.favoritos}>
                    <h3>Mais assistidos desse perfil</h3>
                    <div className={estilos.listaFilmes}>
                        <img src="https://play-lh.googleusercontent.com/-57O2D3ZZdJrgCxyW-Rw-tefr-zQRIjljXfYPiub05EazKbDh5GLOoQQ0yDqr8SRP_s=w240-h480-rw" alt="Coraline" />
                        <img src="https://images.justwatch.com/poster/205251817/s718/o-estranho-mundo-de-jack.jpg" alt="Jack" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQp-toRG4fcW6963FqielIZUKthNdyAkwkFA&s" alt="Princesa e sapo" />
                        <img src="https://br.web.img2.acsta.net/pictures/14/09/10/10/26/072838.jpg" alt="Barbie" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhH3kmEgNFcTvhN7IXDO_XYz_mMtCJbsfFA&s" alt="A era do gelo" />
                        <img src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/85/08/19962190.jpg" alt="Selvagem" />
                    </div>
                </div>
            </div>
        </div>
    );
}
