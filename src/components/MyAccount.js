import React from "react";
import "./styles/MyAccount.css";

function MyAccount() {
  return (
    <div className="myAccountOverallContainer">
      <div className="myAccountContainer">
        <h1 className="accountHeader">Account information</h1>
        <div className="sectionContainer">
          <div className="sectionHeader">Personal</div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="Users Name"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="Date Of Birth"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="existing email address"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="sectionContainer">
          <div className="sectionHeader">Address and Contact</div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="existing Country"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="existing State"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="existing City"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="existing ZIP / Postal Code"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="existing Street Address"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
          <div className="accountDiv">
            <input
              className="accountInput"
              type="text"
              name="search-term"
              placeholder="users existing mobile phone number:"
            ></input>
            <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>

          <div className="sectionContainer">
            <div className="sectionHeader">Change Password</div>

            <div className="accountDiv">
              <input
                className="accountInput"
                type="text"
                name="search-term"
                placeholder="Enter Existing Password"
              ></input>
              <button>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </div>
            <div className="accountDiv">
              <input
                className="accountInput"
                type="text"
                name="search-term"
                placeholder="Enter New Password"
              ></input>
              <button>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </div>
            <div className="accountDiv">
              <input
                className="accountInput"
                type="text"
                name="search-term"
                placeholder="Retype New Passwooord"
              ></input>
              <button>
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="submitChangesDiv">
          <button className="searchButton">
            <i class="myAccountSubmitButton" aria-hidden="true">
              submit
            </i>
          </button>
        </div>
      </div>
      <div className="advertisingDiv">
        <div className="advertisingOrderDiv">
          <h1> Suggested Watches For "First Name"... </h1>
          <div className="suggestedWatchDiv">
            <div className="firstSuggestedWatch">
              <img src="https://www.transparentpng.com/thumb/watch/ZQrd0O-classic-watch-png-pictures.png"></img>
              <h3> $1349.99 </h3>
              <button> Add to Cart </button>
            </div>
            <div className="secondSuggestedWatch">
              <img src="https://cdn.picpng.com/watches/pattern-watches-38668.png"></img>
              <h3> $1349.99 </h3>
              <button> Add to Cart </button>
            </div>
            <div className="thirdSuggestedWatch">
              <img src="https://purepng.com/public/uploads/large/apple-watch-pcq.png"></img>
              <h3> $1349.99 </h3>
              <button> Add to Cart </button>
            </div>
          </div>
        </div>
        <div className="rewardsAccountDiv">
          <h1> Join Our Rewards Program Today!</h1>
          <div className="rewardImagesDiv">
            <div className="rewardImageDiv">
              <img src="https://1u2hpqhlkupmzpfj3vcrb5jw-wpengine.netdna-ssl.com/wp-content/uploads/2021/12/BNPL-Section-1-CC.png"></img>
            </div>
            <div className="rewardTextDiv">
              <h3>
                Get 10% off of your first purchase when you sign up for our
                rewards
              </h3>
              <button> Sign Up Today! </button>
            </div>
          </div>
          <div className="rewardReturnDiv">
            <button href="http://localhost:3000/home">
              Contact Customer Support 1-800-345-6789{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
