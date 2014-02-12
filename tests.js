test( "test learn one meaning", function() {
  result = parse( "x is y" );
  equal( result, true, "passes because x now means y" );
});

test( "test return one meaning", function() {
  result = parse( "x is y" );
  result = parse( "what is x?" );
  equal( result, "y", "passes because meaning of x is returned" );
});

test( "test meaning equality", function() {
  result = parse( "x is a" );
  result = parse( "y is a" );
  result = parse( "is x y?" );
  equal( result, true, "passes because meanings are equal" );
});

test( "test learn complex meaning", function() {
  result = parse( "x is y and z" );
  equal( result, true, "passes because x now means y and z" );
});