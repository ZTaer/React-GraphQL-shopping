import DIRE_GQL from './dire.query';
import DIRE_DATA from './dire.data';

const DireMutation = {
   getDireDataSections: ( _root, _args, { cache } ) =>{
        cache.writeQuery({
            query: DIRE_GQL.GET_DIRE_SECTIONS,
            data: { direSections: DIRE_DATA }
        });

        return DIRE_DATA;
   }, 
}

export default DireMutation;