import logo from './logo.svg';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
function App() {
  return (
   <div>
   <GoogleOAuthProvider clientId="742252403958-odjbfog3o3j18gpp5bc95udqt0i2k9dg.apps.googleusercontent.com">
   <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    const decoded = jwtDecode(credentialResponse.credential);
console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </GoogleOAuthProvider>;

    </div>
  );
}

export default App;
