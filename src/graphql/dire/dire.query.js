import { gql } from 'apollo-boost';

export const direData = {
    direSections: [],
}

const DIRE_GQL = {
    GET_DIRE_SECTIONS: gql`
        {
            direSections @client
        }
    `,
}

export default DIRE_GQL;