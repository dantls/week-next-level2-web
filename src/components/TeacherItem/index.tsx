import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

interface Teacher{
  id: string;
  avatar:string;
  bio:string;
  name: string;
  whatsapp: string;
}
interface Classe{
  id:string;
  subject: string;
  cost:number;
}


export interface TeacherItemProps {
  teacher: Teacher;
  classe: Classe
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, classe}) => {

  const {avatar,bio,name,whatsapp } = teacher;
  const {subject, cost } = classe;
  return (
    <article className="teacher-item">
            <header>
              <img
                src={avatar}
                alt={name}
              />
              <div>
                <strong>{name}</strong>
                <span>{subject}</span>
              </div>
            </header>
            <p>{bio}</p>

            <footer>
            <p>Preço/hora
              <strong>{cost}</strong>
            </p>
            <a href={`https://wa.me/${whatsapp}`}>
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </a>

          </footer>
          </article>
  )
}

export default TeacherItem;


