import React from 'react'
import axios from 'axios'

type Props = {}

const API_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = 'live_zUxTCFSx6UWrMoLt7KXI4jbew4Ob6EiNKcXaVzuM1qFB5NVlDHCiF1GpEgCRisbD';

export const fetchCats = async (props: Props) => {
  const response = await axios.get(API_URL, {
    headers: {
      'x-api-key': API_KEY
    }
  });
  console.log(response.data)
  return response.data; // use slice to get the first 20 breeds
}