const Info =;
export const Get_information = () => {
    return new Promise(response, reject){
        setTimeout(() => { response(Info) }, 3000);
    };
}