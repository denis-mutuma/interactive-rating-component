export default function RatingButton({ onClick, value }) {
    return (
        <button className="circle circle--rating" onClick={onClick} type="button" value={value}>{value}</button>
    );
}