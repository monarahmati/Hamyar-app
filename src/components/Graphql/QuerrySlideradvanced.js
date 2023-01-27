import {gql} from '@apollo/client'


const GET_SLIDER_ADVANCED = gql`
query {
  advancedlevels {
    id
    slug
    bookname
    author
    coverPhoto {
      id
      url
    }
  }
}


`;


export {GET_SLIDER_ADVANCED}