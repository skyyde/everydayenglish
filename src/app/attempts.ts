import {db} from './db';
export interface Attempt {id:string;first:Record<string,number>;selected:Record<string,number>;tries:Record<string,number>;submitted:boolean}
export function emptyAttempt(id:string):Attempt{return {id,first:{},selected:{},tries:{},submitted:false}}
export async function answerQuestion(id:string,questionId:string,choice:number){await db.transaction('rw',db.table('exerciseAttempts'),async()=>{const store=db.table('exerciseAttempts');const state:Attempt=(await store.get(id))||emptyAttempt(id);if(state.submitted)return;await store.put({...state,first:questionId in state.first?state.first:{...state.first,[questionId]:choice},selected:{...state.selected,[questionId]:choice},tries:{...state.tries,[questionId]:(state.tries[questionId]||0)+1}})})}
export async function resetAttempt(id:string){await db.table('exerciseAttempts').delete(id)}
