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
	console.log(formDataJsonString)
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

function handleFormEdit(data,url){
	const form = document.getElementById("form-gestion")
	for(const [key, value] of Object.entries(data)){
		if(document.getElementById(key)){
			switch(key){
				case "Id":
					break

				case "Date":
					const date = new Date(value);
					document.getElementById(key).value = date.toISOString().substring(0,10);
					break

				case "Habitat":					
					document.getElementById(key).selectedIndex = value;					
					break

				case "Animal":					
					document.getElementById(key).selectedIndex = value;					
					break

				case "Role_id":
					document.getElementById(key).value = value;	
					if(value == 1){					
						let select = document.getElementById(key);
						let opt = document.createElement('option')
						opt.value = value
						opt.innerHTML = "Administrateur"
						select.appendChild(opt);						
						document.getElementById(key).value = value;	
						document.getElementById(key).readOnly = true;
						break
					}
					document.getElementById(key).disabled= false;
					break

				case "Username":
					document.getElementById(key).readOnly = true;
					document.getElementById("Password").disabled= true;

				default:
					document.getElementById(key).value = value;
			}			
		}		
	}
	form.action = url;
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
		console.log(err)
	}
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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

