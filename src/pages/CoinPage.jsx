import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import { SingleCoin } from '../config/api';
import CoinInfo from '../components/CoinInfo'
import { LinearProgress, Typography } from '@mui/material';
import { numberWithCommas } from '../components/Banner/Carousel';
import sanitizeHtml from 'sanitize-html';

console.log("tomato")





const CoinPage = () => {


  const {id} = useParams();
  const [coin,setCoin] = useState()
  const {currency,symbol} = CryptoState();

  const fetchCoin=()=>{
    fetch(SingleCoin(id)).then((response)=>response.json()).then((data)=>{setCoin(data)})
  };




  useEffect(()=>{
    fetchCoin(coin);
  },[]);


  const sanitizedDescription = sanitizeHtml(coin?.description.en, {
    allowedTags: [], 
    allowedAttributes: {} 
  });

  if(!coin) return <LinearProgress style={{borderColor:'gold'}}/>;

  return (
    <div  style={{
      display:'flex',
      paddingLeft:50,
    }}>
      <div style={{
        width:'30%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:25,
        borderRight: "2px solid grey"
      }}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height='200'
          style={{marginBottom:20}}
        
        />
          <Typography variant='h3'
            style={{
              fontWeight:"bold",
              marginBottom:20,
              fontFamily:'Mukta'
            }}
          
          >
            {coin?.name}
          </Typography>

          <Typography variant='subtitle1' 
          
            style={{
              width:'100%',
              fontFamily:'Mukta',
              padding:25,
              paddingBottom:15,
              paddingTop:0,
              textAlign:"justify",
            }}
          
    
          >
            {/* {coin?.description.en.split(". ")[0]}. */}
            {sanitizedDescription.split('. ')[0]}.
          </Typography>

          <div 
            style={{
              alignSelf:'start',
              padding:25,
              paddingTop:10,
              width:'100%',
            }}
          >
            <span
            
              style={{display:'flex'}}
            >
              <Typography variant='h5' 
              // heading
              >
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant='h5'
                style={{
                  fontFamily:'Mukta',
                }}
              >
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span
            // market data
              style={{display:'flex'}}
            >
              <Typography variant='h5' 
              // heading
              >
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant='h5'
                style={{
                  fontFamily:'Mukta',
                }}
              >
                {symbol}{" "}
                {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
              </Typography>
            </span>
            <span
            // market data
              style={{display:'flex'}}
            >
              <Typography variant='h5' 
              // heading
              >
                Market Cap:{" "}
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant='h5'
                style={{
                  fontFamily:'Mukta',
                }}
              >
                {symbol}{" "}
                {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0,-6))}M
              </Typography>
            </span>
          </div>
       
        

      </div>
      {/* chart */}
      <CoinInfo coin={coin}/>
    </div>
  )
}

export default CoinPage