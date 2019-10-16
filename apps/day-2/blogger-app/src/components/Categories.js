import React from 'react';
import { AllCategory } from '../store';

const Categories = ({ categories, onCategorySelect }) => {
  const categoriesWithAll = [{ ...AllCategory }, ...categories];

  return <div>
    <h3>Categories</h3>
    <div className="list-group">
      {categoriesWithAll.map(c => {
        return <button
          onClick={() => { onCategorySelect(c); }}
          key={c.id}
          type="button"
          className="list-group-item list-group-item-action">
          {c.name}
        </button>
      })}
    </div>
  </div>;
};

export default Categories;
