import React from 'react'
import { Grid,LinearProgress } from '@mui/material'

//components
import Banner from '../banner/Banner'
import Categories from './Categories'
import Posts from './post/Posts'


const Home = () => {
  return (
    <>
      {/* <LinearProgress/> */}
      <Banner />
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>
        <Grid container item xs={12} sm={10} lg={10}>
          <Posts/>
        </Grid>
      </Grid>
    </>
  )
}

export default Home