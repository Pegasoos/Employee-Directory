export default {

    BASEURL:"https://randomuser.me/api/?results=50",

    search: function(query){
      return fetch(this.BASEURL)
    }
};