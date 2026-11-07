import indexPageData from './pages/indexPage.js';
const getPageContext = (pagePath) =>{
    console.log("getPageContext Invoked:", pagePath); //De nada me sirve, esto es interno
    switch(pagePath){
        case "/index1.html":
            context = {...context, ...indexPageData}; // Destruir: "..."
            break;
    }
    console.log("getPageContext Context:", JSON.stringify(context,null,2)) // "Stringify" depura
    
    return context;
}

export default getPageContext; // Le dice al mundo exterior "este módulo es lo que te ofrece"