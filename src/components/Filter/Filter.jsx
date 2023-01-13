import s from './Filter.module.css';

export default function Filter({ filterName, value }) {
  <div>
    <label>
      <h4>Find contact by name</h4>
      <input
        type="text"
        className={s.filterInput}
        value={value}
        onChange={filterName}
      ></input>
    </label>
  </div>;
}
