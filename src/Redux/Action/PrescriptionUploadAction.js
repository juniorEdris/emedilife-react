import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';

// user_id=14&name=jalal&images=
export const uploadPrescription = (user_id, name, image) => (dispatch) => {
  API()
    .post(
      `${ENDPOINTS.PRESCRIPTION_UPLOAD}user_id=${user_id}&name=${name}&images=${image}`
    )
    .then()
    .catch();
};
