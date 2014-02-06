test( "learn one meaning", function() {
  result = parse( "x is y" );
  equal( result, true, "passes because x now means y" );
});

test( "return one meaning", function() {
  result = parse( "x is y" );
  result = parse( "what is x?" );
  equal( result, "y", "passes because meaning of x is returned" );
});