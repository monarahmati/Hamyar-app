import { gql } from "@apollo/client";

const GET_PLAN_QUERY = gql`

query{
  plans {
    id
    imageplan {
      url
    }
  }
}


`;

export {GET_PLAN_QUERY};