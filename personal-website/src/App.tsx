import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Angad Singh Josan</p>
        <h6>Programmer, Debater, Student</h6>
        <Projects />
      </header>
    </div>
  );
}

async function fetchGithubRepos(url:string) {
  const resp = await fetch(url)
  const json = await resp.json();

  var text:string = ""
  for(let i = 0; i < json.length; i++){
    text += json[i].html_url
  }  
  
  return text;
}

function Projects() {
  var text = fetchGithubRepos("https://api.github.com/users/ajosan25/repos")
  console.log(text)
  return (
    <>
      <p></p>
    </>
  )
}

export default App;
