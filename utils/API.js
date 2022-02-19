export default {

    BASEURL:"https://randomuser.me/api/?results=5",

    search: function(query){
      return fetch(this.BASEURL)
    }
};