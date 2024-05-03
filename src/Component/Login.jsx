import React from "react";

function Login() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="exampleInputEmail1"
                    >
                        Email address
                    </label>
                    <input
                        aria-describedby="emailHelp"
                        className="form-control"
                        id="exampleInputEmail1"
                        type="email"
                    />
                    <div
                        className="form-text"
                        id="emailHelp"
                    >
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="exampleInputPassword1"
                    >
                        Password
                    </label>
                    <input
                        className="form-control"
                        id="exampleInputPassword1"
                        type="password"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        className="form-check-input"
                        id="exampleCheck1"
                        type="checkbox"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                    >
                        Check me out
                    </label>
                </div>
                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Submit
                </button>
            </form>

        </>
    )
}

export default Login; 