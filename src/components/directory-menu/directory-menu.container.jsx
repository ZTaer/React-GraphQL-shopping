import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import DirectoryMenu from './directory-menu.component';

const GET_DIRE_DATA = gql`
    {
        direSections @client
    }
`;

const DirectoryMenuContainer = () => {
    const { data: { direSections } } = useQuery( GET_DIRE_DATA );    
    return(
        <DirectoryMenu sections={direSections} />
    );
}

export default DirectoryMenuContainer;