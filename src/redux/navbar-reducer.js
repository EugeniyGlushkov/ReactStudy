let initialState = {
    friends_bar: [
        {
            id: 2,
            name: 'Andrew',
            avatarUrl: 'https://едавпоход.рф/wp-content/uploads/2018/05/man.png'
        },
        {
            id: 3,
            name: 'Sveta',
            avatarUrl: 'https://fotograf-kuchin.ru/wp-content/uploads/2017/06/people.png'
        },
        {
            id: 4,
            name: 'Sasha',
            avatarUrl: 'https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-9.png'
        },
    ],
};

const navbarReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    return stateCopy;
};

export default navbarReducer;