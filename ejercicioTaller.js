

     class lenguajeProgramacion {
        constructor(codigo, nombre, framework, descripcion) {
          this.codigo = codigo;
          this.nombre = nombre;
          this.framework = framework;
          this.descripcion = descripcion;
        }
      
        entrar() {
          console.log("Estamos entrando al lenguaje de programación: ", this.nombre);
        }
      
        procesar() {
          console.log("Estamos procesando en el lenguaje de programación: ", this.nombre);
        }
      
        salir() {
          console.log("Estamos saliendo del lenguaje de programación: ", this.nombre);
        }
      
        // Métodos Setters And Getters para acceder y modificar los atributos:


        //Código
        setCodigo(codigo) {
            this.codigo = codigo;
          }

        getCodigo() {
          return this.codigo;
        }


        //Nombre
        setNombre(nombre) {
            this.nombre = nombre;
          }

        getNombre() {
          return this.nombre;
        }
      
        //Framework
        setFramework(framework) {
            this.framework = framework;
          }

        getFramework() {
          return this.framework;
        }
      
        //Descripcion
        setDescripcion(descripcion) {
            this.descripcion = descripcion;
          }
        getDescripcion() {
          return this.descripcion;
        }
      
        
      }
      
      //Herencia de la clase LenguajeProgramacion:
      class Python extends lenguajeProgramacion {
        constructor(codigo, nombre, framework, descripcion, version) {
          super(codigo, nombre, framework, descripcion);
          this.version = version;
        }
      
        entrar() {
          console.log("Estamos entrando al lenguaje de programación Python: ", this.version);
        }
      
        salir() {
          console.log("Estamos saliendo del lenguaje de programación Python: ", this.version);
        }
      }
      
      class Java extends lenguajeProgramacion {
        constructor(codigo, nombre, framework, descripcion, version) {
          super(codigo, nombre, framework, descripcion);
          this.version = version;
        }
      
        entrar() {
          console.log("Estamos entrando al lenguaje de programación Java", this.version);
        }
      
        salir() {
          console.log("Estamos saliendo del lenguaje de programación Java", this.version);
        }
      }
      
      class JavaScript extends lenguajeProgramacion {
        constructor(codigo, nombre, framework, descripcion, version) {
          super(codigo, nombre, framework, descripcion);
          this.version = version;
        }
      
        entrar() {
          console.log("Estamos entrando al lenguaje de programación JavaScript: ", this.version);
        }
      
        salir() {
          console.log("Estamos saliendo del lenguaje de programación JavaScript: ", this.version);
        }
      }
      
      // Creación de objetos utilizando polimorfismo
      const lenguajes = [
        new Python("PY", "Python", "Django", "Es un lenguaje interpretado y de alto nivel", "3.9"),
        new Java("JAV", "Java", "Spring", "Es un lenguaje orientado a objetos y de propósito general", "15"),
        new JavaScript("JS", "JavaScript", "React", "Es un lenguaje de programación interpretado y orientado a objetos", "ES6")
      ];
      
      for (let lenguaje of lenguajes) {
        console.log("\n|||-----------------------------------------------------------------|||");
        lenguaje.entrar();
        lenguaje.procesar();
        lenguaje.salir();
      }
      
      // Modificación de atributos utilizando los métodos set
      lenguajes[0].setNombre("Python 3");
      
      // Acceso a los atributos utilizando los métodos get
      for (let lenguaje of lenguajes) {
        console.log("Código del lenguaje de programación:", lenguaje.getCodigo());
        console.log("Nombre del lenguaje de programación:", lenguaje.getNombre());
        console.log("Framework del lenguaje de programación:", lenguaje.getFramework());
        console.log("Descripción del lenguaje de programación:", lenguaje.getDescripcion());
        console.log("\n||-----------------------------------------------------------------||");
      }

