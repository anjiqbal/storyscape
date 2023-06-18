import React from 'react'
import ReactDOM from 'react-dom/client';

import App from '../src/components/App/App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/login.jsx';
import SignUp from './components/signUp/signUp.jsx';
import UploadForm from './components/uploadForm/uploadForm.jsx';
import StoryCollection from './components/storyCollection/storyCollection.jsx';
import Story from './components/storyCollection/story/story.jsx';
import AboutUs from './components/aboutUs/aboutUs.jsx';
import ProfileOwn from './components/userProfile/profileOwn.jsx';
import ProfileOther from './components/userProfileOther/profileOther.jsx';
import Discover from './components/discover/discover.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="uploadForm" element={<UploadForm />} />
        <Route path="storyCollection" element={<StoryCollection />} />
        <Route path="story" element={<Story />} />
        <Route path="aboutUs" element={<AboutUs/>} />
        <Route path="profile" element={<ProfileOwn/>} />
        <Route path="profileOther" element={<ProfileOther/>} />
        <Route path="discover" element={<Discover/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

