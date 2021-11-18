var store = new Vue ({
    el: '#section1',
    data: {
        sitename: 'After School Lessons',
        cart: [],
        Lessons: lessons,
        sortBy: "subject",        
        orderBy: 'ascending',
    },
               
    methods: {

    },
    computed: {
        cartItemCount: function (){
            return this.cart.length || '';
        },
        sorted() {
            console.log(this.sortBy)
            let sortLessons = this.Lessons;       
     
            sortLessons = sortLessons.sort((a,b) => {
                    if(this.sortBy == 'subject'){
                        let fa = a.subject.toLowerCase(), fb = b.subject.toLowerCase();

                        if (fa < fb ) {
                            return -1
                        }
                        if (fa > fb ) {
                            return 1
                        }
                    } 
                    else if (this.sortBy == 'location'){                        
                        let fa = a.subject.toLowerCase(), fb = b.subject.toLowerCase();

                        if (fa < fb ) {
                            return -1
                        }
                        if (fa > fb ) {
                            return 1
                        }
                    }

                return 0
            })
            return sortLessons
        },
    }
}) 