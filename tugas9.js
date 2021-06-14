function tugasObject() {
  var karyawan = {
    nama : 'uci',
    umur : 35,
    alamat : 'keraton',
    status : 'menikah',
    posisi : 'admin',
    gaji : 1800000,
  }
  for(var x in karyawan){
    console.log(karyawan[x])
  }
}

tugasObject()
