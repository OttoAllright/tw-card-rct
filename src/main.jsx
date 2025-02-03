import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './tw-follow-Card';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<Card profileimg='data:image/jpeg;base64,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'
userName='cristiano'>Cristiano Ronaldo</Card>
<Card profileimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVI_rKTQkW3-OcL-iv9nuQU3nkoury7t_m2A&s'
userName='theweeknd'>Abel</Card>
<Card/>
</>
)



