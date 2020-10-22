    async function fetchData(datasource) {
        let resource = await fetch(datasource).then(response => {
            // bang operator - means "does not equal" 
            if (response.status !== 200) {
                throw new Error(`Danger Will Robinson! Here there be monsters! Error ${response.status}`);
            }

            return response;
        })

        // if we get success, then we can return back our resource
        let DataSet = await resource.json();

        return datasource;
    }

export { fetchData };