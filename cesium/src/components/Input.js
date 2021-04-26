const Input = ({ label, defaultVal = "", setValue, labelId }) => {
  const setItemValue = (event) => {
    setValue(labelId, event.target.value);
  };

  return (
    <div key={labelId}>
      <label for="#" className="input-label">
        {label}
      </label>
      <input type="text" value={defaultVal} onChange={setItemValue} />
    </div>
  );
};

export { Input };
