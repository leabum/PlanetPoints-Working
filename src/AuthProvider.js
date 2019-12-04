import React, { Component } from "react";
import AuthContext from "./AuthContext";

// Then create a provider Component to update children Components once the user role changes
class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      role: "none" //roles: none, admin, kursleiter
    };
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          state: this.state,
          isAuthenticated: () => {
            if (this.state.role == "kursleiter" || this.state.role == "admin") {
              return true;
            }
            return false;
          },
          setRole: newRole =>
            this.setState({
              role: newRole
            })
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
