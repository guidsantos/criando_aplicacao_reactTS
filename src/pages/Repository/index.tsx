import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logoGitExplorer.png';

import { Header, Issues, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/55068041?s=460&u=306c25cafa897092d4a0483d561ff980fb81d109&v=4"
            alt="Avatar"
          />
          <div>
            <strong>guidsantos/database-upload</strong>
            <p>descrição do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1208</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1128</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asashuhuas">
          <div>
            <strong>ashuashuas</strong>
            <p>ashuuashuhashuas</p>
          </div>

          <FiChevronRight size={40} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
