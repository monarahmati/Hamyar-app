import { gql } from "@apollo/client"


const GET_BOOKS_SLIDER = gql`
query {
  beginners {
    slug
    bookname
    coverPhoto {
      id
      url
    }
    author
  }
}

`

export {GET_BOOKS_SLIDER};
