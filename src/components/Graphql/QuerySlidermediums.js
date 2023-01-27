import {gql } from '@apollo/client'


const GET_SLIDER_MEDIUMS = gql`
query{
  mediums {
    author
    bookname
    slug
    coverPhoto {
      id
      url
    }
  }
}


`;

export {GET_SLIDER_MEDIUMS};
