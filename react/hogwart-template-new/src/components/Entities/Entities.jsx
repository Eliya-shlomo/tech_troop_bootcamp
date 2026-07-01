import React from 'react';
import { Link } from 'react-router-dom';
import Entity from './Entity';
import './Entities.css';
import { useParams } from 'react-router-dom';

const Entities = ({ getCategoryData }) => {
  const { category } = useParams();

  return (
    <div className="entity-list">
      {getCategoryData(category).map((entity, i) => (
        <Link key={i} to={`/wiki/${category}/${entity.name}`}>
          <Entity category={category} name={entity.name} img={entity.img} level={entity.level} />
        </Link>
      ))}
    </div>
  );
}

export default Entities;