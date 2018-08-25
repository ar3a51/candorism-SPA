<template>
    <main>
        <div class="title col-12">
            <h1>welcome to our registration page</h1>
        </div>
        <div class="id-no col-4">
            <div class="col-4 float-left">
                <Label for="ktp">Masukkan no KTP:</Label>
            </div>
            <div class="col-4 float-left">
                <input type="text" class="form-control" name="ktp"/>
            </div>
            <div class="col-4 float-left">
                <button class="btn" @click="submit">Submit</button>
            </div>
        </div>
        <div class="col-11 user-details float-left">
            <div class="col-6 float-left">
                <fieldset class="form-group">
                    <label for="name">Nama</label>
                    <input type="text" class="form-control" name="Nama" id="Nama" readonly/>
                </fieldset>
                <fieldset class="form-group">
                     <label for="alamat">Alamat</label>
                    <input type="text" class="form-control" name="Alamat" id="alamat" readonly/>
                </fieldset>
                <fieldset class="form-group">
                    <label>Jenis Kelamin</label>
                    <div>
                        <div class="form-check form-check-inline">
                            
                            <input type="radio" name="gender" id="lk" value="lk" class="form-check-input">
                            <label class="form-check-label" for="lk">Laki-laki</label>
                        </div>
                        <div class="form-check form-check-inline">
                            
                            <input type="radio" name="gender" id="pr" value="pr" class="form-check-input">
                            <label class="form-check-label" for="pr">Perempuan</label>
                        
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-6 float-left">
                <fieldset class="form-group">
                    <label for="namakel">Nama Keluarga</label>
                    <input type="text" class="form-control" readonly name="namakel" id="" />
                </fieldset>
                 <fieldset class="form-group">
                    <label for="status">Status</label>
                    <input type="text" class="form-control" readonly name="status" id="" />
                </fieldset>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    methods: {
        submit: function(e){
            alert("submitted");
        }
    }
}
</script>
<style lang="scss" scoped>
   .float-left {
       float: left;
   }
   main {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       height: auto;
      
       .id-no {
           padding: 10px;
           margin-top: 100px;
           border-radius: 4px;

           border-color: #ccc;
           border-width: 0.1em;
           border-style: solid;

           .btn {
               justify-content: center;
           }
       }
       .user-details {
           height: auto;

           .form-check {
               margin-right: 60px;

              .form-check-label {
                   margin-left: 40px;
               }
           }
       }
   }
</style>

