import * as Yup from "yup";

// ====== validateFormFeedback ======
export const validateFormFeedback = (values) => {
  const errors = {};
  if (values.description === "") {
    errors.description = "This field is required!";
  }
  return errors;
};

// ====== validationSchema ======
export const validationSchema = Yup.object({
  Part: Yup.string().required("Part is required"),
  Subcategory: Yup.string().required("Subcategory is required"),
  Subpart: Yup.string().required("Subpart is required"),
  Impact: Yup.string().required("Impact is required"),
});


// ====== validationSchemaLogin ======
export const validationSchemaLogin = (values) => {
  const errors = {};

  if (
    values.email.includes("@") === false ||
    values.email.includes(".") === false
  ) {
    errors.email = "Email not valid must be contain (@) and (.)";
  }

  if (values.password.length < 7 || values.password.length > 15) {
    errors.password = "Password must be form 7 characters to 15 characters";
  }

  return errors;
};

// ====== validationSchemaRegister ======
export const validationSchemaRegister = (values) => {
  const errors = {};
  if (values.name.length < 5) {
    errors.name = "Name must be form 5 characters";
  }

  if (
    values.email.includes("@") === false ||
    values.email.includes(".") === false
  ) {
    errors.email = "Email not valid must be contain (@) and (.)";
  }

  if (!values.phone.match(/^(02)?01[0125][0-9]{8}$/)) {
    errors.phone = "Phon not valid";
  }

  if (values.password.length < 7 || values.password.length > 15) {
    errors.password = "Password must be form 7 characters to 15 characters";
  }

  if (values.car.length < 3) {
    errors.car = "Type of car not valid";
  }
  return errors;
};




// ====== validationSchemaLocation ======
export const validationSchemaLocation = (values) => {
  const errors = {};
  if (!values.location.match(/^https:\/\/maps\b/)) {
    errors.location = "location not valid";
  }
  return errors;
};

