// builds an arithmetic AST.
{
  const symbols = require("../main/symbolFactories");
}

Start
  = _ e:Expression _ { return e; }

Expression
  = head:Term tail:(_ ("+" / "-") _ Term)* {
      return tail.reduce((head, tail) => symbols.BinaryOperation({ operator: tail[1], left: head, right: tail[3] }, location()), head);
    }

Term
  = head:Factor tail:(_ ("*" / "/") _ Factor)* {
      return tail.reduce((head, tail) => symbols.BinaryOperation({ operator: tail[1], left: head, right: tail[3] }, location()), head);
    }

Factor
  = "(" _ expr:Expression _ ")" { return expr; }
  / Integer

Integer "integer"
  = _ [0-9]+ { return symbols.Integer({ value: parseInt(text(), 10) }, location()); }

_ "whitespace"
  = [ \t\n\r]*
