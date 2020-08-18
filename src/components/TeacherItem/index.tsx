import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
            <header>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEcdtKH1XEaCg/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=ATuPiAOWqU7Tr8w6M4nYhypkeDigv0ZkeeKOfEfAcOI"
                alt="Danilo Gomes"
              />
              <div>
                <strong>Danilo Gomes</strong>
                <span>Geografia</span>
              </div>
            </header>
            <p>
              Entusiasta das melhores tecnologias em geografia avançada.
              <br/><br/>
              Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas.
            </p>

            <footer>
            <p>Preço/hora
              <strong>R$ 40,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>

          </footer>
          </article>
  )
}

export default TeacherItem;


