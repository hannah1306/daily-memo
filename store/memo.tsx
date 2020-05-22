export const SELECT_MEMOLIST = 'SELECT_MEMOLIST';
export const CREATE_MEMO = 'CREATE_MEMO';
export const UPDATE_MEMO = 'UPDATE_MEMO';
export const DELETE_MEMO = 'DELETE_MEMO';

export const CHECK_BOOKMARK = 'CHECK_BOOKMARK';
export const UNCHECK_BOOKMARK = 'UNCHECK_BOOKMARK';

const INITIAL_MEMO = {
  memoList: []
}

export default function reducer(state = INITIAL_MEMO, action: any){
  switch(action.type){

    case SELECT_MEMOLIST: {
      return {
        ...INITIAL_MEMO
      }
    }
    
    case CREATE_MEMO: {

    }

    case UPDATE_MEMO: {

    }

    case DELETE_MEMO: {

    }

    case CHECK_BOOKMARK: {

    }

    case UNCHECK_BOOKMARK: {

    }
  }
}