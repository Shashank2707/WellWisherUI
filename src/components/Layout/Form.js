import * as React from 'react';
import '../../styles/form.css'
import './Logic'
import TextField from '@mui/material/TextField';
// import ScriptTag from 'react-script-tag';
import {isCustom,checkRequiredFields} from './Logic'

function FormModal() {
    let lastSelectedNode;
    function inputFocus(e){
        if(lastSelectedNode){
            lastSelectedNode.classList.remove("is-focused")
        }
        const selectedNode = e.target.parentNode;
        selectedNode.classList.add("is-focused")
        lastSelectedNode = selectedNode;
    }
    return (
        <>
            <div className="background" >

                <div className="boxed">
                    <div className="logo row"><span>Well Wisher</span></div>
                    <div className="info row"><span>Enter your details</span></div>
                    <form action="#">
                        <div className="formdiv">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label row inputfiled">
                                <input className="mdl-textfield__input" type="text" id="name" autoComplete="name" onFocus={inputFocus}/>
                                <label className="mdl-textfield__label" htmlFor="name">Name</label>
                                <span className="mdl-textfield__error">Invalid name!</span>
                            </div>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label row inputfiled">
                                <input className="mdl-textfield__input" type="text" id="email" autoComplete="email" onFocus={inputFocus} />
                                <label className="mdl-textfield__label" htmlFor="email">Email</label>
                                <span className="mdl-textfield__error">Invalid email</span>
                            </div>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label row inputfiled">
                                <select className="mdl-textfield__input" id="occasion" name="occasion" onChange={isCustom} onFocus={inputFocus}>
                                    <option value></option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="other">Other</option>
                                </select>
                                <label className="mdl-textfield__label" htmlFor="occasion">Occasion</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label row inputfiled customOccasion" id='customDiv'>
                                <input className="mdl-textfield__input" type="text" id="custom" onFocus={inputFocus}/>
                                <label className="mdl-textfield__label" htmlFor="custom">Custom</label>
                            </div>
                            <div className="datediv row">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label datefamily">
                                    <select className="mdl-textfield__input" id="month" name="month" onFocus={inputFocus}>
                                        <option value></option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                    <label className="mdl-textfield__label" htmlFor="month">Month</label>
                                </div>

                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label datefamily">
                                    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="day" onFocus={inputFocus}/>
                                    <label className="mdl-textfield__label" htmlFor="day">Day</label>
                                    <span className="mdl-textfield__error">Invalid day!</span>
                                </div>

                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label datefamily">
                                    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="year" onFocus={inputFocus}/>
                                    <label className="mdl-textfield__label" htmlFor="year">Year</label>
                                    <span className="mdl-textfield__error">Invalid Year!</span>
                                </div>

                            </div>

                            <div className="row submit">
                                <button type="button" onClick={checkRequiredFields}
                                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored load"
                                    id="submit">
                                    Submit
                                </button>
                                {/* <div className="mdl-spinner mdl-js-spinner is-active load" id="spinner"></div> */}
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default FormModal