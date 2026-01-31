export const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL;
export const HYGRAPH_PERMANENTAUTH_TOKEN = process.env.NEXT_PUBLIC_HYGRAPH_PERMANENTAUTH_TOKEN;

export const GRAPHQL_QUERY = `query getNextUserByEmail($email:String!){
  nextUser(where:{email:$email}){
    firstname
    lastname
    email
    posts {
      title
    }
  }
}`;
