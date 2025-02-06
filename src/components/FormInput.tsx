import './../../src/app/(pages)/checkout/mainSection.css'

interface FormInputProps {
  label?: string;
  placeholder?: string;
  width?: number | string;
}

function FormInput({ label, placeholder, width }: FormInputProps) {
  return (
    <div className="checkout-form-section">
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        style={{ width }}
      />
    </div>
  );
}

export default FormInput;