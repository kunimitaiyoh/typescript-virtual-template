// builds an arithmetic AST.
Start
  = _ e:Expression _ { return e; }

Expression
  = head:Term tail:(_ ("+" / "-") _ Term)* {
      return tail.reduce((head, tail) => ({ BinaryOperation: { operator: tail[1], left: head, right: tail[3] } }), head);
    }

Term
  = head:Factor tail:(_ ("*" / "/") _ Factor)* {
      return tail.reduce((head, tail) => ({ BinaryOperation: { operator: tail[1], left: head, right: tail[3] } }), head);
    }

Factor
  = "(" _ expr:Expression _ ")" { return expr; }
  / Integer

Integer "integer"
  = _ [0-9]+ { return { Integer: parseInt(text(), 10) }; }

_ "whitespace"
  = [ \t\n\r]*
