<template>
  <q-page class="q-pa-md">
    <!-- section usernam, date now, and user photo -->
    <section class="section1">
      <div class="row" style="height: 200px">
        <div class="col">
          <!-- username -->
          <div
            class="col q-pa-md text-h5 text-weight-bold"
            style="height: 74px"
          >
            Hi {{ name }}
          </div>
          <!-- date now -->
          <div
            class="col q-pa-md text-h6 text-weight-medium"
            style="height: 74px"
          >
            {{ currentDate() }}
          </div>
        </div>
        <div class="col flex flex-center">
          <!-- user img -->
          <img
            :src="profile_image"
            alt=""
            style="
              height: 130px;
              width: 30;
              border-radius: 20px;
              object-fit: cover;
            "
          />
        </div>
      </div>
    </section>
    <br />
    <!-- section account balance -->
    <section class="section2">
      <q-card class="my-balance bg-warning" style="border-radius: 20px">
        <div
          class="row"
          style="height: 90px"
          @click="this.$router.push('/account')"
        >
          <div
            class="col-6 flex flex-center text-h6 text-weight-bold"
            style="color: #445cb4"
          >
            Account balance
          </div>
          <div class="vertical"></div>
          <div class="col-6 flex flex-center text-h5 text-weight-bolder">
            $ {{ balance.toLocaleString() }}
          </div>
        </div>
      </q-card>
    </section>
    <br />
    <!-- section add. -->
    <section class="section3">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="grey-8"
        navigation
        height="220px"
      >
        <!-- loop card for shows accout -->
        <q-carousel-slide v-for="index in 3" :key="index" :name="index">
          <q-card
            class="my-button bg-grey-13 q-pa-md no-shadow"
            style="height: 150px"
          >
            <div class="">ADS</div>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
    </section>
    <!-- section shotcut -->
    <section class="section4">
      <q-card
        class="my-shotcut bg-grey-2 no-shadow"
        style="border-radius: 20px"
      >
        <div class="row q-pa-md text-subtitle2" style="height: 200px">
          <!-- button 1: Balance -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                to="/account"
                size="md"
                text-color="dark"
                color="green-12"
                icon="account_balance_wallet"
              />
            </div>
            <div class="col flex flex-center">Balance</div>
          </div>
          <!-- button 2: Pay bill -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                to="/test"
                size="md"
                text-color="dark"
                color="green-12"
                icon="receipt_long"
              />
            </div>
            <div class="col flex flex-center">Pay Bill</div>
          </div>
          <!-- button 3: My qrcode -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                to="/my-qrcode"
                round
                size="md"
                text-color="dark"
                color="green-12"
                icon="qr_code_2"
              />
            </div>
            <div class="col flex flex-center">My QRcode</div>
          </div>
          <!-- button 4 -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                size="md"
                text-color="dark"
                color="green-12"
                icon="add"
              />
            </div>
            <div class="col flex flex-center">add</div>
          </div>
          <!-- button 5 -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                size="md"
                text-color="dark"
                color="green-12"
                icon="add"
              />
            </div>
            <div class="col flex flex-center">add</div>
          </div>
          <!-- button 6 -->
          <div class="col-4">
            <div class="col flex flex-center">
              <q-btn
                round
                size="md"
                text-color="dark"
                color="green-12"
                icon="add"
              />
            </div>
            <div class="col flex flex-center">add</div>
          </div>
        </div>
      </q-card>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { alpha_database } from "../stores/database";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";

export default defineComponent({
  name: "HomePage",
  async mounted() {
    onAuthStateChanged(this.$auth, async (user) => {
      if (user) {
        // uid = user.uid;
        // console.log(uid);
        this.database.setSignedInUser(user);
        const signedInUserEmail = user.email;
        // console.log(this.signedInUser.email);
        var q = query(
          collection(this.$db, "users"),
          where("email", "==", signedInUserEmail)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          this.name = doc.data().name;
          this.profile_image = doc.data().profile_image;
          this.database.setImageProfile(this.profile_image);
          // get account data from another collection
          q = query(
            collection(this.$db, "accounts"),
            where("owner", "==", doc.id)
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            this.account.push(doc.data());
            this.balance += doc.data().balance;
            this.database.setUsername(this.name);
            this.database.setAccount(this.account);
          });
        });
      } else {
        this.$router.push("start");
      }
    });
  },
  data() {
    return {
      database: alpha_database(),
      name: "",
      account: [],
      balance: 0,
      slide: 1,
      profile_image: "",
    };
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },
  },
});
//   async methods() {
//     const id = this.$route.params.id;
//     console.log(id);
//   },
</script>
<style>
.vertical {
  border-left: 1px solid black;
  height: 90px;
  position: absolute;
  left: 50%;
}
</style>
