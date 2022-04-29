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
      resetpostcode: function() {
        this.postcode = '';
        this.isHidden = false}
    },
});

