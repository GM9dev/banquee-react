import "./BaseButton.css";

type BaseButtonParams = {
  label: string;
};

function BaseButton({ label = "Default text" }: BaseButtonParams) {
  return <button className="BaseButton">{label}</button>;
}

export default BaseButton;
