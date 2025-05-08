import {create} from 'zustand';
import { groupNumber, INITIAL_EVENTS, userData, boardData } from '../data/Data';


const useCalender=create((set)=>({
    currentEvents:INITIAL_EVENTS,
    setCurrentEvents:(events)=>set({curentEvents:events})
}))

export default useCalender
