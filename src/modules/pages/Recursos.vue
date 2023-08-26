<template>
  <h1>Subir Archivos</h1>
  <input type="file" @change="selectFile" placeholder="dddd" />

  <button class="btn btn-primary" @click="uploadFile()">Subir archivo</button>
  <br />
  <p>Progreso</p>
  <progress max="100" :value="progress"></progress><span>{{ progress }}%</span>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(file, index) in selectedFile"
      :key="file + index"
    >
      {{ file.name }}
    </li>
  </ul>

  <div>
    <h1>Archivos</h1>
    <!-- <h2>{{ userData }}</h2> -->
    <div v-if="totalitems != totalLoaded" class="loading">Loading&#8230;</div>
    
    <div>
      <div
        class="col"
        v-for="(file, index) in userFilesList"
        :key="file + index"
      >
        <div class="card">
          <img :src="file.icono" width="100" alt="Icono" />

          <div class="card-body">
            <h5 class="card-text">{{ file.name }}</h5>
            <div>
              <div class="btn-group">
                <a :href="file.url" class="btn btn-sm btn-outline-secondary"
                  >Download</a
                >
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  listAll,
  getDownloadURL,
} from "firebase/storage";

import Swal from "sweetalert2";
import formats from "../helpers/files";
import { mapState } from "vuex";

export default {
  data() {
    return {
      nombre: null,
      listado: null,
      selectedFile: null,
      progress: 0,

      userData: "",
      userFilesList: [],
      totalLoaded: 0,
      totalitems: 0,
    };
  },

  components: {},
  computed: {
    ...mapState(["materia"]),
  },
  methods: {
 

    selectFile(event) {
      this.progress = 0;
      console.log(event.target.files);
      this.selectedFile = event.target.files;
      //console.log(this.selectedFile);
      for (var i = 0; i < this.selectedFile.length; i++) {
        this.selectedFile[i].progress = 0;
      }
    },

    uploadFile() {
      try {
        this.totalBytes = 0;
        this.totalTranfer = 0;
        const storage = getStorage();
        for (var i = 0; i < this.selectedFile.length; i++) {
          console.log(
            "el tipo es" + this.selectedFile[i] + this.selectedFile[i].name
          );
          const storageRef = ref(
            storage,
            this.materia.recurso + this.selectedFile[i].name
          );
          this.totalBytes += this.selectedFile[i].size;
          const uploadTask = uploadBytesResumable(
            storageRef,
            this.selectedFile[i]
          );
          uploadTask.on("state_changed", (snapshot) => {
            this.progress = Math.floor(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            snapshot.task.then((res) => {
              console.log(res + "subidooo");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Archivo " + res.metadata.name + " Subido",
                showConfirmButton: false,
                timer: 1500,
              });
            });
          });
        }
      } catch (err) {
        console.log(err);
      }
    },

    async listAllm() {
      try {
        const storage = getStorage();
        //const auth = getAuth();

        const storageRef = ref(storage, this.materia.recurso);

        listAll(storageRef).then((res) => {
          console.log(res);
          this.totalitems = res.items.length;

          res.items.forEach((itemRef) => {
            getDownloadURL(itemRef).then((url) => {
              console.log(url);
              var icono =
                "https://cdn-icons-png.flaticon.com/512/633/633585.png";
              formats.formatos.forEach((formato) => {
                console.log(formato);
                console.log(
                  itemRef.name
                    .substring(
                      itemRef.name.lastIndexOf(".") + 1,
                      itemRef.name.length
                    )
                    .toLowerCase()
                );
                if (
                  itemRef.name
                    .substring(
                      itemRef.name.lastIndexOf(".") + 1,
                      itemRef.name.length
                    )
                    .toLowerCase() == formato.formato
                ) {
                  icono = formato.icono;
                }
              });
              this.userFilesList.push({
                name: itemRef.name,
                url: url,
                icono: icono,
              });
              this.totalLoaded += 1;
            });
          });
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.listAllm();
  },
};
</script>

<style scoped>

.col {
  display: flex;
  grid-template-columns: repeat(3, 300px);

  align-items: center;
  justify-content: center;
}
.card {
  background-color: #27dbd5;
  border-radius: 8px;
  margin-bottom: 10px;
  width: 200px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Estilos para la clase "shadow-sm" (sombra) */
.shadow-sm {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: "";
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>