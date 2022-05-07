import TextInput from './components/forms/TextInput'
import PasswordInput from './components/forms/PasswordInput'

function App() {
  return (
   <>
    <TextInput label="Email" placeholder="Email" isRequired={true} errorMessage="Email is required!" />
    <PasswordInput label="Password" isRequired={true} errorMessage="Password is required!" />
   </>
  );
}

export default App;
