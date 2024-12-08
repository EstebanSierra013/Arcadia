async function handleFormDataAsJson({ url, formData=""}) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);
	
	const fetchOptions = {
		method: "POST",
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
		window.location.reload();
	}catch(err){
		console.log(err)
	}
}

async function handleFormSubmit(event) {
  event.preventDefault();
	
  const form = event.currentTarget;
  const url = form.action;

	try {
		const formData = new FormData(form);
		await handleFormDataAsJson({ url, formData});
		form.reset();
	} catch (error) {
		console.error(error);
	}  
}

async function handleFetchDelete(event) {
	event.preventDefault();

	const button = event.currentTarget;
  const url = button.href;

	const fetchOptions = {
		method: "DELETE"
	};

	try{
		const response = await fetch(url,fetchOptions);		
		
		if (!response.ok) {
			const errorMessage = await response.text();
			throw new Error(errorMessage);
		}		
		window.location.reload();
	}catch(err){
		window.location.reload();
		console.log(err)
	}
}

async function handleFetchEdit(event) {
	event.preventDefault();

	const button = event.currentTarget;
  const url = button.href;

	try{
		const response = await fetch(url);		
		
		if (!response.ok) {
			const errorMessage = await response.text();
			throw new Error(errorMessage);
		}		
		
		const { objet } = await response.json();
		handleFormEdit(objet[0],url)
	}catch(err){
		window.location.reload();
		console.log(err)
	}
}

function handleFormEdit(data,url){
	for(const [key, value] of Object.entries(data)){
		document.getElementById(key).value = value;
	}
	document.getElementById("form-gestion").action = url;
}

async function handleFetchGet(event) {
	event.preventDefault();

	const button = event.currentTarget;
  const url = button.href;
	console.log(url)
	
	const fetchOptions = {
		method: "GET"
	};

	try{
		const response = await fetch(url,fetchOptions);		
		console.log(response)
		if (!response.ok) {
			const errorMessage = await response.text();
			throw new Error(errorMessage);
		}				
	}catch(err){
		window.location.reload();
		console.log(err)
	}
}

async function showInfo(event){
	event.preventDefault();	
	const button = event.currentTarget;
  const name = button.id;
	const url = button.href + "/" + name;
	console.log(url)

	const fetchOptions = {
		method: "POST"
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

	document.getElementById(`${name}-info`).style.display = "block";
}