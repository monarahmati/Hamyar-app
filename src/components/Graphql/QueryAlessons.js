import {gql} from '@apollo/client';


const GET_LESSONS_INFO = gql `
query{
  a1Lessons {
    coverPhoto {
      id
      url
    }
    field
    id
    lesson
    slug
  }
}

`;

export  {GET_LESSONS_INFO};