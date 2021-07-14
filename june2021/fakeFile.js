class File {
    constructor(fullName,contents) {
        this.fullName = fullName;
        this.contents = contents;
        this.filename = fullName.split(".").slice(0,-1).join(".");
        this.extension = fullName.split(".").slice(-1).join(".");
    }
    // static fullName ;
    getContents() {
        return this.contents
    }

    write(str) {
        return this.contents = this.contents + "\n" + str
    }

    gets() {
        let currentLine = this.contents.split("\n").shift();
        this.contents = this.contents.split("\n").slice(1);
        return currentLine || undefined
    }

    getc() {
        let currentLetter = this.contents.split("").shift();
        this.contents = this.contents.split("").slice(1);
        return currentLetter
    }
  }
  var example = new File("example.txt", "An example file");
  console.log(
    example.fullName,//"example.txt");
    example.filename,//"example");
    example.extension,//"txt");
    example.fullName = "modified.txt",
    example.fullName,//"modified.txt"),
    example.fullName,//"example.txt"),
    example.filename = "hacked",
    example.filename,//"hacked"),
    example.filename,//"example"),
    example.extension = "locky",
    example.extension,//"locky"),
    example.extension,//"txt"),
    example.getContents(),//"An example file"),
    example.write("Hello World"),
    example.getContents(),//"An example file\nHello World"),
    example.write("This is an example file provided to you by the Kata author"),
    example.getContents(),//"An example file\nHello World\nThis is an example file provided to you by the Kata author"),
    example.write("This example file is used as an example test case."),
    example.getContents(),//"An example file\nHello World\nThis is an example file provided to you by the Kata author\nThis example file is used as an example test case."),
    example.gets(),//"An example file"),
    example.gets(),//"Hello World"),
    example.gets(),//"This is an example file provided to you by the Kata author"),
    example.gets(),//"This example file is used as an example test case."),
    example.gets(),//undefined),
    example.gets(),//undefined),
    example.gets(),//undefined),
    example.getc(),//"A"),
    example.getc(),//"n"),
    example.getc(),//" ");
    example.getc(),//"e");
    example.getc(),//"x");
    example.getc(),//"a");
    example.getc(),//"m");
    example.getc(),//"p");
    example.getc(),//"l");
    example.getc(),//"e");
  )