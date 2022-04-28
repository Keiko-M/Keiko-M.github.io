const app = new Vue({
    el: '#app',
      data: {
        isSubmitted: false,
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        dob: "1999-01-01" ,
        colchester: 'yes',
        isHidden: false,
        postcode: 'CO1 1JX',
        addresses: [1],
        message: ''
    },
    computed: {
      checkAge: function() {
          const date18YrsAgo = new Date();
          date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
          // check if the date of birth is before that date
          const dobDate = new Date(this.dob);
          return dobDate >= date18YrsAgo;
      }
    },
    methods:{
      // findAddress: function(event){
      //   fetch("https://interviewtask.azurewebsites.net/api/address?postcode=co1%201jx")
      //   .then(response => response.json());

      //   alert("Hello");
      // },
        // let url = 'https://interviewtask.azurewebsites.net/api/address?postcode=co1%201jx';
        // let response = await fetch(url);

        // let responseJason = await response.json(); // read response body and parse as JSON

        // let noOfresponse = responseJason.addresses.length;
        // addresses = responseJason

        // // for(let i = 0, l = noOfresponse; i < l; i++) {
        // //   addresses.push(responseJason.addresses[i].Name);
        // // }
        // fetch("https://interviewtask.azurewebsites.net/api/address?postcode=co1%201jx")
        //   .then(response => response.json())

        // alert(responseJason.addresses[i].Name);
        // alert(responseJason.addresses[1].Name);

      resetpostcode: function() {
        this.postcode = '';
      }
    },
});

