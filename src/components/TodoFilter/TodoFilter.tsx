import { useState } from 'react';

export const TodoFilter: React.FC<{
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setSearchHolder: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSelected, setSearchHolder }) => {
  const [inputText, setInputText] = useState('');

  const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.currentTarget.value);
  };

  const handlePlace = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchHolder(event.currentTarget.value.toLowerCase().trimStart());
    setInputText(event.currentTarget.value.trimStart());
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={handleSelected}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          value={inputText}
          type="text"
          className="input"
          placeholder="Search..."
          onChange={handlePlace}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {!!inputText && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => {
                setSearchHolder('');
                setInputText('');
              }}
            />
          )}
        </span>
      </p>
    </form>
  );
};