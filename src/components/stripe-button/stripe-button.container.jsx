import React from 'react';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import StripeButton from './stripe-button.component';

const GET_USER = gql`
    {
        currentUser @client,
    }
`;

const StripeButtonContainer = props => {
    const { data: { currentUser } } = useQuery( GET_USER );
    if( currentUser ){
        const { email, photoURL } = currentUser;
        return <StripeButton {...props}  userEmail={email} userImg={photoURL} />;
    }
    return <StripeButton {...props}  />;
}

export default StripeButtonContainer;