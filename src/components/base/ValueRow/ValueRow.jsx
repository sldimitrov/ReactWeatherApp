export default function ValueRow({ parameter, value, image }) {
  return (
    <div className="row">
      <p className="w-characteristics">{parameter}</p>
      <p id="value">{value}</p>
      <img src={image} alt="hot" className="icons" />
    </div>
  );
}
