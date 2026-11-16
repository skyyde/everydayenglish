import {manilaDate} from './data';
import {scheduleWordReviews} from './progress';
import Dexie,{type Table} from 'dexie';
export interface Settings {id:'profile';nickname:string;language:'taglish'|'en'|'fil';launchDate:string;onboarded:boolean}
export interface DailyProgress {id:string;word:boolean;phrase:boolean;speaking:boolean;completedOn?:string}
export class AppDatabase extends Dexie {settings!:Table<Settings,string>;dailyProgress!:Table<DailyProgress,string>;constructor(){super('everyday-english');this.version(1).stores({settings:'id',dailyProgress:'id',exerciseAttempts:'id',grammarProgress:'id',placementResults:'++id',savedVocabulary:'id',reviewSchedule:'id',speakingSessions:'++id,lessonId',recordings:'++id,lessonId',achievements:'id',appMetadata:'id'});}}
export const db=new AppDatabase();
export const defaults:Settings={id:'profile',nickname:'Dada',language:'taglish',launchDate:'',onboarded:false};
export async function completeActivity(id:string,activity:'word'|'phrase'|'speaking'){await db.transaction('rw',[db.dailyProgress,db.table('reviewSchedule')],async()=>{const old=await db.dailyProgress.get(id);const next={...{id,word:false,phrase:false,speaking:false},...old,[activity]:true};if(next.word&&next.phrase&&next.speaking&&!next.completedOn)next.completedOn=manilaDate();await db.dailyProgress.put(next);if(activity==='word'&&!old?.word)await scheduleWordReviews(id);});}
export async function recordSpeakingAttempt(lessonId:string,mode:'written'|'recorded'){await db.table('speakingSessions').add({lessonId,mode,createdAt:new Date().toISOString()});}
