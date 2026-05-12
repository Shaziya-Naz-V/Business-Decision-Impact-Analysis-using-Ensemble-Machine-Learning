// import styled from "styled-components";
// import { useState } from "react";

// // Product list
// const products = [
//   "Laptops","Smartphones","Tablets","TVs & Audio","Small Electronics",
//   "Wearables","Wearable Accessories","Storage Devices","Furniture",
//   "Bedding","Home Decor","Home Appliances","Kitchenware",
//   "Footwear","Sportswear","Kids Wear","Men’s Wear","Women’s Wear"
// ];

// const Card = styled.div`
//   background: linear-gradient(180deg, #1f293d, #070c16);
//   width: 400px;
//   border-radius: 16px;
//   padding: 24px;
//   margin-left: 30px;
// `;
// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;
// const TitleContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.h3`
//   font-size: 20px;
//   margin: 0;
// `;

// const Subtitle = styled.p`
//   font-size: 12px;
//   color: #97e1cd;
//   margin: 2px 0 0 0;
// `;
// const Label = styled.p`
//   margin-top: 18px;
//   color: #ccc;
// `;

// const Input = styled.input`
//   width: 100%;
//   background: #101827;
//   border: 1px solid #858383;
//   border-radius: 10px;
//   padding: 10px;
//   margin-top: 5px;
//   color: #fff;
// `;

// const Select = styled.select`
//   width: 100%;
//   background: #101827;
//   border: 1px solid #827c7c;
//   border-radius: 10px;
//   padding: 10px;
//    margin-top: 5px;
//   color: #fff;
// `;

// const ErrorText = styled.p`
//   color: red;
//   font-size: 12px;
// `;

// const AddButton = styled.button`
//   margin-top: 20px;
//   width: 100%;
//   padding: 12px;
//   background: cyan;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
// `;

// export default function InputCard({ setMetrics, setRecommendation, onStrategySubmit }) { // <- add setRecommendation
//   const [product, setProduct] = useState("");
//   const [price, setPrice] = useState("");
//   const [cost, setCost] = useState("");
//   const [marketingBudget, setMarketingBudget] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [error, setError] = useState("");

//   const validate = (p, c, m) => {
//     const priceVal = Number(p);
//     const costVal = Number(c);
//     const marketingVal = Number(m);

//     if (priceVal < 0 || costVal < 0 || marketingVal < 0) {
//       setError("Negative not allowed");
//     } 
//     else if (p !== "" && c !== "" && costVal >= priceVal) {
//       setError("Cost must be less than price");
//     } 
//     else {
//       setError("");
//     }
//   };

//   const handleSubmit = async () => {
//     if (!product || !price || !cost || !quantity) {
//       setError("Please fill all fields");
//       return;
//     }

//     try {
//       const res = await fetch("http://127.0.0.1:5000/api/predict", { // <- use proper endpoint
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           product_name: product,
//           unit_price: Number(price),
//           production_cost: Number(cost),
//           marketing_spend: Number(marketingBudget || 0),
//           quantity: Number(quantity)
//         }),
//       });

//       const data = await res.json();
//       console.log("API response:", data); 
      
//       // Update metrics
//       setMetrics({
//         expected_profit: data.expected_profit,
//         best_case: data.best_case,
//         worst_case: data.worst_case,
//         strategy_label: data.strategy_label,
//         stability_index: data.stability_index,
//         avg_market_share: data.avg_market_share
//       });

//       // Update recommendation
//       setRecommendation({
//        opt_price:      data.opt_price,        // ✅
//   opt_cost:       data.opt_cost,         // ✅
//   opt_net_profit: data.opt_net_profit,   // ✅
//   why:            data.why_it_works,
//   insights:       data.key_insights,
//   riskMitigation: data.risk_mitigation,
//       });

    
//     // ✅ This saves the strategy as a card below InputCard
//       onStrategySubmit(
//         {
//           product,
//           price,
//           cost,
//           marketing: marketingBudget,
//           quantity,
//         },
//         {
//           expected_profit: data.expected_profit,
//           best_case:        data.best_case,      // ✅ add this
//     worst_case:       data.worst_case, 
//           stability_index: data.stability_index,
//           avg_market_share: data.avg_market_share,
//           strategy_label: data.strategy_label,
//         }
//       );
//     }
//     catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Card>
//        <Header>
//          <TitleContainer>
//            <Title>Define Parameters</Title>
//            <Subtitle>Adjust your business variables</Subtitle>
//          </TitleContainer>
//      </Header>
//       <Label>Product Name</Label>
//       <Select value={product} onChange={(e)=>setProduct(e.target.value)}>
//         <option value="">Select</option>
//         {products.map((p,i)=> <option key={i}>{p}</option>)}
//       </Select>

//       <Label>Price Value</Label>
//       <Input type="number" value={price} onChange={(e)=>{
//         setPrice(e.target.value);
//         validate(e.target.value, cost, marketingBudget);
//       }}/>

