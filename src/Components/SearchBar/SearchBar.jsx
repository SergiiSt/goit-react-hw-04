import { Formik, Field, Form } from 'formik';
export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ query: ''}}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
