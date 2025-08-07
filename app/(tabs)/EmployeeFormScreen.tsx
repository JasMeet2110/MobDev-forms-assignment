import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const EmployeeSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  position: Yup.string().required('Required'),
  department: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
});

export default function EmployeeFormScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Information</Text>

      <Formik
        initialValues={{
          name: '',
          email: '',
          position: '',
          department: '',
          phone: '',
        }}
        validationSchema={EmployeeSchema}
        onSubmit={(values) => {
          Alert.alert('Form Submitted!', `Name: ${values.name}\nEmail: ${values.email}\nPosition: ${values.position}\nDepartment: ${values.department}\nPhone: ${values.phone}`);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            {Object.keys(values).map((field) => (
              <View key={field} style={styles.inputWrapper}>
                <TextInput
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  style={styles.input}
                  onChangeText={handleChange(field)}
                  onBlur={handleBlur(field)}
                  value={(values as any)[field]}
                />
                {touched[field as keyof typeof touched] &&
                  errors[field as keyof typeof errors] && (
                    <Text style={styles.error}>
                      {errors[field as keyof typeof errors]}
                    </Text>
                  )}
              </View>
            ))}

            <Button title="Submit" onPress={handleSubmit as any} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  inputWrapper: { marginBottom: 15 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5 },
  error: { color: 'red', fontSize: 12 },
});