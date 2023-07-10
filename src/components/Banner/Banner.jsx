import { Container, Typography } from '@mui/material'
import './banner.css'
import Carousel from './Carousel'

const Banner = () => {
  return (
    <div style={{
      backgroundImage:"url(./banner2.jpg)",
    }}>
        <Container style={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          paddingTop: 25,
          justifyContent:"space-around",
        }}>

          <div style={{
            display:'flex',
            height:"40%",
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center',

          }}>
            <Typography variant='h2' style={{
              fontWeight:'bold',
              marginBottom: 15,
              fontFamily: 'Mukta',
            }}>
              Crypto Tracker
            </Typography>

            <Typography variant='subtitel2' style={{
              color:'darkgrey',
              textTransform:'capitalize',
              fontFamily: "Mukta",
            }}>
              Get all the info regarding your favourite Crypto Currency
              
            </Typography>
          </div>
          <Carousel/>

        </Container>
    </div>
  )
}

export default Banner