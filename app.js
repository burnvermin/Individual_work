var store = new Vue ({
    el: '#section1',
    data: {
        sitename: 'After School Lessons',
        cart: [],
        Lessons: lessons
    },
               
    methods: {

    },
    computed: {
        cartItemCount: function (){
            return this.cart.length || '';
        },
        sorted() {
            let sortLessons = this.Lessons;       
                let sortType = document.getElementById('sortbBy');
                let sortOrder = document.getElementById('orderBy');
                    sortType = sortType.value;
                    sortOrder = sortOrder.value;
     
            sortLessons = sortLessons.sort((a,b) => {
                    if(sortType == "subject"){
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
            if(sortOrder !=="ascending"){
                sortLessons.reverse()
            }
            return sortLessons
        },
        filteredRecipes() {
          let tempRecipes = this.lessons
          
          // Process search input
          if (this.searchValue != '' && this.searchValue) {
              tempRecipes = tempRecipes.filter((item) => {
                return item.title
                  .toUpperCase()
                  .includes(this.searchValue.toUpperCase())
              })
            }
        }
    }
}) 