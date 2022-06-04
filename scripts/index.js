// Global variables
let lastContactClicked = document.querySelector('#contacts');

// All DOM elements
const nav_newGroup = document.querySelector('#new_group_option');
const nav_newContact = document.querySelector('#new_contact_option');
const slidePanel_closeButton = document.querySelector('.slider_close_button');
const nav_contactsList = document.querySelector('#contact_list');
const humburger_button = document.querySelector('#hamburger_menu');
const nav_menu = document.querySelector('.menu');
const contacts_panel = document.querySelector('#contacts_panel');
const contacts_section = document.querySelector('#contacts');
const chat_panel = document.querySelector('#chat_panel');
const selected_profileImg = document.querySelector('#selected_profile_image');
const selected_profileName = document.querySelector('#selected_profile_name');



//EVENTS - MENU BUTTONS ACTIONS
const show_slidePanel = function(title) {

    const slide_panel = document.querySelector(".slider_panel");
    const slide_panel_title = document.querySelector(".slider_panel h1");
    slide_panel_title.innerText = title;
    slide_panel.classList.add("visible_slider");

    if(window.innerWidth < 1040){
        humburger_button.classList.toggle("active");
        nav_menu.classList.toggle("active");
    }

};

nav_newGroup.addEventListener("click", () => show_slidePanel("Add a new Group"));
nav_newContact.addEventListener("click", () => show_slidePanel("Add a new Contact"));

// Show contacts panel and hide chat panel if you click the "Contacts List" option
nav_contactsList.addEventListener("click", function() {

    contacts_panel.classList.toggle("show_element");
    chat_panel.classList.toggle("hidden_element");
    humburger_button.classList.toggle("active");
    nav_menu.classList.toggle("active");  

});


// Show both contact and chat panels after the window is a certain size
window.onresize = function(){

    if(window.innerWidth > 1040){

        const contacts_panel = document.querySelector('#contacts_panel');
        const chat_panel = document.querySelector('#chat_panel');
        contacts_panel.classList.remove("show_element");
        chat_panel.classList.remove("hidden_element");
        selected_profileImg.src = "resources/profile2.webp";
        selected_profileName.textContent = "Freya Miller";
    }

    if(window.innerWidth < 1040 && lastContactClicked){
        let profileImage = lastContactClicked.querySelector("img");
        let profileName = lastContactClicked.querySelector("label");
        selected_profileImg.src = profileImage.src;
        selected_profileName.textContent = profileName.textContent;
    }
};

// Close slide panel
slidePanel_closeButton.addEventListener("click", function() {

    const slide_panel = document.querySelector(".slider_panel");
    const slide_panel_input = document.querySelector("#slider_content_contactName");
    slide_panel_input.value = "";
    slide_panel.classList.remove("visible_slider");

});


//Humburger menu action
humburger_button.addEventListener("click", () => {

    humburger_button.classList.toggle("active");
    nav_menu.classList.toggle("active");

});


//Scroll to the bottom - replace with infinit scrolling
function scrollToBottom(element) {
    element.scroll({ top: element.scrollHeight, behavior: 'smooth' });
}

scrollToBottom(document.querySelector("#chat_panel"));


function AddNewContact(profileName, profileImagePath, description){
    //Creating a new DOM elements
    const newContact = document.createElement("div");
    const profilePictureContainer = document.createElement("div");
    const profilePicture = document.createElement("img");
    const profilePictureLabel = document.createElement("label");

    //Adding styles
    newContact.classList.add("contact");
    profilePictureContainer.classList.add("profile_picture_background");
    profilePicture.classList.add("profile_picture");
    profilePictureLabel.classList.add("profile_name");

    //Adding Content
    profilePicture.src = profileImagePath;
    profilePicture.alt = description
    profilePictureLabel.innerText = profileName

    //Stack html elements
    newContact.append(profilePictureContainer, profilePictureLabel);
    profilePictureContainer.appendChild(profilePicture);
    contacts_section.appendChild(newContact);
}  

AddNewContact("Lewis Carroll", "resources/kitty.webp", "Contact Profile Image");

//Select one of the contacts and change the profile image if the screen is a certain size
contacts_section.addEventListener("click", function(e) {

    if (e.target.nodeName === "DIV"){
        lastContactClicked.style.backgroundColor = "#111B21";
        lastContactClicked = e.target;
        e.target.style.backgroundColor = "#2A3942";
    }  

    if (e.target.nodeName === "LABEL"){
        lastContactClicked.style.backgroundColor = "#111B21";
        lastContactClicked = e.target.parentNode;
        e.target.parentNode.style.backgroundColor = "#2A3942";
    } 

    if (e.target.nodeName === "IMG"){
        lastContactClicked.style.backgroundColor = "#111B21";
        lastContactClicked = e.target.parentNode.parentNode;
        e.target.parentNode.parentNode.style.backgroundColor = "#2A3942";
    } 

    if (window.innerWidth < 1040){
        contacts_panel.classList.toggle("show_element");
        chat_panel.classList.toggle("hidden_element");
        let profileImage = lastContactClicked.querySelector("img");
        let profileName = lastContactClicked.querySelector("label");
        selected_profileImg.src = profileImage.src;
        selected_profileName.textContent = profileName.textContent;
    }

});

// Resolve problem with body overflow after refresh (puting the scroll on top before setting the overflow hidden property)
window.onbeforeunload = function () {
    scrollToTop(document.querySelector("#chat_panel"));
  }

function scrollToTop(element) {
    element.scroll({ top: 0 });
}












