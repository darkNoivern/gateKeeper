import questions from "../data/questions";

const InitialOBJ = {
    currentUser: -1,  
    chatData: [],
    //  text:
    //  user:  
    userDetails: [],
    //  username:
    //  password:
    //  questionDetails:     
};

let InitialState;
if(localStorage.getItem("userDetails") === null){
    InitialState = InitialOBJ;
}
else{
    InitialState = JSON.parse(localStorage.getItem("userDetails"))
}
// if(localStorage.getItem("userDetails") !== null)

console.log(InitialState)


const rootReducer = (state = InitialState, action) => {
    switch(action.type){
        case 'ANSWER':
            let ansState = state;
            ansState.userDetails[state.currentUser].questionDetails[action.payload.questionId].answer = action.payload.optionSelected;
            ansState.userDetails[state.currentUser].questionDetails[action.payload.questionId].verdict = action.payload.verdict;
            console.log(state)
            state = ansState;
            console.log('currentUser',state.currentUser)
            console.log('questionId',action.payload.questionId)
            console.log(state)
            localStorage.setItem("userDetails", JSON.stringify(state));  
            return state;
        case 'CHAT':
            let newState = state;
            let chatSnippet = {
                chatText: action.payload.text,
                chatUser: action.payload.user,
                chatTime: action.payload.time,
                chatDate: action.payload.date,
            }
            newState.chatData.push(chatSnippet);
            state = newState;
            console.log(state)
            localStorage.setItem("userDetails", JSON.stringify(state));  
            return state;
        case 'SIGN_UP':
            console.log(state)
            let newUser = {
                username: action.payload.username,
                password: action.payload.password,
                questionDetails: [],
            }
            questions.forEach(()=>{
                let unanswered = {
                    answer: 'unanswered',
                    verdict: 'unanswered'
                }
                newUser.questionDetails.push(unanswered)
            })
            let idUser = state.userDetails.length;
            state.userDetails.push(newUser)
            state.currentUser = idUser
            console.log(state)
            localStorage.setItem("userDetails", JSON.stringify(state));
            return state;
        case 'SIGN_IN':
            state.userDetails.forEach((user,index)=>{
                if(user.username === action.payload){
                    console.log(user.username)
                    console.log('index', index)
                    state.currentUser = index;
                }
            })
            localStorage.setItem("userDetails", JSON.stringify(state));
            return state;
        case 'LOGOUT':
            state.currentUser = -1;
            localStorage.setItem("userDetails", JSON.stringify(state));
            return state;
        default: return state;
    }
}

export default rootReducer