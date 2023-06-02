import "./submitbutton.scss";

export default function SubmitButton({ name, form, onClick }) {
  return (
    <>
      <button className="submit-button" type="submit" form={form} onClick={onClick}>
        {name}
      </button>
    </>
  );
}