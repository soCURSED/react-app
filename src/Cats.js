<div>
  <p>Cat Store</p>
</div>;
const Cats = (props) => {
  return (
    <div>
      <img src={props.catsPics} alt="a Cat" />
      <h3>Name: {props.Name}</h3>
      <p>Age: {props.Age}</p>
    </div>
  );
};

export default Cats;
