var store = new Vue ({
    el: '#section1',
    data: {
        showProduct: true,
        sitename: 'After School Lessons',
        cart: [],
        sortBy: "subject",  
        orderBy: 'ascending',
        searchValue: '',
        Lessons: lessons,  
        checkout: {
            name: "",
            pNo: null,
        } ,   
    },
               
    methods: {
        addToCart: function (lesson) {
            this.cart.push(lesson.id)
            if(lesson.spaces > 0){
               --lesson.spaces    
            }
        },
        canAddToCart: function(lesson){
          return lesson.availableInventory > this.cartCount(lesson.id);
        },
        showCheckout(){
            this.showProduct = this.showProduct ? false : true;
        },
        cartCount(id){
            let count = 0;
            for (let i = 0; i < this.cart.length; i++){
                if(this.cart[i] === id){
                    count++
                }
            }
            return count;
        }

    },
    computed: {

        cartItemCount: function(){
            return this.cart.length;
        },
        
        sorted() {
            let sortLessons = this.Lessons;       
     
            sortLessons = sortLessons.sort((a,b) => {
                    if(this.sortBy == "subject"){
                        let fa = a.subject.toLowerCase(), fb = b.subject.toLowerCase();

                        if (fa < fb ) {
                            return -1
                        }
                        if (fa > fb ) {
                            return 1
                        }
                    } 
                    else if (this.sortBy == 'location'){                        
                        let fa = a.location.toLowerCase(), fb = b.location.toLowerCase();

                        if (fa < fb ) {
                            return -1
                        }
                        if (fa > fb ) {
                            return 1
                        }
                    }
                return 0
            })
            if (this.sortBy == 'price'){                        
                sortLessons = sortLessons.sort((a,b) => {
                    return a.price - b.price
                })
            }
            if (this.sortBy == 'availability'){                        
                sortLessons = sortLessons.sort((a,b) => {
                    return a.spaces - b.spaces
                })
            }
            if (this.orderBy !=="ascending") {
                sortLessons.reverse()
            }
            if (this.searchValue != '' && this.searchValue) {
                sortLessons = sortLessons.filter((item) => {
                  return item.subject
                    .toUpperCase()
                    .includes(this.searchValue.toUpperCase())
                })
              }
            return sortLessons
        },
    }
}) 