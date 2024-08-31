// function RewardsDisplay({ data }) {
//     if (!data) return null;
  
//     const { rewards, totalRewardsGenerated, wallet, erc20Wallet, currentTop100, currentStakedAmount, totalBitneuronGenerated, totalNeurons, error } = data;
  
//     return (
//       <div>
//         {error && <div id="error-message" style={{ fontSize: '100%', color: 'white' }}>{error}</div>}
//         <div id="result-container">
//           <div id="result">
//             <div>Bittensor Wallet Address: <span id="wallet">{wallet}</span></div>
//             <div>ERC20 Wallet Address: <span id="erc20-wallet">{erc20Wallet}</span></div>
//           </div>
//           <table className="customers" id="result_table">
//             <tbody>
//               <tr className="customers">
//                 <th>Month</th>
//                 <th>Year</th>
//                 <th>Total $TAO Generated</th>
//                 <th>Tax Return</th>
//                 <th>$NEURON Generated</th>
//               </tr>
//               {rewards.map((reward, index) => (
//                 <tr key={index}>
//                   <td>{reward.month}</td>
//                   <td>{reward.year}</td>
//                   <td>{reward.total_rewards_generated}</td>
//                   <td dangerouslySetInnerHTML={{ __html: reward.tax_return_nine_percent }}></td>
//                   <td>{reward.bitneurons_generated}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div>Total $TAO Generated: <span id="total-tao-generated">{totalRewardsGenerated} $TAO</span></div>
//         </div>
//         <div>
//           <div>Staked Balance: <span style={{ color: 'lightgreen' }} id="current-staked-amount">{currentStakedAmount}</span></div>
//           <div>Bitneuron Tokens Generated: <span id="total-bitneuron-generated">{totalBitneuronGenerated}</span></div>
//           <div>Total FT Neurons: <span id="total-neurons">{totalNeurons}</span></div>
//           <div>Validator's Fees: <span style={{ color: 'lightgreen' }}>0%</span></div>
//           <div>Position in Top 100: <span id="current-top-100">{currentTop100}</span></div>
//         </div>
//       </div>
//     );
//   }
  
//   export default RewardsDisplay;

  
//   import React, { useState } from 'react';
// import RewardForm from './RewardForm';
// import RewardsDisplay from './RewardsDisplay';

// function App() {
//   const [data, setData] = useState(null);

//   const handleFormSubmit = async (wallet) => {
//     try {
//       const response = await fetch('rewards.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: `tao_wallet=${encodeURIComponent(wallet)}`
//       });
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="row">
//       <div className="col-md-12 col-lg-12">
//         <div className="row">
//           <div className="col-12 mb-4">
//             <div className="">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
//                     <div className="">
//                       <div className="card-title">
//                         <h2><strong>Monthly Staking Rewards</strong></h2>
//                         <h5><strong>Check your monthly $TAO staking rewards and the $NEURON generated through FirstTensor.</strong></h5>
//                       </div>
//                       <div className="mt-sm-auto">
//                         <RewardForm onSubmit={handleFormSubmit} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <RewardsDisplay data={data} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
