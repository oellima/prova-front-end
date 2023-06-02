import "./resetbutton.scss";

export default function ResetButton({ name }) {
  return (
    <>
      <button className="reset-button" type="reset">
        {name}
      </button>
    </>
  );
}