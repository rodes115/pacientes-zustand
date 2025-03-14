import { create} from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from './types'

type PatientState = {
     patients: Patient[],
     addPatient: (data:DraftPatient) => void
     deletePatient: (id:Patient['id']) => void
}

const createPatient =  (patient:DraftPatient) : Patient => {
     return {...patient, id: uuidv4() }
}

export const  usePatientStore =  create<PatientState>((set) => ({
          patients:[],
          addPatient: (data) => {
               const newPatient = createPatient(data)
               set((state)=>({
                    patients: [...state.patients,newPatient]
               }))
          },
          deletePatient: (id : Patient['id']) => {
               set((state)=>({
                    patients: state.patients.filter(patient => patient.id !== id)
               }))
          }
}))