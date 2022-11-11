<template>
    <div>
      <v-tabs
        v-model="tab"
        centered
        slider-color="#f04e6e"
        background-color="transparent"
        class="hidden-xs-only">

        <v-tab  class="ml-1 purple--text"
        width="200px">
          Hotels
        </v-tab>
        </v-tabs>
    <v-form>
    <v-container>
      <v-row>
            <v-col
          cols="12"
          sm="6"
          md="3"
          dense
        >
          <v-text-field color="purple"
            label="Select destination"
            outlined
          ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="2"
            >
          <v-menu
            v-model="checkin"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field color="purple"
                v-model="date1"
                label="Check in"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date1"
              :min="nowDate"
              @input="checkin = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="2"
            >
          <v-menu
            v-model="checkout"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field color="purple"
                v-model="date2"
                label="Check Out"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date2"
              :min="date1"
              @input="checkout = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
          <v-col
            cols="12"
            sm="6" md="3"
          >
          <v-dialog
            v-model="dialog"
            width="500"
          >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field color="purple"
              placeholder="Travellers"
              v-model="travellers"
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            </template>
            <v-card>
              <!-- <v-row> -->
                <!-- <v-col> -->
              <v-card-title class="text-h5">
                Adults &nbsp;<h6 class="text-center grey--text">(+12yrs)</h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; &nbsp; &nbsp;<v-btn class="control-button" @click="decreaseAdult">-</v-btn>
                &nbsp; {{ Adult }} &nbsp;
                <v-btn class="control-button" @click="increaseAdult">+</v-btn>
              </v-card-title>
            <!-- </v-col>
            <v-col> -->
              <v-card-title class="text-h5">
                Childern &nbsp;<h6 class="text-center grey--text">(2-12yrs)</h6>  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <v-btn class="control-button" @click="decreaseChild">-</v-btn>
                &nbsp; {{ Child }} &nbsp;
                <v-btn class="control-button" @click="increaseChild">+</v-btn>
              </v-card-title>
            <!-- </v-col>
            <v-col> -->
              <v-card-title class="text-h5">
                Infants &nbsp;<h6 class="text-center grey--text">(0-2yrs)</h6> &nbsp;&nbsp;&nbsp; :&nbsp; &nbsp; &nbsp;&nbsp; <v-btn class="control-button" @click="decreaseInfant">-</v-btn>
                &nbsp; {{ Infant }} &nbsp;
                <v-btn class="control-button" @click="increaseInfant">+</v-btn>
              </v-card-title>
            <!-- </v-col> -->
            <!-- </v-row> -->
            </v-card>
              <!-- </v-card-title>
            </v-card> -->
            </v-dialog>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="2"
        >
          <v-btn height="55" color="#92278f" dark><v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-col>
    </v-row>
    </v-container>
    </v-form>  
</div>
</template>

<script>
export default {
  data:()=>({
    tab: null,
    dialog: false,
    travellers: '',
    Adult: 1,
    Child: 0,
    Infant: 0,
    adults:'',
    date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    // date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    date2: '',
    nowDate: new Date().toISOString().slice(0,10),
    checkin: false,
    checkout: false
  }),

  mounted() {
    this.travellers = this.Adult + '  ' + 'Adults' + '  ' + this.Child + '  ' + 'Childs' + '  ' +this.Infant + '  ' + 'Infants' ;
 },

  methods:{
      decreaseAdult() {
        console.log('decrease button clicked');
        console.log(this.Adult--);
        console.log(this.Adult)
      },
      increaseAdult() {
          console.log('increase button clicked');
          console.log(this.Adult++);
      },
      decreaseChild() {
          console.log('decrease button clicked');
          console.log(this.Child--);
      },
      increaseChild() {
          console.log('increase button clicked');
          console.log(this.Child++);
      },
      decreaseInfant() {
          console.log('decrease button clicked');
          console.log(this.Infant--);
      },
      increaseInfant() {
          console.log('increase button clicked');
          console.log(this.Infant++);
      },
  }
}
</script>

<style>

/* .box{
  background: #fff;
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid #c6c6c6;
  box-shadow: 2px 2px 8px rgba(0,0,0,.5);
}

.box-label{
  margin-right: 15px;
}

.box .button{
  width: 37px;
  height: 37px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
}

.box .button:active{
  background: #ccc;

}

.box .v-text-field{
  width: 60px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 22px;
  margin: 0 10px;
} */

</style>