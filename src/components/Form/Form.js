import "./Form.css";

export default function Form(){
    return <form>
    <h1>New Activity:</h1>
    <div className="form-container-1">
    <label>Name: </label>
    <input type="text"></input>
    </div>
    <div className="checkbox-container-2">
    <label>Good-weather activity: </label>
    <input type="checkbox"></input>
    </div>
    </form>
}