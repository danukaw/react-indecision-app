
//var element = <h1>This is JSX...</h1>;
console.log('App.js is running...');

// if statements 
// ternery operator
// logical and operator

const app = {
    title : "Indecition App",
    subtitle : "Put your life in the hands of computers",
    options : ['option 01', 'option 02']
}

function getSubtitle(subtitle) {
    if(subtitle) {
        return <p> {subtitle}</p>
    }
}

function getOptions(options) {
    
    if (options) {
        return (
            <div>
                <p> Here are your options </p>
                <ol>
                    <li>{options[0]}</li>
                    <li>{options[1]}</li>
                </ol>
            </div>
        );
    }
}

const templateOne = (
    <div>
        <h1>{app.title}</h1>
        {getSubtitle(app.subtitle)}
        {(app.options && app.options.length > 0) ? getOptions(app.options) : <p>No options</p> }
    </div>
);

const user = {
    name : "Danuka Wijetunge",
    age : 32,
    ocation : "Sri Lanka"
}

function getLocation(location) {
    if(location) {
        return <p>Location : {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : 'Anonynamus'}</h1>
        {(user.age && user.age >= 18) && <p>Age : {user.age}  :Years Old</p>}
        {getLocation(user.ocation)}
    </div>

);

const webRoot = document.getElementById("app");

ReactDOM.render(templateOne, webRoot);

