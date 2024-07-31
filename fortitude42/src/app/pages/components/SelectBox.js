import Select from "react-select";

const SelectBox = () => {
  const options = [
    { value: "option 1", label: "Edit" },
    { value: "option 2", label: "Delete" },
  ];

  return (
    <Select
      className="react-select-styled"
      classNamePrefix="react-select"
      options={options}
      placeholder="Action"
    />
  );
};

export default SelectBox;
