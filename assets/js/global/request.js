class DataExtraction{
    _url;
    _response;

    //  ---------------------------------- envio y captura ----------------------------------
    async dataCaptura(url, data){
        try {
            let data_info = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            this._response = await data_info.json();
            
        } catch (error) {
            this._response = error;            
        }

        return this._response;
    }

    // ----------------------------------  solo recibe ----------------------------------
    async receptorData(url){
        try {
            let data_info = await fetch(url);
            this._response = await data_info.json();
            
        } catch (error) {
            this._response = error;            
        }

        return this._response;
    }

}

export default DataExtraction;
