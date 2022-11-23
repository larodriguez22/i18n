import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import getUserLocale from 'get-user-locale';

import JobsList from "./components/jobsList";

// ReactDOM.render(
//         <IntlProvider locale="en">
//                 <JobsList/>
//         </IntlProvider>, document.getElementById("root")
// );
const userLocale = getUserLocale();
const localeMessages = userLocale==="es-ES"?localeEsMessages:localeEnMessages;

ReactDOM.render(
        <IntlProvider locale={userLocale} messages={localeMessages} >
                <JobsList locale={userLocale} />
        </IntlProvider>, document.getElementById("root")
);