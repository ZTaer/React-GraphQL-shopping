import { gql } from 'apollo-boost';

export const userData = {
    currentUser: null,
}

const USER_GQL = {

    GET_USER: gql`
        {
            currentUser @client,
        }
    `,

}

export default USER_GQL;
