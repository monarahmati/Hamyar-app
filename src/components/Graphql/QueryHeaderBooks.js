import { gql } from "@apollo/client";


const GET_IMAGE_HEADER = gql`
query{
  headerbookpages {
    slug
    coverPhoto {
    url
    }
  }
}
`



export {GET_IMAGE_HEADER };