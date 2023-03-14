import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    event.target.reset();
    event.target.elements.name.focus();
    onAddActivity(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Activity:</h1>
      <div className="form-container-1">
        <label>Name: </label>
        <input type="text" name="name"></input>
      </div>
      <div className="checkbox-container-2">
        <label>Good-weather activity: </label>
        <input type="checkbox" name="isForGoodWeather"></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
