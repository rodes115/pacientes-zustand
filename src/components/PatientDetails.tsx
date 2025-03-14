import PatientDetailItem from "./PatientDetailItem"
import { Patient } from "../types"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
     patient: Patient

}

export default function PatientDetails({ patient }: PatientDetailsProps) {

     const deletePatientz = usePatientStore(state => state.deletePatient)

     return (
          <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
               <PatientDetailItem
                    label={'ID'}
                    data={patient.id}
               />
               <PatientDetailItem
                    label={'Nombre'}
                    data={patient.name}
               />
               <PatientDetailItem
                    label={'Propietario'}
                    data={patient.caretaker}
               />
               <PatientDetailItem
                    label={'Email'}
                    data={patient.email}
               />
               <PatientDetailItem
                    label={'Facha Alta'}
                    data={patient.date.toString()}
               />
               <PatientDetailItem
                    label={'Sintomas'}
                    data={patient.symptoms}
               />

               <div className="flex justify-between m-10">
                    <button
                         type="button"
                         className="py-2 px-10 bg-indigo-600 hover: bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    >
                         Editar
                    </button>
                    <button
                         type="button"
                         className="py-2 px-10 bg-red-600 hover: bg-red-700 text-white font-bold uppercase rounded-lg"
                         onClick={()=> deletePatientz(patient.id)}
                    >
                         Eliminar
                    </button>
               </div>
          </div>
     )

}
