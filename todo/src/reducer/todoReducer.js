export default function todoReducer(todo, action){
    switch (action.type){
        case 'ADD':{
            const {title, time, id} = action;
            return [...todo, {title, time, id}]
        }
        case 'DELETE':{
            const { delList } = action;
            return todo.filter((l) => l.time !== delList)
        }
        case 'UPDATE':{
            const {editList, current} = action;
            return todo.map((i) => {
                if(i.time === editList){
                    return {...i, title: current}
                }
               return i;
        })
        }
        default: {
            throw Error(`알수없는 액션 타입니다: ${action.type}`)
        }

    }
};