async function handleFormDataAsJson({ url, formData, method}) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);
	
	const fetchOptions = {
		method: method,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString
	};
	
	try{
		const response = await fetch(url, fetchOptions);

		if (!response.ok) {
			const errorMessage = await response.text();
			throw new Error(errorMessage);
		}		
	}catch(err){
		console.log(err)
	}
}

async function handleFormSubmit(event, method = "POST") {
  event.preventDefault();
	
  const form = event.currentTarget;
  const url = form.action;

	try {
		const formData = new FormData(form);
		await handleFormDataAsJson({ url, formData, method});
		form.reset();
	} catch (error) {
		console.error(error);
	}  
}

function backAway(){
			history.back();
}

/*
async function handleFetchGet(event){
	event.preventDefault();

	const link = event.currentTarget;
	const url = link.href;
	const split_url = url.split('/')
	const ressource = split_url[split_url.length - 1]

	const response = await fetch(url);
	const data = await response.json()
	createSection(data, ressource)
}


function hideSection(event){

	event.preventDefault();

	const link = event.currentTarget;
	const id = link.id.split("-").slice(0,2).join("-")+"-s";

	let section = document.getElementById(id);
	let content = document.getElementsByClassName("content-section")
	
	for (const [key, value] of Object.entries(content)) {		
		value.style.display = "none"
	}

	section.style.display = "flex";
}
*/
         
              
          

          
