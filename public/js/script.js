/*window.onload = function () {
  const name_page = document.getElementById("name_page").innerText;
  if(name_page == "arcadia")
    document.getElementsByClassName("banner")[0].style.backgroundImage = "url('/assets/img/banner_index.jpg')";
  else{
    document.getElementsByClassName("banner")[0].style.backgroundImage = "url('/assets/img/banner_landscape.jpg')";
  }
}*/

async function postFormDataAsJson({ url, formData}) {
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
		if (response.redirected) {
			window.location.href = response.url;
			return response.json();
 		}	
		if (!response.ok) {
			const errorMessage = await response.text();
			throw new Error(errorMessage);
		}
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
		const responseData = await postFormDataAsJson({ url, formData});
	} catch (error) {
		console.error(error);
	}  
}