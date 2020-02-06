// 진료예약 확인

// [
//   {
//     "hospital": {
//       "address": "string",
//       "cityCode": "string",
//       "cityCodeName": "string",
//       "doctorCount": 0,
//       "generalDoctorCount": 0,
//       "hospitalCode": "string",
//       "hospitalCodeName": "string",
//       "hospitalComment": [
//         {
//           "comment": "string",
//           "id": 0,
//           "member": {
//             "address": "string",
//             "birth": "string",
//             "email": "string",
//             "fcmToken": "string",
//             "hospitalComments": [
//               null
//             ],
//             "id": 0,
//             "name": "string",
//             "password": "string",
//             "pharmacyComment": [
//               {
//                 "comment": "string",
//                 "id": 0,
//                 "pharmacy": {
//                   "address": "string",
//                   "cityCode": "string",
//                   "cityCodeName": "string",
//                   "id": 0,
//                   "localName": "string",
//                   "name": "string",
//                   "openDate": "string",
//                   "pharmacyCode": "string",
//                   "pharmacyCodeName": "string",
//                   "pharmacyComment": [
//                     null
//                   ],
//                   "postNo": "string",
//                   "stateCode": "string",
//                   "stateCodeName": "string",
//                   "tel": "string",
//                   "xpos": "string",
//                   "ypos": "string"
//                 },
//                 "score": 0
//               }
//             ],
//             "phone": "string",
//             "sex": "string"
//           },
//           "score": 0
//         }
//       ],
//       "hospitalUrl": "string",
//       "id": 0,
//       "internCount": 0,
// ----------------------------      "name": "string",
//       "openDate": "string",
//       "postNo": "string",
//       "residentCount": 0,
//       "specialDoctorCount": 0,
//       "stateCode": "string",
//       "tel": "string",
//       "xpos": "string",
//       "ypos": "string"
//     },
//     "id": 0,
// ----------------------------    "reserveDate": "yyyy-MM-dd HH:mm",
// ----------------------------    "reserveTime": "string",
//     "symptom": "string"
//   }
// ]

import React from "react";

const AppointmentCheck = () => {
  const [name, setName] = null;

  //   try {
  //     const response = await Axios.get(
  //       "/medicalHelper/reservation",
  //       {
  //         email,
  //         password,
  //         name,
  //         birth,
  //         phone,
  //         address,
  //         sex
  //       },
  //       {
  //         headers: {
  //           "Content-type": "application/json"
  //         }
  //       }
  //     );
  //     console.log("2");
  //     console.log(response);
  //   } catch (error) {
  //     alert(error);
  //     console.log(error);
  //   }

  // };

  return <div>진료예약확인</div>;
};

export default AppointmentCheck;
