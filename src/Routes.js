import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import DocsLayout from './layout/Docs'

import { Introduction, Twilio, Firebase, Backend, Flutter } from './pages/getting-started'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/getting-started">
                    <DocsLayout>
                        <Route exact path="/getting-started" component={Introduction} />
                        <Route exact path="/getting-started/twilio" component={Twilio} />
                        <Route exact path="/getting-started/firebase" component={Firebase} />
                        <Route exact path="/getting-started/backend" component={Backend} />
                        <Route exact path="/getting-started/flutter" component={Flutter} />
                    </DocsLayout>
                </Route>
                <Route path="/backend">
                    <DocsLayout>
                    </DocsLayout>
                </Route>
                <Route path="/flutter">
                    <DocsLayout>
                    </DocsLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes