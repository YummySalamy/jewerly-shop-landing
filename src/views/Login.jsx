import AuthLayout from "../layouts/AuthLayout";
import AuthLogin from "../components/auth/AuthLogin";

const Login = () => {
    return (
        <AuthLayout>
            <AuthLogin />
        </AuthLayout>
    );
}

export default Login;