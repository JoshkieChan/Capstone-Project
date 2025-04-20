import '@testing-library/jest-dom';
import React from 'react';

// Mock router components
global.Routes = ({ children }) => <div>{children}</div>;
global.Route = ({ element }) => element;
global.useNavigate = () => jest.fn();