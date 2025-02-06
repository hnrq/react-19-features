import { FC, use } from 'react';
import { fetchGames } from '../api';

type Game = {
  name: string;
  id: string;
  slug: string;
  background_image: string;
  released: string;
  metacritic: number;
};

const GameEntry: FC<{ game: Game }> = ({
  game: { name, background_image, released, metacritic },
}) => (
  <div className="game">
    <img src={background_image} alt="" />
    <h3>{name}</h3>
    <p>{new Date(released).toLocaleDateString()}</p>
    <b>{metacritic}/100</b>
  </div>
);

const GamesList: FC<{ search?: string }> = ({ search = '' }) => {
  const results = use(fetchGames({ search, page: 1 }));
  return results.map((game: Game) => <GameEntry game={game} />);
};

export default GamesList;
