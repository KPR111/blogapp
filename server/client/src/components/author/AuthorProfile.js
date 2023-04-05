import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider';
import {Box,Typography,Grid} from '@mui/material'
import Posts from './posts/Posts'
import Banner from '../banner/Banner';



const AuthorProfile = () => {


    const {username}=useParams();
    const {account}=useContext(DataContext);

  return (
    <div>
        {/* <Banner /> */}
      <Grid container>

        <Grid container item xs={12} sm={12} lg={12}>
          <Posts username={username}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default AuthorProfile