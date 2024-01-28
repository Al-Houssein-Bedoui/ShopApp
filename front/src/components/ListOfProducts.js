import CardItem from "./CardItem";

export default function ListOfProducts(props) {
  const { data, incrementer, removeHandler, sum, updateSum } = props;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {data.map((element) => (
          <CardItem
            cardData={element}
            incrementHandler={incrementer}
            remove={removeHandler}
            updateSum={updateSum}
          />
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          fontSize: "18px",
          borderRadius :'10px',
          border: '2px solid #add8e6'
        }}
      >
        <h2>
          {data.length === 0 ? (
            <h2 style={{marginTop:'20%',borderRadius :'35px' , border: '2px solid #add8e6',padding:'15px'
          }}> no products to show </h2>
          ) : (
            <h2>
              
              Total : <span style={{ fontWeight: "bold" , }}> {sum} $ </span>
            </h2>
          )}
        </h2>
      </div>
    </div>
  );
}
