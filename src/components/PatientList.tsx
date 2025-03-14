import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

export default function PatientList() {
     const patients = usePatientStore(state => state.patients)

     console.log(patients)
     return (
          <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-auto">
               {patients.length ? (
                    <>
                         <div className="font-black text-3xl text-center">
                              Listado Pacientes
                         </div>
                         <p className="text-xl mt-5 mb-10 text-center">
                              Administra los pacientes {''}
                              <span className="text-indigo-600 font-bold">Pacientes y citas
                              </span>
                         </p>

                         {patients.map( patient => (
                              <PatientDetails
                                   key={patient.id}
                                   patient={patient}
                              />
                         ))}
                    </>
               ) : (
                    <>
                         <h2 className="font-black text-3xl text-center">no hay pacientes</h2>
                         <p className="text-xl mt-5 mb-10 text-center">
                              Comienza agregando pacientes {''}
                              <span className="text-indigo-600 font-bold">y apareceran en este lugar
                              </span>
                         </p>
                    </>
               )}
          </div>
     )
}
