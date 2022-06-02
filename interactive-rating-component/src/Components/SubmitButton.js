export default function SubmitButton({ onSubmit, value }) {
    return (
        <div className="submit--div">
            <button type="submit" id="submit--button" onSubmit={onSubmit} value={value}>SUBMIT</button>
        </div>
    );
}