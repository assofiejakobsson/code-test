const Login = ({handleSubmit, email, setEmail, password, setPassword}) => {
    return (
     <form onSubmit={handleSubmit} className="mt-3">
         <div className="form-group-mb-3">
             <lable className="form-lable">Email</lable>
             <input
             type="email"
             className="form-control"
             placeholder="Enter email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
         </div>

         <div className="form-group-mb-3">
         <lable className="form-lable">Password</lable>
         <input
             type="password"
             className="form-control"
             placeholder="Enter password"
             value={email}
             onChange={(e) => setPassword(e.target.value)}
             />
         </div>
         <button disabled={!email || !password} className="btn btn-primary">
             Log in
         </button>
     </form>
    );
  };
  //set funktonaliti if you want it to woork
  export default Login;