import { Container } from '@mui/material'
import './banner.css'

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

        </Container>
    </div>
  )
}

export default Banner