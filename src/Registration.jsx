import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [name, NameChange] = useState("");
  const [number, NumberChange] = useState("");
  const [email, EmailChange] = useState("");
  const [pancard, PancardChange] = useState("");
  const [loan, LoanChange] = useState("Select");
  const [amount, AmountChange] = useState("");

  const navigate = useNavigate();
  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";

    if (name === null || name === "") {
      isproceed = false;
      errormessage += "Name";
    } else if (number === null || number === "") {
      isproceed = false;
      errormessage += "Number";
    } else if (email === null || email === "") {
      isproceed = false;
      errormessage += "Email";
    } else if (pancard === null || pancard === "") {
      isproceed = false;
      errormessage += "Pancard No.";
    } else if (loan === null || loan === "") {
      isproceed = false;
      errormessage += "Loan";
    } else if (amount === null || amount === "") {
      isproceed = false;
      errormessage += "Loan Amount";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    }

    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (IsValidate()) {
      navigate("/Dashboard");
      toast.success("Registered Successfully");
    }
  };

  const handleOnlick1 = (e) => {
    e.preventDefault();
    toast.success("Pay succesfully");
  };

  return (
    <div className="offset-lg-3 col-lg-6 xyz">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <center>
              <h1>User Registeration</h1>
            </center>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    {" "}
                    Name <span className="errmsg">*</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => NameChange(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    {" "}
                    Phone No. <span className="errmsg">*</span>
                  </label>
                  <input
                    value={number}
                    onChange={(e) => NumberChange(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    {" "}
                    Email <span className="errmsg">*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => EmailChange(e.target.value)}
                    type="email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    {" "}
                    Pan No.<span className="errmsg">*</span>
                  </label>
                  <input
                    value={pancard}
                    onChange={(e) => PancardChange(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Types of Loan<span className="errmsg">*</span>
                  </label>
                  <select
                    value={loan}
                    onChange={(e) => LoanChange(e.target.value)}
                    className="form-control"
                  >
                    <option value="Select">Select</option>
                    <option value="Bank Credit Facilitation Scheme">
                      Bank Credit Facilitation Scheme
                    </option>
                    <option value="Instant business loan">
                      Instant business loan
                    </option>
                    <option value="Mudra loan">Mudra loan</option>
                    <option value="Crowdfunding">Crowdfunding</option>
                    <option value="Business loan in Mumbai">
                      Business loan in Mumbai
                    </option>
                    <option value="Term loan">Term loan</option>
                    <option value="NABARD">NABARD</option>
                    <option value="Letter of credit">Letter of credit</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <label>
                    Loan Amount<span className="errmsg">*</span>
                  </label>
                  <input
                    value={amount}
                    onChange={(e) => AmountChange(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <center>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </center>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
