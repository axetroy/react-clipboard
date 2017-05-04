/**
 * Created by yan on 16-1-20.
 */
import React from 'react';
import ReactClipboard from '../../lib/react-clipboard';
import 'style!css!../../style.css';
import { render } from 'react-dom';

var element = document.createElement('div');
document.body.appendChild(element);
render(<ReactClipboard />, element);
