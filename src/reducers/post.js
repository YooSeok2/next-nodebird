export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '김유석'
        },
        content: '첫번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://home.bigstock.kr/wp-content/uploads/2022/02/이미지.jpg'
        }, {
            src: 'https://home.bigstock.kr/wp-content/uploads/2022/02/네이버포스트큰손투자.jpg'
        }, {
            src: 'https://home.bigstock.kr/wp-content/uploads/2022/02/2038883233_20211026143539_3332636700.jpg'
        }],
        Comment: [{
            User: {
                nickname: 'nero'
            },
            content: '개정판이 나왔군요~'
        },
        {
            User: {
                nickname: 'hero'
            },
            content: '얼른 사고싶어요~'
        }],
        createdAt: {}
    }],
    imagePaths: [],
    postAdded: false
};

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST
};

const dummyPosts = {
    id: 2,
    content: '더미네이터입니다.',
    User: {
        id: 1,
        nickname: '제로초'
    },
    Images: [],
    Comment: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST:
        return {
            ...state,
            mainPosts: [dummyPosts, ...state.mainPosts],
            postAdded: true
        };
    default:
        return state;
    }
};

export default reducer;