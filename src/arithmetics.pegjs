// builds an arithmetic AST.
Expression
  = head:Term tail:(_ ("+" / "-") _ Term)* {
      return tail.reduce((head, tail) => ({ Expression: { operator: tail[1], left: head, right: tail[3] } }), { Expression: head });
    }

Term
  = head:Factor tail:(_ ("*" / "/") _ Factor)* {
      return tail.reduce((head, tail) => ({ Term: { operator: tail[1], left: head, right: tail[3] } }), { Term: head });
    }

Factor
  = "(" _ expr:Expression _ ")" { return { Factor: expr }; }
  / i:Integer { return { Factor: i };}

Integer "integer"
  = _ [0-9]+ { return { Integer: parseInt(text(), 10) }; }

_ "whitespace"
  = [ \t\n\r]*
