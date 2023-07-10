import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext';
import {CoinList} from '../config/api'
import { Container, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from './Banner/Carousel';

const Coinstable = () => {
    const [coins,setCoins] = useState([]);
    const [loading,setLoading] = useState(false);
    const {currency,symbol} = CryptoState();

    const [search,setSearch] = useState("");
    const navigate = useNavigate();

    const fetchCoins = ()=>{
        setLoading(true)
        fetch(CoinList(currency)).then((response)=>{return response.json()}).then((data)=>{setCoins(data)})
        setLoading(false)
    };
    useEffect(()=>{
        fetchCoins()
    },[currency]);


    const darkTheme = createTheme({
       palette:{
        primary:{
            main:"#fff",
        },
        mode:"dark",
       },

    });


  const handleSearch = ()=>{
    if(!search || search=='' || search == ' '){
        return coins
    }
    return coins.filter((coin)=>{
        coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
    })
  }

  return (
    <ThemeProvider theme={darkTheme}>
        <Container style={{textAlign:'center'}}>
            <Typography variant='h4' style={{margin:18,fontFamily:'Mukta'}}>
                Crypotcurrenncy prices by Marked cap
            </Typography>


            <TextField label="Search for a Crypto Currency.." variant='outlined'style={{
                marginBottom:20,
                width:'100%',
            }} onChange={(e)=>{setSearch(e.target.value)}}/>



            <TableContainer>
                {
                    loading ? (
                        <LinearProgress  style={{backgroundColor:'gold'}}/>

                    ):(
                        <Table>
                            <TableHead style={{backgroundColor:'#EEBC1D'}}>
                                <TableRow>
                                    {["Coin","Price","24h Change","Market Cap"].map((head)=>(
                                        <TableCell 
                                        style={{
                                            color:'black',
                                            fontWeight:'700',
                                            fontFamily:'Mukta'
                                        }}

                                        key={head}
                                        align={head === "Coin" ? "" :"right"}
                                        >
                                            {head}

                                        </TableCell>
                                    ))}
                                                  
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    {handleSearch().map((row)=>{
                                        const profit = row.price_change_percentage_24h > 0;
                                        return (
                                            
                                            <TableRow 
                                            onClick = {()=>navigate(`/coins/${row.id}`)}
                                            style={{
                                                
                                                    // backgroundColor:'#16171a',
                                                    cursor:'pointer',
                                                    
                                                    fontFamily:"Mukta", 
                                                
                                            }}
                                            className='dataRow'
                                            key = {row.name}
                                            
                                            >
                                                    <TableCell component='th' scope='row' style={{display:'flex',gap:15,}}> 
                                                       <img
                                                         src={row?.image}
                                                         alt={row.name}
                                                         height="50"
                                                         style={{marginBottom:10}}
                                                      />
                                                    <div style={{display:'flex',flexDirection:'column'}}>
                                                        <span style={{
                                                            textTransform:'uppercase',
                                                            fontSize:22,
                                                        }}>
                                                            {row.symbol}
                                                        </span>
                                                        <span style={{color:'darkorchid'}}>{row.name}</span>
                                                    </div>
                                                       

                                                    </TableCell >

                                                    <TableCell align='right'>
                                                            {symbol}{" "}
                                                            {numberWithCommas(row.current_price.toFixed(2))}
                                                    </TableCell>

                                                    <TableCell
                                                        align='right'
                                                        style={{
                                                            color:profit > 0? "rgb(14,203,129" : "red",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {profit && "+"}
                                                        {row.price_change_percentage_24h.toFixed(2)}%

                                                    </TableCell>

                                                    <TableCell align='right'>
                                                        {symbol}{" "}
                                                        {numberWithCommas(row.market_cap.toString().slice(0,-6))} M
                                                    </TableCell>

                                                    

                                            </TableRow>
                                            
                                        )
                                    })}
                            </TableBody>
                        </Table>
                    )
                }

            </TableContainer>
        </Container>
    </ThemeProvider>
  )
}

export default Coinstable