//       <Label>Cost Value</Label>
//       <Input type="number" value={cost} onChange={(e)=>{
//         setCost(e.target.value);
//         validate(price, e.target.value, marketingBudget);
//       }}/>

//       <Label>Marketing Spend</Label>
//       <Input type="number" value={marketingBudget} onChange={(e)=>{
//         setMarketingBudget(e.target.value);
//         validate(price, cost, e.target.value);
//       }}/>

//       <Label>Total Quantity</Label>
//       <Input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>

//       {error && <ErrorText>{error}</ErrorText>}

//       <AddButton disabled={!!error} onClick={handleSubmit}>
//         Add Strategy
//       </AddButton>
//     </Card>
//   );
// }

import styled from "styled-components";
import { useState } from "react";

/* ================= DATA ================= */

const products = [
  "Laptops","Smartphones","Tablets","TVs & Audio","Small Electronics",
  "Wearables","Wearable Accessories","Storage Devices","Furniture",
  "Bedding","Home Decor","Home Appliances","Kitchenware",
  "Footwear","Sportswear","Kids Wear","Men’s Wear","Women’s Wear"
];

/* ================= COMPONENT ================= */

export default function InputCard({ setMetrics, setRecommendation, onStrategySubmit }) {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [marketingBudget, setMarketingBudget] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = (p, c, m) => {
    const priceVal = Number(p);
    const costVal = Number(c);
    const marketingVal = Number(m);

    if (priceVal < 0 || costVal < 0 || marketingVal < 0) {
      setError("Negative values not allowed");
    } else if (p !== "" && c !== "" && costVal >= priceVal) {
      setError("Cost must be less than price");
    } else {
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!product || !price || !cost || !quantity) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://127.0.0.1:5000/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_name: product,
          unit_price: Number(price),
          production_cost: Number(cost),
          marketing_spend: Number(marketingBudget || 0),
          quantity: Number(quantity)
        }),
      });

      const data = await res.json();

      setMetrics({
        expected_profit: data.expected_profit,
        best_case: data.best_case,
        worst_case: data.worst_case,
        strategy_label: data.strategy_label,
        stability_index: data.stability_index,
        avg_market_share: data.avg_market_share
      });

      setRecommendation({
        opt_price: data.opt_price,
        opt_cost: data.opt_cost,
        opt_net_profit: data.opt_net_profit,
        why: data.why_it_works,
        insights: data.key_insights,
        riskMitigation: data.risk_mitigation,
      });

      onStrategySubmit(
        { product, price, cost, marketing: marketingBudget, quantity },
        {
          expected_profit: data.expected_profit,
          best_case: data.best_case,
          worst_case: data.worst_case,
          stability_index: data.stability_index,
          avg_market_share: data.avg_market_share,
          strategy_label: data.strategy_label,
        }
      );

    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Header>
        <TitleContainer>
          <Title>Define Parameters</Title>
          <Subtitle>Adjust your business variables</Subtitle>
        </TitleContainer>
      </Header>

      <Label>Product Name</Label>
      <Select value={product} onChange={(e) => setProduct(e.target.value)}>
        <option value="">Select</option>
        {products.map((p, i) => <option key={i}>{p}</option>)}
      </Select>

      <Label>Price Value</Label>
      <Input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
          validate(e.target.value, cost, marketingBudget);
        }}
      />

      <Label>Cost Value</Label>
      <Input
        type="number"
        value={cost}
        onChange={(e) => {
          setCost(e.target.value);
          validate(price, e.target.value, marketingBudget);
        }}
      />

      <Label>Marketing Spend</Label>
      <Input
        type="number"
        value={marketingBudget}
        onChange={(e) => {
          setMarketingBudget(e.target.value);
          validate(price, cost, e.target.value);
        }}
      />

      <Label>Total Quantity</Label>
      <Input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      {error && <ErrorText>{error}</ErrorText>}

      <AddButton disabled={!!error || loading} onClick={handleSubmit}>
        {loading ? "Processing..." : "Add Strategy"}
      </AddButton>
    </Card>
  );
}

/* ================= STYLES ================= */

const Card = styled.div`
  background: linear-gradient(180deg, #1f293d, #070c16);
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin-left: 30px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #97e1cd;
  margin: 2px 0 0 0;
`;

const Label = styled.p`
  margin-top: 14px;
  color: #ccc;
  font-size: 13px;
`;

const Input = styled.input`
  width: 100%;
  background: #101827;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  color: #fff;
  font-size: 14px;

  &:focus {
    border-color: #22d3ee;
  }
`;

const Select = styled.select`
  width: 100%;
  background: #101827;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  color: #fff;
`;

const ErrorText = styled.p`
  color: #ef4444;
  font-size: 12px;
  margin-top: 10px;
`;

const AddButton = styled.button`
  margin-top: 18px;
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #22d3ee, #2dd4bf);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
  }
`;