import { useState } from "react";

const CheckBoxSelector = () => {
  const [checkBoxes, setCheckBoxes] = useState([
    { id: 1, label: "Option 1", checked: false },
    { id: 2, label: "Option 2", checked: false },
    { id: 3, label: "Option 3", checked: false },
    { id: 4, label: "Option 4", checked: false },
    { id: 5, label: "Option 5", checked: false },
  ]);

  const [disableBtn, setDisableBtn] = useState(false);

  const handleSubmit = () => {
    const checkData = [...checkBoxes];
    for (let index = 0; index < checkData.length; index++) {
      if (!checkData[index].checked) {
        checkData[index].checked = true;
        break;
      }
    }

    setCheckBoxes(checkData);

    const isAllChecked = checkData.every((item) => item.checked === true);

    setDisableBtn(isAllChecked);
  };
  return (
    <div>
      <section>
        {checkBoxes?.map((item, index) => (
          <div key={index}>
            <input type="checkbox" checked={item.checked} readOnly />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </section>
      <section>
        <button disabled={disableBtn} onClick={() => handleSubmit()}>
          {disableBtn ? "All Checked" : "Check Next.."}
        </button>
      </section>
    </div>
  );
};

export default CheckBoxSelector;
