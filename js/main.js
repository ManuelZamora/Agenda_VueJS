var app = new Vue({
    el:'#app',
    data:{
        contactos:[],
        filtro: [],
        nombre:'',
        apellidos:'',
        direccion:'',
        correo: '',
        telefono: '',
        UpdateNombre:'',
        UpdateApellidos:'',
        UpdateDireccion:'',
        UpdateCorreo: '',
        UpdateTelefono: '',
        idUp: -1,
        ViewActualizar: false
        },
    methods:{
        NewContact(){
            this.contactos.push({
                nombre: this.nombre,
                apellidos: this.apellidos,
                direccion: this.direccion,
                correo: this.correo,
                telefono: this.telefono
            });
            this.nombre = '';
            this.apellidos = '';
            this.direccion = '';
            this.correo = '';
            this.telefono = '';
        },
        ViewUpdate(id_contacto){
            this.idUp = id_contacto;
            this.UpdateNombre = this.contactos[id_contacto].nombre;
            this.UpdateApellidos = this.contactos[id_contacto].apellidos;
            this.UpdateDireccion = this.contactos[id_contacto].direccion;
            this.UpdateCorreo = this.contactos[id_contacto].correo;
            this.UpdateTelefono = this.contactos[id_contacto].telefono;

            this.ViewActualizar = true;
        },
        DeleteContact(id_contacto){
            this.contactos.splice(id_contacto,1);
        },
        SaveUpdate(id_contacto){
            this.ViewActualizar = false;
            this.contactos[id_contacto].nombre = this.UpdateNombre;
            this.contactos[id_contacto].apellidos = this.UpdateApellidos;
            this.contactos[id_contacto].direccion = this.UpdateDireccion;
            this.contactos[id_contacto].correo = this.UpdateCorreo;
            this.contactos[id_contacto].telefono = this.UpdateTelefono;
        }
    }
})