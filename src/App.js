import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';


export default App;

function App() {

  return (
     
      
    <div class="container">
      <header class="App-header">
      <h1 style={{ fontSize: 25}}>Haven't Found What</h1>
      <h1 style={{ fontSize: 25}}>You're Looking For?</h1>
           <form>
              <input type="text" maxlength="50" placeholder="Enter username.." />
              <button type="submit" class="w3-btn w3-margin-bottom">SEARCH</button>
            </form>
      </header>
       
            
            
            <div class="container-sm">
        <div class="row justify-content-center">
          <div class="col-6">
          
        </div>
      
      </div>
      
    <div class="w-100"></div>

        
      </div>
      <div class="container-sm">
        <div class="row justify-content-center">
          <div class="col-4"><Couses ></Couses></div>
          <div class="col-4"><Resourse ></Resourse></div>
          <div class="col-4"><About_Skillcruss ></About_Skillcruss></div> 
          
        </div>
        <div><P></P></div>
      </div>

    </div>
    
  );
}


function Couses() {
  return (
    <div> 
      <h3  style={{ fontSize: 15}}>COURSES</h3>
      <p style={{ fontSize: 12}}>Meet with an Enrollment Couselor</p>
      <p style={{ fontSize: 12}}>View All Courses</p>
      <p style={{ fontSize: 12}}>FREE Coding Camp</p>
      <p style={{ fontSize: 12}}>Break Into Tech job Training Program</p>
      <p style={{ fontSize: 12}}>front End + React JS</p>
      <p style={{ fontSize: 12}}>Front End Development</p>
      <p style={{ fontSize: 12}}>Python for Web Apps & Data</p>
      <p style={{ fontSize: 12}}>User Experience(UX)</p>
      <p style={{ fontSize: 12}}>Visual Design</p>
      <p style={{ fontSize: 12}}>Tution Options</p>
    
    </div>
    
  );
}

function Resourse() {
  return (
    <div> 
      <h1 style={{ fontSize: 15}}>RESOURSE</h1>
    <p style={{ fontSize: 12}}>NEW! The Get Hired Track</p>
    <p style={{ fontSize: 12}}>Career Coatching for Skillcrush Students: Here's How It Works</p>
    <p style={{ fontSize: 12}}>100+ Ways to Learn to Code for Free</p>
    <p style={{ fontSize: 12}}>11 High-Paying Entry-Level Tech jobs--No Experience Required</p>
    <p style={{ fontSize: 12}}>How to Decide Between Being a Web Developer </p>
    <p style={{ fontSize: 12}}>The 15 Essential Front End Developer Skills</p>
    <p style={{ fontSize: 12}}>9 Skills Every Successful Web Designer Needs</p>
    </div>
    
  );
}

function About_Skillcruss() {
  return (
    <div> 
      <h1 style={{ fontSize: 15}}>ABOUT SKILLCRUSS</h1>
      <p style={{ fontSize: 12}}>We're on a mission to support to support our students-especially those mariginallized by gender, race, and/for age-to learn in-demand tech skills and land higher paying and more fulfilling jobs.</p>
      <p style={{ fontSize: 12}}>About The Team</p>
      <p style={{ fontSize: 12}}>Blog</p>
      <p style={{ fontSize: 12}}>Anti-Racism Statement</p>
      <p style={{ fontSize: 12}}>Community Guidelines</p>
      <p style={{ fontSize: 12}}>Jobs</p>
      <p style={{ fontSize: 12}}>Sign In</p>
    </div>
    
  );
}


function P() {

  return (
    <div class= "container">

      <div class="row justify-content-end">
        <div class="col-1"><Twitter /></div>
        <div class="col-1"><Facebook   /></div>
        <div class="col-1"><Linkedin  /></div>
        <div class="col-1"><Instagram  /></div>
      </div>
      <h>Nedd Help? check out the <a href="FAQs" >FaQs</a>, email us as at <a href=" hello@skillcrush.com">hello@skillcrush.com</a>, text us at (808) 865-7552, or set up a time to meet with an<a href=" enrollment counselor"> enrollment counselor</a>!</h>
    </div> 
  );
}




