import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logoGitExplorer.png';

import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
 return (
  <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Dgite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/55068041?s=460&u=306c25cafa897092d4a0483d561ff980fb81d109&v=4"
            alt="Guilherme Domingos"
          />
          <div>
            <strong>guidsantos/database-upload</strong>
            <p>Desafio lv2 - BootCamp Gostack - Utilizando NodeJS, typeorm e upload de arquivos com Multer</p>
          </div>

          <FiChevronRight size={40} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/55068041?s=460&u=306c25cafa897092d4a0483d561ff980fb81d109&v=4"
            alt="Guilherme Domingos"
          />
          <div>
            <strong>guidsantos/database-upload</strong>
            <p>Desafio lv2 - BootCamp Gostack - Utilizando NodeJS, typeorm e upload de arquivos com Multer</p>
          </div>

          <FiChevronRight size={40} />
        </a>  <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/55068041?s=460&u=306c25cafa897092d4a0483d561ff980fb81d109&v=4"
            alt="Guilherme Domingos"
          />
          <div>
            <strong>guidsantos/database-upload</strong>
            <p>Desafio lv2 - BootCamp Gostack - Utilizando NodeJS, typeorm e upload de arquivos com Multer</p>
          </div>

          <FiChevronRight size={40} />
        </a>

    </Repositories>
  </>
    )};


export default Dashboard;
