import USER_GQL from './user.query';

const UserMutation = {
    changeCurrentUser: ( _root, { user }, { cache } )=>{
        cache.writeQuery({
            query: USER_GQL.GET_USER,
            data: { currentUser: user }
        });
        return user;
    },
    clearCurrentUser: ( _root, _args, {cache} )=>{
        cache.writeQuery({
            query: USER_GQL.GET_USER,
            data: { currentUser: null }
        });
        return null;
    },
}

export default UserMutation;